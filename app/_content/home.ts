export type SiteImage = {
  src: string;
  alt: string;
  label: string;
  title: string;
  objectPosition?: string;
};

export type ProductCategory = {
  title: string;
  text: string;
};

export type WorkflowStep = {
  number: string;
  title: string;
  text: string;
};

export type ValuePoint = {
  title: string;
  text: string;
  stat?: string;
};

export type FactoryCapability = SiteImage & {
  text: string;
};

export const heroImage: SiteImage = {
  src: "/jatizo/hero-editorial-look.webp",
  alt: "A coordinated women’s woven look showing drape, print placement, and proportion.",
  label: "Women’s woven development",
  title: "From first sample through shipment",
  objectPosition: "center 38%"
};

export const productCategories: ProductCategory[] = [
  {
    title: "Dresses",
    text: "Feminine woven dresses developed around silhouette, construction, drape, and commercial wearability."
  },
  {
    title: "Blouses & Tops",
    text: "Fluid blouses, clean woven tops, and detailed styles with careful attention to proportion and finish."
  },
  {
    title: "Skirts & Trousers",
    text: "Woven separates developed for balanced fit, practical construction, and a cohesive assortment."
  },
  {
    title: "Coordinated Sets",
    text: "Related tops and bottoms developed together for consistent fabrication, color, print, and fit."
  },
  {
    title: "Light Tailoring",
    text: "Soft jackets and tailored separates that balance structure with an approachable contemporary feel."
  }
];

export const sampleImages: SiteImage[] = [
  {
    src: "/jatizo/sample-white-ruffle-blouse.jpg",
    alt: "Model wearing a white textured woven blouse with a softly ruffled neckline and long sleeves.",
    label: "Blouses & tops",
    title: "Textured ruffle detail",
    objectPosition: "center 28%"
  },
  {
    src: "/jatizo/sample-chain-print-blouse.jpg",
    alt: "Model wearing a black-and-white chain-print woven blouse with a relaxed silhouette.",
    label: "Printed wovens",
    title: "All-over print placement",
    objectPosition: "center 26%"
  },
  {
    src: "/jatizo/style-soft-blue-blouse.webp",
    alt: "Soft blue woven blouse with fluid drape and minimal hardware.",
    label: "Blouses & tops",
    title: "Fluid woven blouse",
    objectPosition: "center 22%"
  },
  {
    src: "/jatizo/style-cream-dot-blouse.webp",
    alt: "Cream printed woven blouse with a clean button-front silhouette.",
    label: "Printed wovens",
    title: "Print and proportion",
    objectPosition: "center 22%"
  },
  {
    src: "/jatizo/style-dusty-rose-blouse.webp",
    alt: "Dusty rose woven blouse styled with relaxed tailoring.",
    label: "Blouses & tops",
    title: "Soft structure",
    objectPosition: "center 22%"
  },
  {
    src: "/jatizo/style-ivory-sleeveless.webp",
    alt: "Ivory sleeveless woven top with a clean neckline.",
    label: "Blouses & tops",
    title: "Clean finishing",
    objectPosition: "center 20%"
  },
  {
    src: "/jatizo/style-printed-trouser-v2.webp",
    alt: "Printed woven trousers shown in a retail-ready styling shot.",
    label: "Skirts & trousers",
    title: "Printed trouser",
    objectPosition: "center center"
  },
  {
    src: "/jatizo/style-windowpane-tailoring-v2.webp",
    alt: "Windowpane tailored woven set in a clean full-look presentation.",
    label: "Light tailoring",
    title: "Balanced structure",
    objectPosition: "center center"
  },
  {
    src: "/jatizo/style-gingham-tailoring-v2.webp",
    alt: "Gingham tailored woven set balancing structure and wearable proportion.",
    label: "Coordinated sets",
    title: "Assortment thinking",
    objectPosition: "center center"
  }
];

export const workflowSteps: WorkflowStep[] = [
  {
    number: "01",
    title: "Development",
    text: "Review the tech pack, reference sample, product direction, and commercial requirements."
  },
  {
    number: "02",
    title: "Sampling",
    text: "Translate the brief into an initial sample with construction and finish aligned."
  },
  {
    number: "03",
    title: "Fit & Comments",
    text: "Work through fit, workmanship, and revision comments with your product team."
  },
  {
    number: "04",
    title: "Pre-production",
    text: "Confirm materials, trims, measurements, workmanship, and production readiness."
  },
  {
    number: "05",
    title: "Bulk Production",
    text: "Coordinate manufacturing with the partner factory best suited to the program."
  },
  {
    number: "06",
    title: "QC & Shipment",
    text: "Support final quality checks, packing, and shipment preparation."
  }
];

export const valuePoints: ValuePoint[] = [
  {
    title: "California-based",
    text: "A U.S.-based point of contact for development and production communication."
  },
  {
    title: "Experienced China manufacturing network",
    text: "An integrated network of partner factories with extensive women’s apparel production experience."
  },
  {
    title: "Sample-led development",
    text: "Start with the garment. Align construction, fit, workmanship, and feasibility before scaling production."
  },
  {
    stat: "15+ years",
    title: "European retail experience",
    text: "Experience supporting apparel programs for established European fashion and retail customers."
  }
];

export const factoryCapabilities: FactoryCapability[] = [
  {
    src: "/jatizo/process-cutting-floor.webp",
    alt: "Cutting floor prepared for bulk fabric handling and marker execution.",
    label: "Cutting",
    title: "Production preparation",
    text: "Fabric handling, marker execution, and organized cutting preparation for bulk production.",
    objectPosition: "center center"
  },
  {
    src: "/jatizo/process-sewing-line.webp",
    alt: "Sewing line with operators assembling garments.",
    label: "Sewing",
    title: "Line coordination",
    text: "Organized sewing support matched to product construction and program requirements.",
    objectPosition: "center center"
  },
  {
    src: "/jatizo/process-qc-finishing.webp",
    alt: "Garments organized on the production floor for finishing and quality control.",
    label: "Finishing & quality control",
    title: "Workmanship review",
    text: "Finishing, measurement, and quality review before goods move into final packing.",
    objectPosition: "center center"
  },
  {
    src: "/jatizo/process-packing-boxes.webp",
    alt: "Packed cartons staged for shipment in a warehouse.",
    label: "Packing",
    title: "Shipment readiness",
    text: "Packing, carton handling, and final preparation aligned with shipment requirements.",
    objectPosition: "center center"
  }
];
