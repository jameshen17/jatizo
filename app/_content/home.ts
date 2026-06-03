export type ImageUsage = "hero" | "gallery" | "process" | "proof";
export type ImageAspect = "portrait" | "landscape" | "detail";
export type CropMode = "cover" | "contain";
export type FocalIntent = "garment" | "factory" | "packing";

export type SiteImage = {
  src: string;
  alt: string;
  usage: ImageUsage;
  aspect: ImageAspect;
  priority?: boolean;
  cropMode: CropMode;
  focalIntent: FocalIntent;
  className?: string;
  objectPosition?: string;
  label?: string;
  title?: string;
  note?: string;
};

export type CapabilityCard = {
  title: string;
  text: string;
};

export type SampleCategory = {
  title: string;
  intro: string;
  images: SiteImage[];
};

export type ProofItem = {
  stat: string;
  title: string;
  text: string;
};

export const capabilityTags = [
  "Woven sample specialist",
  "Retail-ready silhouettes",
  "Factory-backed execution",
  "Recycle / Better Cotton capable"
];

export const heroImage: SiteImage = {
  src: "/jatizo/hero-editorial-look.webp",
  alt: "A coordinated woven look highlighting drape, print placement, and retail-ready styling.",
  usage: "hero",
  aspect: "portrait",
  priority: true,
  cropMode: "cover",
  focalIntent: "garment",
  objectPosition: "center 24%",
  label: "Sample-led woven capability",
  title: "Sample garments that show product judgment before production begins.",
  note: "The strongest proof on the site should be the garments themselves, with factory support shown only where it adds confidence."
};

export const sampleCategories: SampleCategory[] = [
  {
    title: "Shirts & blouses",
    intro:
      "Fluid woven tops, clean closures, and easy silhouettes that show drape, proportion, and styling control in the sample stage.",
    images: [
      {
        src: "/jatizo/style-soft-blue-blouse.webp",
        alt: "Soft blue woven blouse with fluid drape and minimal hardware.",
        usage: "gallery",
        aspect: "portrait",
        cropMode: "cover",
        focalIntent: "garment",
        objectPosition: "center 22%",
        label: "Sample proof · Shirts & blouses",
        title: "Soft blue blouse"
      },
      {
        src: "/jatizo/style-cream-dot-blouse.webp",
        alt: "Cream printed woven blouse with a clean button-front silhouette.",
        usage: "gallery",
        aspect: "portrait",
        cropMode: "cover",
        focalIntent: "garment",
        objectPosition: "center 22%",
        label: "Sample proof · Printed wovens",
        title: "Cream dot blouse"
      },
      {
        src: "/jatizo/style-dusty-rose-blouse.webp",
        alt: "Dusty rose woven blouse styled with relaxed tailoring.",
        usage: "gallery",
        aspect: "portrait",
        cropMode: "cover",
        focalIntent: "garment",
        objectPosition: "center 22%",
        label: "Sample proof · Shirts & blouses",
        title: "Dusty rose blouse"
      },
      {
        src: "/jatizo/style-ivory-sleeveless.webp",
        alt: "Ivory sleeveless woven top with clean neckline and soft handfeel.",
        usage: "gallery",
        aspect: "portrait",
        cropMode: "cover",
        focalIntent: "garment",
        objectPosition: "center 20%",
        label: "Sample proof · Shirts & blouses",
        title: "Ivory sleeveless top"
      }
    ]
  },
  {
    title: "Trousers",
    intro:
      "A tighter trouser direction that still reads commercial: directional print, clean leg shape, and strong retail presentation without overcomplication.",
    images: [
      {
        src: "/jatizo/style-printed-trouser.webp",
        alt: "Printed woven trousers shown in a retail-ready styling shot.",
        usage: "gallery",
        aspect: "portrait",
        cropMode: "cover",
        focalIntent: "garment",
        objectPosition: "center 20%",
        label: "Sample proof · Trousers",
        title: "Printed trouser"
      }
    ]
  },
  {
    title: "Tailoring",
    intro:
      "Light woven tailoring with enough structure to show shape, balance, and category control in sample development.",
    images: [
      {
        src: "/jatizo/style-windowpane-tailoring.webp",
        alt: "Windowpane tailored woven set shown in a clean full-look presentation.",
        usage: "gallery",
        aspect: "portrait",
        cropMode: "cover",
        focalIntent: "garment",
        objectPosition: "center 20%",
        label: "Sample proof · Tailored pieces",
        title: "Windowpane tailoring"
      }
    ]
  },
  {
    title: "Coordinated looks",
    intro:
      "Matching or near-matching looks that prove the team can shape a stronger collection story, not just isolated single styles.",
    images: [
      {
        src: "/jatizo/style-gingham-tailoring.webp",
        alt: "Gingham tailored woven set balancing structure with wearable proportion.",
        usage: "gallery",
        aspect: "portrait",
        cropMode: "cover",
        focalIntent: "garment",
        objectPosition: "center top",
        label: "Sample proof · Coordinated looks",
        title: "Gingham set"
      }
    ]
  }
];

