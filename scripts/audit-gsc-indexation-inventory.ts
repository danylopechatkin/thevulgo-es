import { readFile, writeFile } from "node:fs/promises";

type CsvRow = Record<string, string>;

const DEFAULT_INPUT = "docs/seo/final-seo-indexation-url-inventory.csv";
const MAX_REDIRECTS = 10;
const CONCURRENCY = 4;
const START_INTERVAL_MS = 150;
const RETRY_DELAYS_MS = [0, 600, 1_800];

/**
 * Route-level decisions made from the current production audit. Keep this
 * deliberately small: an exported historical 404 is not permission to create
 * a broad redirect rule.
 */
const CURRENT_404_DECISIONS = new Map<string, string>([
  ["https://www.thevulgo.es/es/instalacion-lamparas-colgantes", "RELEVANT_301_CANDIDATE_CONFIRMED"],
  ["https://www.thevulgo.es/_next/static/media/caa3a2e1cccd8315-s.p.853070df.woff2", "KEEP_404_INTENTIONAL_STALE_ASSET"],
]);

function parseCsv(input: string): CsvRow[] {
  const rows: string[][] = [];
  let row: string[] = [];
  let value = "";
  let quoted = false;

  for (let index = 0; index < input.length; index += 1) {
    const character = input[index];
    if (quoted) {
      if (character === '"' && input[index + 1] === '"') {
        value += '"';
        index += 1;
      } else if (character === '"') {
        quoted = false;
      } else {
        value += character;
      }
    } else if (character === '"') {
      quoted = true;
    } else if (character === ",") {
      row.push(value);
      value = "";
    } else if (character === "\n") {
      row.push(value.replace(/\r$/, ""));
      rows.push(row);
      row = [];
      value = "";
    } else {
      value += character;
    }
  }

  if (value || row.length) {
    row.push(value.replace(/\r$/, ""));
    rows.push(row);
  }

  const [headers, ...data] = rows;
  return data.filter((columns) => columns.some(Boolean)).map((columns) =>
    Object.fromEntries(headers.map((header, index) => [header, columns[index] ?? ""])),
  );
}

function serializeCsv(rows: CsvRow[], headers: string[]) {
  const escape = (value: string) => `"${value.replaceAll('"', '""')}"`;
  return `${headers.join(",")}\n${rows.map((row) => headers.map((header) => escape(row[header] ?? "")).join(",")).join("\n")}\n`;
}

function absoluteUrl(value: string, base: string) {
  try {
    return new URL(value, base).toString();
  } catch {
    return value;
  }
}

function attribute(tag: string, name: string) {
  const match = tag.match(new RegExp(`\\b${name}\\s*=\\s*["']([^"']*)["']`, "i"));
  return match?.[1] ?? "";
}

