export type CraftItem = {
  slug:        string;
  title:       string;
  description: string;
  categories:  string[];
  disciplines: string[];
  hasAssessment:   boolean;
  hasTranslation:  boolean;
};

export const crafts: CraftItem[] = [
  {
    slug: "main-sewer-lines",
    title: "Main Sewer Lines",
    description: "Blockages, backups, and slow-flowing main lines — we diagnose the cause with a camera inspection and clear it the right way. Licensed for NYC sewer work, we handle everything from brownstones to multi-family buildings.",
    categories: ["Drain Cleaning"],
    disciplines: ["Sewer"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "kitchen-sinks",
    title: "Kitchen Sinks",
    description: "Grease buildup and food debris are the most common causes of kitchen drain clogs. We clear the blockage fully — not just temporarily — and leave your drain flowing the way it should.",
    categories: ["Drain Cleaning"],
    disciplines: ["Kitchen"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "tubs-and-showers",
    title: "Tubs & Showers",
    description: "Hair, soap scum, and product buildup slow tub and shower drains over time. We clear bathroom drains quickly and thoroughly, with same-day availability most days.",
    categories: ["Drain Cleaning"],
    disciplines: ["Bathroom"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "toilets",
    title: "Toilets",
    description: "A clogged or overflowing toilet needs attention fast. We clear toilet blockages at the source — and if the clog is deeper in the line, we find it and fix it.",
    categories: ["Drain Cleaning"],
    disciplines: ["Bathroom"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "hydro-jetting",
    title: "Hydro Jetting",
    description: "High-pressure water jetting cuts through grease, scale, and root intrusion that snaking can't fully clear. The right tool for recurring clogs, commercial kitchens, and heavily built-up lines.",
    categories: ["Advanced Services"],
    disciplines: ["Sewer", "Kitchen"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "drain-snaking",
    title: "Drain Snaking & Augering",
    description: "The fastest, most cost-effective solution for most residential drain clogs. We use professional-grade equipment — not store-bought snakes — and get the job done right the first time.",
    categories: ["Drain Cleaning"],
    disciplines: ["Sewer", "Kitchen", "Bathroom"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "camera-inspection",
    title: "Camera Inspection",
    description: "A camera inspection tells us exactly what's happening inside your line — root intrusion, pipe damage, grease buildup, or a collapsed section. No guessing, no unnecessary digging.",
    categories: ["Advanced Services"],
    disciplines: ["Sewer"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "multi-unit-buildings",
    title: "Multi-Unit & Commercial Buildings",
    description: "We work with property managers and building owners throughout Brooklyn, Queens, and Nassau County. Fast response, fair pricing, and the experience to handle shared lines, stack issues, and commercial kitchens.",
    categories: ["Commercial"],
    disciplines: ["Sewer", "Kitchen", "Bathroom"],
    hasAssessment: false,
    hasTranslation: false,
  },
];

export const CATEGORIES = [
  "All Categories",
  "Drain Cleaning",
  "Advanced Services",
  "Commercial",
] as const;

export const DISCIPLINES = [
  "All Disciplines",
  "Sewer",
  "Kitchen",
  "Bathroom",
] as const;
