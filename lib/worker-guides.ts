export type WorkerGuideSection = {
  title: string;
  steps: string[];
  warning?: string;
};

export type WorkerGuide = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  duration: string;
  sections: WorkerGuideSection[];
};

export const workerGuides: WorkerGuide[] = [
  {
    slug: "job-workflow",
    category: "Operations",
    title: "THEVULGO job workflow",
    summary:
      "The required sequence from accepting a job to photos, payment and completion.",
    duration: "8 min",
    sections: [
      {
        title: "Before travelling",
        steps: [
          "Open the assigned job and verify the customer, address, parking notes, scope, appointment time and total.",
          "Confirm that you have the required tools, protective materials and approved fasteners.",
          "Use the job status controls so THEVULGO can see when you are travelling.",
        ],
      },
      {
        title: "At the property",
        steps: [
          "Confirm the scope and installation locations with the customer before drilling or disassembly.",
          "Inspect the work area for visible damage and take clear before photos.",
          "Protect floors, furniture and nearby surfaces; keep tools organized and walkways clear.",
        ],
      },
      {
        title: "Completion",
        steps: [
          "Test the completed work with the customer and clean the work area.",
          "Upload clear after photos and record any material or scope changes in the job notes.",
          "Record bank transfer, Bizum or cash accurately. Never mark a job paid before payment is actually received.",
        ],
        warning:
          "Stop and contact THEVULGO if the customer requests work outside the approved order or the site is unsafe.",
      },
    ],
  },
  {
    slug: "tv-mounting",
    category: "Mounting",
    title: "TV mounting: fixed, tilt and full-motion",
    summary:
      "Wall assessment, mount selection, fixing rules, cable checks and final testing.",
    duration: "14 min",
    sections: [
      {
        title: "Confirm compatibility",
        steps: [
          "Check TV weight, VESA pattern, mount rating and the manufacturer instructions before installation.",
          "Fixed mounts keep the TV close to the wall; tilt mounts allow vertical angle adjustment; full-motion mounts create higher leverage and require especially strong attachment.",
          "Heavy-duty installations must use a mount and fasteners rated above the actual load.",
        ],
      },
      {
        title: "Identify the wall",
        steps: [
          "Use appropriate detection methods and verify stud locations; do not rely on one reading alone.",
          "Wood studs: use rated structural lag screws into sound stud centres. Concrete or solid masonry: use the manufacturer-approved masonry system.",
          "Metal studs require a rated mounting method designed for the wall assembly and load. Never support a TV with ordinary drywall plugs alone.",
        ],
        warning:
          "Do not drill where electrical, plumbing, gas, sprinkler or other concealed services may be present. Stop if the wall construction or load path is uncertain.",
      },
      {
        title: "Install and verify",
        steps: [
          "Confirm height and centre line with the customer, then mark and level the wall plate.",
          "Tighten fasteners evenly without crushing the wall surface. Attach brackets using the correct TV screws and spacers.",
          "Lift large TVs with adequate help, engage every safety lock, test movement and clearance, then photograph the attachment and finished result.",
        ],
      },
    ],
  },
  {
    slug: "shelves-mirrors-curtain-rods",
    category: "Mounting",
    title: "Shelves, mirrors and curtain rods",
    summary:
      "Layout, anchor selection and clean installation for common wall-mounted items.",
    duration: "12 min",
    sections: [
      {
        title: "Plan the layout",
        steps: [
          "Confirm dimensions, height, spacing, opening clearance and the customer's preferred alignment.",
          "Identify the wall type and likely concealed services before making holes.",
          "Check the product hardware and expected load; replace unsuitable supplied anchors only with an approved alternative.",
        ],
      },
      {
        title: "Choose attachment points",
        steps: [
          "Use studs or solid structure whenever practical for shelves and heavy mirrors.",
          "Use anchors rated for the actual wall material, load and direction of force; distribute load across all specified fixing points.",
          "For curtain rods, account for fabric weight, bracket projection and repeated pulling forces.",
        ],
        warning:
          "Do not mount heavy or safety-critical objects where the substrate is damaged, unknown or cannot provide a verified attachment.",
      },
      {
        title: "Finish",
        steps: [
          "Level before final tightening and avoid over-tightening anchors.",
          "Check every bracket, fastener and safety catch; carefully test the installed item.",
          "Clean dust and fingerprints, then take wide and close-up after photos.",
        ],
      },
    ],
  },
  {
    slug: "furniture-assembly",
    category: "Assembly",
    title: "Furniture assembly",
    summary:
      "A repeatable process for beds, desks, dressers, wardrobes and IKEA-style furniture.",
    duration: "10 min",
    sections: [
      {
        title: "Inventory and protect",
        steps: [
          "Confirm the model and inspect packaging for visible damage before opening.",
          "Protect the floor and organize panels, fittings and fasteners by instruction step.",
          "Photograph missing or damaged parts before continuing and notify THEVULGO.",
        ],
      },
      {
        title: "Assemble accurately",
        steps: [
          "Follow the manufacturer sequence; do not substitute fasteners or force misaligned components.",
          "Keep finished faces protected and use hand-tight control where powered tools could strip hardware.",
          "Square the unit before final tightening and verify drawers, doors and moving parts.",
        ],
      },
      {
        title: "Anti-tip and handoff",
        steps: [
          "Install manufacturer-required anti-tip hardware only into a suitable attachment point.",
          "Show the customer the finished operation and any care or load instructions.",
          "Remove packaging only as agreed and upload final photos.",
        ],
        warning:
          "Never leave a tall or tip-prone unit unsecured when the manufacturer requires wall attachment.",
      },
    ],
  },
  {
    slug: "doors-and-hardware",
    category: "Repairs",
    title: "Doors, locks and hardware",
    summary:
      "Diagnose alignment, hinges, handles and common hardware without creating new damage.",
    duration: "9 min",
    sections: [
      {
        title: "Diagnose first",
        steps: [
          "Check gaps, hinge movement, frame condition and latch alignment before adjusting anything.",
          "Confirm whether the issue is loose hardware, seasonal movement, damaged wood or structural movement.",
          "Protect the door and floor before removing hardware.",
        ],
      },
      {
        title: "Repair and test",
        steps: [
          "Tighten or replace compatible hardware without over-driving screws into weak material.",
          "Make small alignment adjustments and test repeatedly rather than removing excessive material.",
          "Verify smooth closing, latch engagement and customer operation before completion.",
        ],
        warning:
          "Do not modify fire-rated doors, egress hardware or security systems outside the approved scope and applicable requirements.",
      },
    ],
  },
  {
    slug: "drywall-repairs",
    category: "Repairs",
    title: "Drywall patching and touch-ups",
    summary:
      "Assess damage, prepare stable backing, build thin coats and leave a clean repair.",
    duration: "11 min",
    sections: [
      {
        title: "Assess and prepare",
        steps: [
          "Confirm the damage is dry and stable; identify any moisture source before covering it.",
          "Protect the room, remove loose material and create clean edges suitable for the repair method.",
          "Use backing or a patch system appropriate to the opening size.",
        ],
        warning:
          "Stop for active leaks, mould-like growth, asbestos concerns or unexplained recurring cracks. These require separate assessment.",
      },
      {
        title: "Build the finish",
        steps: [
          "Apply compound in controlled thin coats, allowing proper drying between stages.",
          "Feather edges beyond the patch and sand with dust control without damaging surrounding paper.",
          "Confirm whether priming and paint are included in the order before proceeding beyond the repair.",
        ],
      },
    ],
  },
  {
    slug: "minor-plumbing",
    category: "Repairs",
    title: "Minor plumbing boundaries",
    summary:
      "Safe checks for simple fixture work and a clear stop-work boundary for leaks or regulated work.",
    duration: "8 min",
    sections: [
      {
        title: "Before touching a fixture",
        steps: [
          "Confirm the approved scope and locate a working shut-off before disconnecting anything.",
          "Inspect valves, supply lines, drains and surrounding surfaces for corrosion or existing leakage.",
          "Protect the cabinet or floor and keep a container and absorbent materials ready.",
        ],
      },
      {
        title: "Test carefully",
        steps: [
          "Use compatible replacement parts and manufacturer instructions.",
          "Restore water slowly, check every connection under normal use and recheck after several minutes.",
          "Photograph the dry completed connections and report any limitation.",
        ],
        warning:
          "Stop for failed shut-offs, concealed leaks, drain or supply modifications, flooding risk, gas appliances or any work requiring a licensed trade.",
      },
    ],
  },
  {
    slug: "minor-electrical",
    category: "Fixtures",
    title: "Light fixtures and minor electrical boundaries",
    summary:
      "A safety-first checklist for approved fixture work and when to stop immediately.",
    duration: "9 min",
    sections: [
      {
        title: "Scope and isolation",
        steps: [
          "Proceed only when the task is specifically approved and you are legally qualified for the work required.",
          "Identify and isolate the correct circuit, then verify absence of voltage using appropriate test equipment.",
          "Check the electrical box, fixture weight, grounding provisions and manufacturer requirements.",
        ],
        warning:
          "Do not work live. Stop for damaged wiring, aluminium wiring concerns, missing grounding, unsuitable boxes, panel work or any condition requiring a licensed electrician. Ceiling fan work is not offered.",
      },
      {
        title: "Completion",
        steps: [
          "Use listed connectors and support the fixture independently while connections are made.",
          "Restore power only after covers and mounting hardware are secure.",
          "Test operation and photograph the finished installation without exposing customer electrical details unnecessarily.",
        ],
      },
    ],
  },
  {
    slug: "photos-payment-closeout",
    category: "Operations",
    title: "Photos, payment and job closeout",
    summary:
      "The evidence and payment steps required before a job can be closed.",
    duration: "7 min",
    sections: [
      {
        title: "Required photo set",
        steps: [
          "Take a wide before photo, useful condition close-ups and a clear after photo from a similar angle.",
          "Add close-ups that show secure mounting, alignment or repaired surfaces without capturing unrelated personal information.",
          "Review images for focus and completeness before leaving the property.",
        ],
      },
      {
        title: "Payment record",
        steps: [
          "Select bank transfer / Bizum or cash exactly as paid and enter any required note.",
          "Cash collected for THEVULGO must be transferred according to the contractor agreement and operating instructions.",
          "Do not mark the job completed until the work, photos and payment record are complete.",
        ],
        warning:
          "If payment is disputed or incomplete, keep the job open and contact THEVULGO instead of changing the total yourself.",
      },
    ],
  },
];

export function getWorkerGuide(slug: string) {
  return workerGuides.find((guide) => guide.slug === slug);
}
