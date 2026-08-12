export async function POST() {
  return Response.json(
    { error: "Identity documents are uploaded only by THEVULGO administration." },
    { status: 403 },
  );
}