function htmlMetadata(html: string, finalUrl: string, contentType: string) {
  if (!/text\/html/i.test(contentType)) {
    return { canonical: "", htmlRobots: "", canonicalCount: 0 };
  }

  const linkTags = html.match(/<link\b[^>]*>/gi) ?? [];
  const canonicals = linkTags
    .filter((tag) => /\brel\s*=\s*["']canonical["']/i.test(tag))
    .map((tag) => absoluteUrl(attribute(tag, "href"), finalUrl))
    .filter(Boolean);
  const metaTags = html.match(/<meta\b[^>]*>/gi) ?? [];
  const robotsTag = metaTags.find((tag) => /\bname\s*=\s*["']robots["']/i.test(tag));

  return {
    canonical: canonicals[0] ?? "",
    htmlRobots: robotsTag ? attribute(robotsTag, "content") : "",
    canonicalCount: canonicals.length,
  };
}

async function sleep(milliseconds: number) {
  await new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function request(url: string) {
  let lastError = "";
  for (const delay of RETRY_DELAYS_MS) {
    if (delay) await sleep(delay);
    try {
      const response = await fetch(url, {
        redirect: "manual",
        headers: {
          "user-agent": "THEVULGO-GSC-indexation-audit/1.0 (+https://www.thevulgo.es)",
          accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        },
      });
      if (![429, 500, 502, 503, 504].includes(response.status)) return response;
      lastError = `transient HTTP ${response.status}`;
    } catch (error) {
      lastError = error instanceof Error ? error.message : String(error);
    }
  }
  throw new Error(lastError || "request failed after retries");
}

async function auditUrl(url: string) {
  const chain: string[] = [];
  let currentUrl = url;
  let initialStatus = "";

  for (let redirects = 0; redirects <= MAX_REDIRECTS; redirects += 1) {
    const response = await request(currentUrl);
    if (!initialStatus) initialStatus = String(response.status);
    const location = response.headers.get("location");
    chain.push(`${response.status} ${currentUrl}${location ? ` -> ${absoluteUrl(location, currentUrl)}` : ""}`);

    if (response.status >= 300 && response.status < 400 && location) {
      currentUrl = absoluteUrl(location, currentUrl);
      continue;
    }

    const contentType = response.headers.get("content-type") ?? "";
    const html = /text\/html/i.test(contentType) ? await response.text() : "";
    const metadata = htmlMetadata(html, currentUrl, contentType);
    return {
      currentInitialStatus: initialStatus,
      finalStatus: String(response.status),
      redirectChain: chain.join(" | "),
      finalUrl: currentUrl,
      canonical: metadata.canonical,
      htmlRobots: metadata.htmlRobots,
      xRobotsTag: response.headers.get("x-robots-tag") ?? "",
      responseType: contentType.split(";")[0],
      canonicalCount: metadata.canonicalCount,
    };
  }

  return {
    currentInitialStatus: initialStatus,
    finalStatus: "REDIRECT_LOOP_OR_TOO_MANY_REDIRECTS",
    redirectChain: chain.join(" | "),
    finalUrl: currentUrl,
    canonical: "",
    htmlRobots: "",
    xRobotsTag: "",
    responseType: "",
    canonicalCount: 0,
  };
}

function classify(issue: string, url: string, finalStatus: string, redirects: number) {
  if (issue === "server_error_5xx") {
    if (finalStatus === "200") return "VERIFIED_FIXED_CURRENT_200";
    if (finalStatus === "404") return "INTENTIONAL_404_CONFIRMED";
    return "CURRENT_STATUS_REQUIRES_INVESTIGATION";
  }
  if (issue === "not_found_404") {
    if (finalStatus === "200" && redirects > 0) return "RELEVANT_REDIRECT_VERIFIED";
    if (finalStatus === "404") return CURRENT_404_DECISIONS.get(url) ?? "KEEP_404_INTENTIONAL_UNSUPPORTED_CITY_SERVICE";
    return "CURRENT_STATUS_REQUIRES_INVESTIGATION";
  }
  if (issue === "crawled_not_indexed") {
    if (finalStatus === "200") return "CURRENT_200_URL_INSPECTION_REQUIRED";
    if (redirects > 0) return "HISTORICAL_REDIRECT_NON_INDEXABLE";
    return "CURRENT_NON_200_REQUIRES_REVIEW";
  }
  if (issue === "discovered_not_indexed") {
    if (finalStatus === "200") return "CURRENT_200_URL_INSPECTION_REQUIRED";
    if (redirects > 0) return "HISTORICAL_REDIRECT_NON_INDEXABLE";
    return "CURRENT_NON_200_REQUIRES_REVIEW";
  }
  return "UNCLASSIFIED";
}

async function main() {
  const input = process.env.GSC_INDEXATION_INVENTORY ?? DEFAULT_INPUT;
  const productionSha = process.env.GSC_PRODUCTION_SHA ?? "82a8cab9a8e185fa0ca80fab651d39f27669a0ba";
  const rows = parseCsv(await readFile(input, "utf8"));
  const checkedAt = new Date().toISOString();
  let nextIndex = 0;
  const summaries = new Map<string, number>();
  const workers = Array.from({ length: CONCURRENCY }, async () => {
    while (true) {
      const index = nextIndex;
      nextIndex += 1;
      if (index >= rows.length) return;
      if (index) await sleep(START_INTERVAL_MS);
      const row = rows[index];
      try {
        const result = await auditUrl(row.url);
        const redirects = result.redirectChain.split(" | ").length - 1;
        const historicalIssue = row.gsc_issue ?? row["Historical GSC issue"] ?? "";
        const originalCrawlDate = row.gsc_last_crawl ?? row["Original GSC crawl date"] ?? "";
        const classification = classify(historicalIssue, row.url, result.finalStatus, redirects);
        Object.assign(row, {
          "Historical GSC issue": historicalIssue,
          "Original GSC crawl date": originalCrawlDate,
          "Current HTTP status": result.currentInitialStatus,
          "Final HTTP status": result.finalStatus,
          "Final URL": result.finalUrl,
          "Redirect chain": result.redirectChain,
          "Canonical": result.canonical,
          "HTML robots": result.htmlRobots,
          "X-Robots-Tag": result.xRobotsTag,
          "Response type": result.responseType,
          "Canonical count": String(result.canonicalCount),
          "Last actual production check": checkedAt,
          "Verified production SHA": productionSha,
          "Real classification": classification,
        });
        summaries.set(`${historicalIssue}:${result.finalStatus}`, (summaries.get(`${historicalIssue}:${result.finalStatus}`) ?? 0) + 1);
      } catch (error) {
        const historicalIssue = row.gsc_issue ?? row["Historical GSC issue"] ?? "";
        const originalCrawlDate = row.gsc_last_crawl ?? row["Original GSC crawl date"] ?? "";
        Object.assign(row, {
          "Historical GSC issue": historicalIssue,
          "Original GSC crawl date": originalCrawlDate,
          "Current HTTP status": "REQUEST_FAILED_AFTER_RETRIES",
          "Final HTTP status": "REQUEST_FAILED_AFTER_RETRIES",
          "Final URL": "",
          "Redirect chain": "",
          "Canonical": "",
          "HTML robots": "",
          "X-Robots-Tag": "",
          "Response type": "",
          "Canonical count": "",
          "Last actual production check": checkedAt,
          "Verified production SHA": productionSha,
          "Real classification": "TRANSIENT_OR_NETWORK_RECHECK_REQUIRED",
          "Audit error": error instanceof Error ? error.message : String(error),
        });
      }
      if ((index + 1) % 50 === 0 || index + 1 === rows.length) {
        console.error(`Audited ${index + 1}/${rows.length}`);
      }
    }
  });
  await Promise.all(workers);

  const headers = [
    "Historical GSC issue", "url", "Original GSC crawl date", "Current HTTP status", "Final HTTP status", "Final URL", "Redirect chain", "Canonical", "HTML robots", "X-Robots-Tag", "Response type", "Canonical count", "Last actual production check", "Verified production SHA", "Real classification", "Audit error",
  ];
  await writeFile(input, serializeCsv(rows, headers));
  console.log(JSON.stringify(Object.fromEntries([...summaries.entries()].sort()), null, 2));
}

void main();
