export interface ServiceBenefit {
  heading: string;
  body: string;
}

export interface ServiceStep {
  label: string;
  body: string;
}

export interface ServicePage {
  slug: string;
  title: string;
  overview: string[];
  servicesProvided: string;
  servicesProvidedExtra?: string;
  benefits: ServiceBenefit[];
  relatedSlugs: string[];
}

export const servicePages: ServicePage[] = [
  {
    slug: "main-sewer-lines",
    title: "Main Sewer Lines",
    overview: [
      "Pipe Monkeys handles main sewer line work throughout Brooklyn, Queens, and Nassau County. A blocked or slow main line is more than an inconvenience — left untreated, it backs up into every fixture in the building. We diagnose the cause with a camera inspection and clear it completely.",
      "We work in brownstones, multi-family buildings, single-family homes, and commercial properties. Every job is done by licensed plumbers using professional-grade equipment.",
    ],
    servicesProvided:
      "We clear main sewer line blockages caused by grease buildup, root intrusion, debris accumulation, and collapsed sections. Our services include drain snaking, hydro jetting for stubborn clogs, camera inspections to identify root causes, and assessment of pipe condition when issues are recurring.",
    servicesProvidedExtra:
      "Property owners and managers across Brooklyn, Queens, and Nassau County rely on Pipe Monkeys for main line issues. We understand the older sewer infrastructure in NYC and arrive prepared for what we typically find.",
    benefits: [
      {
        heading: "Same-Day Response.",
        body: "Main sewer line backups can't wait. We respond quickly and offer same-day service seven days a week across our service area.",
      },
      {
        heading: "Camera Diagnosis First.",
        body: "We don't guess. A camera inspection tells us exactly what's causing the blockage — grease, roots, a collapsed section — before we pick a method.",
      },
      {
        heading: "Right Tool for the Job.",
        body: "Snaking clears most blockages. When it doesn't — or when the line has heavy buildup — we switch to hydro jetting. We use whatever actually solves the problem.",
      },
    ],
    relatedSlugs: ["drain-snaking", "hydro-jetting", "camera-inspection", "multi-unit-buildings"],
  },
  {
    slug: "kitchen-sinks",
    title: "Kitchen Sinks",
    overview: [
      "Kitchen sink drain clogs are almost always caused by grease, food debris, and soap scum accumulating in the trap and drain line over time. A slow sink usually means a partial blockage — left alone, it becomes a full backup.",
      "Pipe Monkeys clears kitchen drain clogs completely, not just temporarily. We serve Brooklyn, Queens, and Nassau County with same-day availability most days.",
    ],
    servicesProvided:
      "We clear kitchen drain clogs using professional drain snaking and augering equipment. For grease-heavy lines — common in older homes and commercial kitchens — we use hydro jetting to fully remove the buildup rather than just push it further down the line.",
    benefits: [
      {
        heading: "Fast, Clean Work.",
        body: "We clear the clog, test the drain thoroughly, and leave your kitchen exactly as we found it. No mess, no disruption.",
      },
      {
        heading: "Full Clearing, Not Temporary.",
        body: "Store-bought drain cleaners and cheap snaking often just push a clog further. We clear the blockage completely and confirm the line is flowing before we leave.",
      },
      {
        heading: "Honest Pricing.",
        body: "We give you the price before any work begins. No surprises, no upsell pressure.",
      },
    ],
    relatedSlugs: ["drain-snaking", "hydro-jetting", "tubs-and-showers", "toilets"],
  },
  {
    slug: "tubs-and-showers",
    title: "Tubs & Showers",
    overview: [
      "Tub and shower drains slow down gradually — hair, soap scum, and product residue collect in the trap and line over months. By the time water is pooling at your feet, the blockage is usually significant.",
      "Pipe Monkeys clears bathroom drain clogs quickly and thoroughly. We serve Brooklyn, Queens, and Nassau County seven days a week.",
    ],
    servicesProvided:
      "We clear tub and shower drain blockages using professional drain snaking and augering. Most bathroom drain clogs clear in a single visit. We test water flow thoroughly before leaving to confirm the drain is fully open.",
    benefits: [
      {
        heading: "Quick Turnaround.",
        body: "Most tub and shower clogs are cleared in under an hour. Same-day scheduling is available most days.",
      },
      {
        heading: "Professional Equipment.",
        body: "We use professional-grade drain machines — not the flexible store snakes that bend around the clog instead of clearing it.",
      },
      {
        heading: "All Building Types.",
        body: "We work in apartments, co-ops, condos, single-family homes, and multi-unit buildings throughout our service area.",
      },
    ],
    relatedSlugs: ["toilets", "drain-snaking", "kitchen-sinks", "main-sewer-lines"],
  },
  {
    slug: "toilets",
    title: "Toilets",
    overview: [
      "A clogged or overflowing toilet needs immediate attention. Most toilet clogs are in the trap or the first section of drain line — but some indicate a deeper blockage in the main line, especially if multiple fixtures are backing up at the same time.",
      "Pipe Monkeys responds quickly to toilet emergencies throughout Brooklyn, Queens, and Nassau County. We identify whether the problem is isolated or part of a larger drain issue before starting work.",
    ],
    servicesProvided:
      "We clear toilet clogs using professional augering equipment sized for drain lines. If the blockage is deeper — or if multiple fixtures are affected — we scope the main line with a camera to identify the actual cause before recommending a solution.",
    benefits: [
      {
        heading: "Fast Emergency Response.",
        body: "Toilet backups are urgent. We offer same-day service and respond quickly when you call.",
      },
      {
        heading: "Diagnose the Real Issue.",
        body: "If your toilet keeps clogging or multiple fixtures are backed up, the problem is likely further down the line. We find the actual cause rather than just clearing the symptom.",
      },
      {
        heading: "Upfront Pricing.",
        body: "We tell you the cost before any work begins. No surprises.",
      },
    ],
    relatedSlugs: ["main-sewer-lines", "drain-snaking", "camera-inspection", "tubs-and-showers"],
  },
  {
    slug: "hydro-jetting",
    title: "Hydro Jetting",
    overview: [
      "Hydro jetting uses high-pressure water — typically 3,000 to 4,000 PSI — to cut through grease, scale, and root intrusion in drain and sewer lines. It's the most effective method for lines with heavy buildup, recurring clogs, or commercial kitchen drain problems.",
      "Pipe Monkeys uses hydro jetting throughout Brooklyn, Queens, and Nassau County for residential and commercial properties when snaking alone won't fully clear the line.",
    ],
    servicesProvided:
      "We perform hydro jetting on main sewer lines, kitchen drain lines, and commercial grease lines. Before jetting, we perform a camera inspection to confirm the pipe condition — hydro jetting is not recommended on severely deteriorated pipes. We use the appropriate nozzle and pressure for the specific line and blockage type.",
    servicesProvidedExtra:
      "Recurring clogs that return within weeks of snaking are almost always a sign of buildup that snaking can't fully remove. Hydro jetting removes the cause — not just the symptom.",
    benefits: [
      {
        heading: "Clears What Snaking Can't.",
        body: "Grease, mineral scale, and root intrusion require more than a snake. Hydro jetting removes the buildup completely and restores full flow.",
      },
      {
        heading: "Camera First.",
        body: "We inspect the line before jetting. This confirms pipe condition and helps us use the right approach — protecting your pipes while clearing the clog.",
      },
      {
        heading: "Commercial and Residential.",
        body: "We jet commercial kitchen lines, restaurant grease traps, main sewer lines, and residential drain lines. Same professional approach regardless of property type.",
      },
    ],
    relatedSlugs: ["main-sewer-lines", "camera-inspection", "drain-snaking", "multi-unit-buildings"],
  },
  {
    slug: "drain-snaking",
    title: "Drain Snaking & Augering",
    overview: [
      "Drain snaking is the most common and cost-effective method for clearing most residential drain clogs. A professional drain machine with the right auger reaches into the line, breaks up the blockage, and pulls it out — or clears it enough to restore full flow.",
      "Pipe Monkeys uses professional-grade drain machines — not flexible store snakes that bend around clogs. We serve Brooklyn, Queens, and Nassau County seven days a week.",
    ],
    servicesProvided:
      "We snake kitchen sinks, bathroom drains, tubs, showers, toilets, floor drains, and main sewer lines. We match the auger size and type to the specific drain — the right equipment makes the difference between clearing a clog and just pushing it further down.",
    benefits: [
      {
        heading: "Right Auger for Each Drain.",
        body: "Drain sizes vary — a 1.5-inch kitchen drain requires different equipment than a 4-inch main line. We use the correct auger for the job.",
      },
      {
        heading: "Fast and Affordable.",
        body: "Most snaking jobs are done in under an hour. We give you the price upfront, and snaking is almost always the most cost-effective first step.",
      },
      {
        heading: "When to Step Up.",
        body: "If snaking doesn't fully clear the line — or the clog comes back within weeks — we'll tell you honestly and recommend the right next step, whether that's hydro jetting or a camera inspection.",
      },
    ],
    relatedSlugs: ["hydro-jetting", "camera-inspection", "main-sewer-lines", "kitchen-sinks"],
  },
  {
    slug: "camera-inspection",
    title: "Camera Inspection",
    overview: [
      "A drain camera inspection sends a waterproof camera through your drain or sewer line to show us exactly what's happening inside — in real time. We see root intrusion, grease buildup, pipe damage, offset joints, and collapsed sections that no other method can identify without digging.",
      "Pipe Monkeys performs camera inspections for homeowners, property managers, and buyers throughout Brooklyn, Queens, and Nassau County.",
    ],
    servicesProvided:
      "We inspect main sewer lines, kitchen drain lines, and any drain where recurring problems suggest a structural issue or condition we can't address through snaking alone. Camera inspections are also recommended before buying a property with older plumbing, or after a major clog to confirm the line is fully clear.",
    servicesProvidedExtra:
      "After the inspection, we give you a clear explanation of what we found and what — if anything — needs to be done about it. No upsell, no unnecessary work recommended.",
    benefits: [
      {
        heading: "Know Before You Dig.",
        body: "A camera inspection eliminates guesswork. We see the exact location and nature of any problem before recommending repairs — which means no unnecessary excavation.",
      },
      {
        heading: "Recurring Clogs Explained.",
        body: "If your drain keeps backing up, there's a reason. A camera inspection finds it — root intrusion, partial collapse, belly in the pipe, or buildup that snaking can't remove.",
      },
      {
        heading: "Pre-Purchase Inspection.",
        body: "Buying a home with older plumbing? A sewer camera inspection is one of the most valuable inspections you can get. We show you exactly what you're inheriting.",
      },
    ],
    relatedSlugs: ["main-sewer-lines", "hydro-jetting", "drain-snaking", "multi-unit-buildings"],
  },
  {
    slug: "multi-unit-buildings",
    title: "Multi-Unit & Commercial Buildings",
    overview: [
      "Pipe Monkeys works with property managers and building owners across Brooklyn, Queens, and Nassau County — apartment buildings, co-ops, condos, retail spaces, and commercial properties. Multi-unit and commercial drain work is different from residential: shared lines, stack issues, grease accumulation, and tenant coordination all require experience and the right approach.",
      "We respond quickly, communicate clearly with building staff, and document our work thoroughly.",
    ],
    servicesProvided:
      "We handle main sewer line blockages and backups, shared stack drain issues, commercial kitchen grease line clearing and hydro jetting, floor drain maintenance, camera inspections for recurring or unexplained drain problems, and emergency drain service for occupied buildings.",
    servicesProvidedExtra:
      "Property managers who handle multiple buildings in the area rely on Pipe Monkeys for consistent, reliable service. We understand the scheduling constraints of occupied buildings and work to minimize disruption to tenants.",
    benefits: [
      {
        heading: "Fast Commercial Response.",
        body: "A drain problem in a commercial or multi-unit building affects multiple people. We respond quickly and keep you informed throughout the job.",
      },
      {
        heading: "Experienced with NYC Building Stock.",
        body: "Older Brooklyn and Queens buildings have cast iron stacks, clay tile sewer lines, and shared drain configurations that require specific knowledge. We know what to expect and arrive prepared.",
      },
      {
        heading: "Multi-Property Relationships.",
        body: "We regularly serve property owners with multiple buildings. Consistent pricing, reliable scheduling, and clear communication every time.",
      },
    ],
    relatedSlugs: ["main-sewer-lines", "hydro-jetting", "camera-inspection", "drain-snaking"],
  },
];

export function getServicePage(slug: string): ServicePage | undefined {
  return servicePages.find((s) => s.slug === slug);
}