export const capabilityCards: CapabilityCard[] = [
  {
    title: "Shirts & blouses",
    text: "Fluid woven tops, clean fronts, and easy retail silhouettes developed with fit, drape, and finishing in mind."
  },
  {
    title: "Trousers",
    text: "Printed and solid woven trousers designed for balanced assortments, clear spec handling, and production practicality."
  },
  {
    title: "Tailored woven pieces",
    text: "Light tailoring, coordinated sets, and structured woven separates for collections that need a sharper retail expression."
  },
  {
    title: "Sample development support",
    text: "Sample development is treated as proof of capability, with follow-through from comments and fit alignment into production handling only when needed."
  }
];

export const processSteps: SiteImage[] = [
  {
    src: "/jatizo/process-cutting-floor.webp",
    alt: "Large cutting floor prepared for bulk fabric handling and marker execution.",
    usage: "process",
    aspect: "landscape",
    cropMode: "cover",
    focalIntent: "factory",
    objectPosition: "center center",
    label: "Factory capability · Cutting",
    title: "Cutting floor readiness",
    note: "A clean cutting floor signals real preparation for fabric handling, marker work, and disciplined production setup."
  },
  {
    src: "/jatizo/process-sewing-line.webp",
    alt: "Sewing line with operators assembling garments.",
    usage: "process",
    aspect: "landscape",
    cropMode: "cover",
    focalIntent: "factory",
    objectPosition: "center center",
    label: "Factory capability · Sewing",
    title: "Sewing line support",
    note: "Line visibility helps show that sample-led development is backed by real sewing capacity and organized floor support."
  },
  {
    src: "/jatizo/process-qc-finishing.webp",
    alt: "Production floor with garments organized in quantity for finishing and workflow control.",
    usage: "process",
    aspect: "landscape",
    cropMode: "cover",
    focalIntent: "factory",
    objectPosition: "center center",
    label: "Factory capability · Floor control",
    title: "Finishing and floor coordination",
    note: "Organized floor flow and finishing visibility add confidence that execution extends beyond sampling into practical production management."
  },
  {
    src: "/jatizo/process-packing-boxes.webp",
    alt: "Packed cartons staged for shipment in a warehouse space.",
    usage: "process",
    aspect: "landscape",
    cropMode: "cover",
    focalIntent: "packing",
    objectPosition: "center center",
    label: "Factory capability · Packing",
    title: "Packing and shipment readiness",
    note: "Packing visuals reinforce shipment discipline, warehouse handling, and the ability to support launch timing with operational follow-through."
  }
];





export const proofItems: ProofItem[] = [
  {
    stat: "15+ years",
    title: "European retail program support",
    text: "Long-running support across European retail-facing woven programs informs how we think about product, consistency, and execution."
  },
  {
    stat: "5 factories",
    title: "Audited partner factory network",
    text: "A multi-factory network helps match category needs, production fit, and practical capacity planning."
  },
  {
    stat: "Material aware",
    title: "Recycle and Better Cotton familiarity",
    text: "Experience with recycled programs and Better Cotton related requirements supports more informed sourcing conversations."
  },
  {
    stat: "Core strength",
    title: "Woven shirts, trousers, and tailoring",
    text: "Our strongest categories center on woven shirts, trousers, and tailoring-oriented pieces that need both product discipline and production clarity."
  }
];
