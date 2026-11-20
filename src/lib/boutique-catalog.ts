export type BoutiqueFamilyId =
  | "all"
  | "peintures"
  | "soin-et-entretien"
  | "accessoires";

export interface ProductVariantMedia {
  label: string;
  image: string;
}

export interface ProductTutorialVideo {
  shortcode: string;
  instagramUrl: string;
  embedUrl: string;
  title: string;
  subtitle: string;
  steps: { number: string; title: string; detail: string }[];
}

export interface BoutiqueCatalogItem {
  id: string;
  name: string;
  familyId: Exclude<BoutiqueFamilyId, "all">;
  familyLabel: string;
  volumeOrFormat: string;
  priceDisplay: string;
  numericPrice?: number;
  image: string;
  description: string;
  usagePoints: string[];
  variantOptions?: string[];
  variantGallery?: ProductVariantMedia[];
  complementaryIds?: string[];
  complementaryNote?: string;
  tutorialVideo?: ProductTutorialVideo;
}

export const BOUTIQUE_FAMILIES: { id: BoutiqueFamilyId; label: string }[] = [
  { id: "all", label: "Tout voir" },
  { id: "peintures", label: "Peintures" },
  { id: "soin-et-entretien", label: "Soins & Kits" },
  { id: "accessoires", label: "Accessoires" },
];

export const SWATCH_COLORS: Record<string, string> = {
  Noir: "#12151C",
  Blanc: "#FFFFFF",
  Marron: "#7B4B27",
  Beige: "#D8C3A5",
  Bleu: "#1D4ED8",
  "Bleu Marine": "#0F2143",
  Rouge: "#DC2626",
  Vert: "#15803D",
  Gris: "#6B7280",
  Jaune: "#F59E0B",
  Rose: "#EC4899",
};

// Table unique des flacons de couleur pour éviter la duplication des chemins d'images
const PAINT_BOTTLE_IMAGES: Record<string, string> = {
  Noir: "/images/kenenti/real/peinture-cuir-100ml.jpg",
  Blanc: "/images/boutique/peinture-blanc.jpg",
  Marron: "/images/boutique/peinture-marron.jpg",
  Bleu: "/images/kenenti/real/peinture-r.jpg",
  "Bleu Marine": "/images/kenenti/real/peinture-2.png",
  Rouge: "/images/kenenti/real/peinture-daim-1.jpg",
  Vert: "/images/kenenti/real/peinture-t.jpg",
  Jaune: "/images/kenenti/real/peinture-ss.jpg",
  Rose: "/images/kenenti/real/peinture-z.jpg",
};

function buildVariantGallery(colors: string[]): ProductVariantMedia[] {
  return colors
    .filter((color) => Boolean(PAINT_BOTTLE_IMAGES[color]))
    .map((label) => ({ label, image: PAINT_BOTTLE_IMAGES[label] }));
}

function createInstagramTutorial(
  shortcode: string,
  title: string,
  subtitle: string,
  steps: [string, string][]
): ProductTutorialVideo {
  return {
    shortcode,
    instagramUrl: `https://www.instagram.com/kenenti_brand/reel/${shortcode}/`,
    embedUrl: `https://www.instagram.com/reel/${shortcode}/embed/`,
    title,
    subtitle,
    steps: steps.map(([stepTitle, detail], idx) => ({
      number: `0${idx + 1}`,
      title: stepTitle,
      detail,
    })),
  };
}

const TUTORIALS = {
  peintureCuir: createInstagramTutorial(
    "DcwDAY_NyC5",
    "Application de la Peinture KENENTI sur cuir & sneakers",
    "Découvrez en vidéo comment redonner une seconde vie à vos chaussures en cuir, daim ou tissu grâce à la peinture KENENTI.",
    [
      ["Nettoyer & préparer la surface", "Dépoussiérez puis nettoyez le cuir avant peinture afin d'assurer une adhérence durable."],
      ["Appliquer en couches fines au pinceau", "Utilisez un pinceau de précision en 2 à 3 couches fines plutôt qu'une seule couche épaisse."],
      ["Laisser sécher naturellement", "Patientez 20 à 30 min entre chaque couche puis laissez sécher 24h avant de porter votre pièce."],
    ]
  ),
  peintureDaim: createInstagramTutorial(
    "DJWgJd7o8Ry",
    "Tutoriel teinture & rénovation du daim au pinceau",
    "Reel officiel @kenenti_brand montrant l'application uniforme sur daim et le brossage final pour préserver son toucher velours.",
    [
      ["Brosser les fibres à sec", "Passez la brosse daim & nettoyage pour dépoussiérer et redresser la matière avant application."],
      ["Appliquer uniformément au pinceau", "Déposez la teinture par touches régulières en protégeant la semelle et les coutures."],
      ["Séchage & brossage final", "Après séchage complet, brossez délicatement pour retrouver toute la douceur du daim."],
    ]
  ),
  peintureTissu: createInstagramTutorial(
    "DN0OSoSWo1a",
    "Comment rénover des sneakers en toile & tissu",
    "Démonstration vidéo @kenenti_brand d'application au pinceau de la Peinture Tissu 100 ml sur sneakers en toile décolorées.",
    [
      ["Insérer les embauchoirs", "Tendez la toile avec des embauchoirs et retirez les lacets pour travailler proprement."],
      ["Imprégner la toile au pinceau", "Appliquez la peinture textile en croisant les passages pour une couleur intense et homogène."],
      ["Séchage complet à l'air libre", "Laissez sécher 24h à l'abri de la chaleur directe puis remettez vos lacets propres."],
    ]
  ),
  nettoyage: createInstagramTutorial(
    "Davcsg2tusl",
    "Routine de nettoyage à la mousse & brosse KENENTI",
    "Les bons gestes d'atelier @kenenti_brand en vidéo pour détacher le cuir et les sneakers tout en douceur.",
    [
      ["Insérer des embauchoirs", "Maintenez la forme de la chaussure pendant le brossage pour travailler sur une surface tendue."],
      ["Faire mousser à la brosse douce", "Appliquez le nettoyant KENENTI en mouvements circulaires doux puis essuyez avec une microfibre."],
      ["Sécher à l'air libre", "Laissez sécher loin d'une source de chaleur directe pour préserver la souplesse des matières."],
    ]
  ),
  blanchisseur: createInstagramTutorial(
    "DMsL0k6Ix4a",
    "Déjaunissement & reblanchissement des semelles",
    "Tutoriel vidéo @kenenti_brand pour éliminer le jaunissement d'oxydation et redonner un blanc éclatant à vos sneakers.",
    [
      ["Nettoyer la semelle au préalable", "Retirez poussières et graisses avec un nettoyant KENENTI avant d'appliquer le reblanchissant."],
      ["Appliquer précisément au pinceau", "Étalez une couche régulière uniquement sur les zones jaunies en évitant les tissus sombres."],
      ["Laisser agir puis essuyer", "Laissez le produit agir selon les indications puis essuyez avec un chiffon propre et humide."],
    ]
  ),
  brosseDaim: createInstagramTutorial(
    "DfxFH4dNXlv",
    "Nettoyage & brossage du daim en atelier",
    "Découvrez comment nos brosses redonnent vie aux bottines et sneakers en daim sans abîmer le velours.",
    [
      ["Dépoussiérer à sec", "Utilisez la brosse en crin doux pour retirer les saletés superficielles sans marquer la matière."],
      ["Nettoyer les taches délicatement", "Associez la brosse à la mousse nettoyante KENENTI pour désincruster en profondeur."],
      ["Redresser les fibres du daim", "Après séchage, passez la brosse daim dans le sens du poil pour un rendu velouté comme neuf."],
    ]
  ),
  accessoires: createInstagramTutorial(
    "DekOh1Otnpq",
    "Rénovez vos sneakers vous-même à la maison",
    "Vidéo @kenenti_brand illustrant la remise à neuf complète d'une paire avec nos produits et accessoires d'atelier.",
    [
      ["Maintenir la paire en forme", "Placez les embauchoirs à l'intérieur avant le nettoyage ou la peinture pour éviter les plis."],
      ["Nettoyer & retoucher", "Utilisez les brosses et pinceaux adaptés à chaque matière (cuir, daim, toile)."],
      ["Finaliser les détails", "Remplacez les lacets usés et protégez l'intérieur du talon pour une finition irréprochable."],
    ]
  ),
};

const CUIR_COLORS = ["Noir", "Blanc", "Marron", "Bleu", "Bleu Marine", "Rouge", "Vert", "Jaune", "Rose"];
const DAIM_COLORS = ["Rouge", "Noir", "Marron", "Bleu Marine", "Bleu", "Vert", "Blanc"];
const TISSU_COLORS = ["Bleu", "Noir", "Blanc", "Rouge", "Jaune", "Vert", "Rose"];

export const BOUTIQUE_CATALOG: BoutiqueCatalogItem[] = [
  {
    id: "peinture-cuir-100ml",
    name: "Peinture Cuir KENENTI",
    familyId: "peintures",
    familyLabel: "Peintures Cuir, Daim & Textile",
    volumeOrFormat: "Flacon 100 ml",
    priceDisplay: "19,00 DT",
    numericPrice: 19,
    image: PAINT_BOTTLE_IMAGES.Noir,
    description:
      "Peinture professionnelle souple et couvrante formulée pour la rénovation, la repigmentation et la personnalisation des cuirs lisses et synthétiques.",
    usagePoints: [
      "Haute souplesse anti-craquelures sur cuir",
      "Application facile au pinceau ou à l'aérographe",
      "Finition durable utilisée dans nos ateliers",
    ],
    variantOptions: [...CUIR_COLORS, "Autre"],
    variantGallery: buildVariantGallery(CUIR_COLORS),
    complementaryIds: ["pinceaux-precision", "brosse-nettoyage-daim", "pack-all-in-one", "embauchoir-chaussures"],
    tutorialVideo: TUTORIALS.peintureCuir,
  },
  {
    id: "peinture-daim-100ml",
    name: "Peinture Daim & Nubuck",
    familyId: "peintures",
    familyLabel: "Peintures Cuir, Daim & Textile",
    volumeOrFormat: "Flacon 100 ml",
    priceDisplay: "19,00 DT",
    numericPrice: 19,
    image: PAINT_BOTTLE_IMAGES.Rouge,
    description:
      "Teinture pénétrante conçue pour raviver et recolorer le daim, le nubuck et les peaux retournées tout en préservant leur toucher velouté.",
    usagePoints: [
      "Préserve la douceur et les fibres du daim",
      "Ravive les couleurs délavées uniformément",
      "Séchage rapide sans effet cartonné",
    ],
    variantOptions: [...DAIM_COLORS, "Autre"],
    variantGallery: buildVariantGallery(DAIM_COLORS),
    complementaryIds: ["pinceaux-precision", "brosse-nettoyage-daim", "embauchoir-chaussures", "pack-all-in-one"],
    tutorialVideo: TUTORIALS.peintureDaim,
  },
  {
    id: "peinture-tissu-100ml",
    name: "Peinture Tissu & Textile",
    familyId: "peintures",
    familyLabel: "Peintures Cuir, Daim & Textile",
    volumeOrFormat: "Flacon 100 ml",
    priceDisplay: "19,00 DT",
    numericPrice: 19,
    image: PAINT_BOTTLE_IMAGES.Bleu,
    description:
      "Peinture dédiée aux sneakers en toile, mesh et coton pour restaurer une couleur nette ou réaliser une customisation sur mesure.",
    usagePoints: [
      "Idéale pour toile, mesh et textiles",
      "Excellente tenue après séchage complet",
      "Teintes intenses et couvrantes",
    ],
    variantOptions: [...TISSU_COLORS, "Autre"],
    variantGallery: buildVariantGallery(TISSU_COLORS),
    complementaryIds: ["pinceaux-precision", "brosse-nettoyage-daim", "embauchoir-chaussures", "lacets-chaussures"],
    tutorialVideo: TUTORIALS.peintureTissu,
  },
  {
    id: "pack-all-in-one",
    name: "Kit de Nettoyage Complet",
    familyId: "soin-et-entretien",
    familyLabel: "Produits de soin et d'entretien",
    volumeOrFormat: "Pack All-in-One",
    priceDisplay: "49,00 DT",
    numericPrice: 49,
    image: "/images/kenenti/real/pack-all-in-one.jpg",
    description:
      "Le coffret complet KENENTI réunissant les essentiels de nettoyage pour détacher et entretenir vos sneakers, chaussures et articles en cuir à la maison.",
    usagePoints: [
      "Solution nettoyante + accessoires inclus",
      "Compatible cuir, daim, nubuck, toile et semelles",
      "Qualité professionnelle d'atelier",
    ],
    complementaryIds: ["brosse-nettoyage-daim", "embauchoir-chaussures", "sole-bright-100ml", "lacets-chaussures"],
    complementaryNote: "Prépare la matière avant soin",
    tutorialVideo: TUTORIALS.nettoyage,
  },
  {
    id: "sole-bright-100ml",
    name: "Reblanchissant — Sole Bright",
    familyId: "soin-et-entretien",
    familyLabel: "Produits de soin et d'entretien",
    volumeOrFormat: "Flacon 100 ml",
    priceDisplay: "20,00 DT",
    numericPrice: 20,
    image: "/images/kenenti/real/sole-bright-cropped.png",
    description:
      "Formule active dédiée au déjaunissement et au reblanchissement des semelles en caoutchouc ou translucides oxydées par le temps.",
    usagePoints: [
      "Élimine le jaunissement des semelles",
      "Application simple et précise au pinceau",
      "Résultat visible dès la première application",
    ],
    complementaryIds: ["pinceaux-precision", "brosse-nettoyage-daim", "pack-all-in-one", "lacets-chaussures"],
    complementaryNote: "Déjaunit les semelles oxydées",
    tutorialVideo: TUTORIALS.blanchisseur,
  },
  {
    id: "pack-nettoyage-3-en-1",
    name: "Pack Nettoyage 3 en 1",
    familyId: "soin-et-entretien",
    familyLabel: "Produits de soin et d'entretien",
    volumeOrFormat: "Pack 3 éléments",
    priceDisplay: "34,00 DT",
    numericPrice: 34,
    image: "/images/kenenti/real/pack-nettoyage-3-en-1.png",
    description:
      "Trio d'entretien quotidien associant la solution nettoyante KENENTI, Sole Bright et le désodorisant pour un nettoyage complet de vos paires.",
    usagePoints: [
      "Idéal pour l'entretien régulier des sneakers",
      "Formule douce respectueuse des matières",
      "Paiement à la livraison (COD)",
    ],
    complementaryIds: ["brosse-nettoyage-daim", "embauchoir-chaussures", "pinceaux-precision", "lacets-chaussures"],
    tutorialVideo: TUTORIALS.nettoyage,
  },
  {
    id: "pack-nettoyage-2-en-1",
    name: "Pack Nettoyage 2 en 1",
    familyId: "soin-et-entretien",
    familyLabel: "Produits de soin et d'entretien",
    volumeOrFormat: "Format Duo",
    priceDisplay: "30,00 DT",
    numericPrice: 30,
    image: "/images/kenenti/real/pack-nettoyage-2-en-1.png",
    description:
      "Format duo compact combinant le nettoyant KENENTI et sa brosse d'application pour nettoyer vos chaussures facilement partout.",
    usagePoints: [
      "Format compact et pratique",
      "Nettoyage doux multi-supports",
      "Paiement à la livraison (COD)",
    ],
    complementaryIds: ["brosse-nettoyage-daim", "embauchoir-chaussures", "sole-bright-100ml", "lacets-chaussures"],
    tutorialVideo: TUTORIALS.nettoyage,
  },
  {
    id: "nettoyant-mousse",
    name: "Nettoyant à Mousse",
    familyId: "soin-et-entretien",
    familyLabel: "Produits de soin et d'entretien",
    volumeOrFormat: "Flacon 200 ml",
    priceDisplay: "20,00 DT",
    numericPrice: 20,
    image: "/images/boutique/Untitled-4.png",
    description:
      "Mousse nettoyante prête à l'emploi qui décolle les salissures sans détremper le cuir, le daim ou le textile.",
    usagePoints: [
      "Action moussante sans excès d'eau",
      "Séchage rapide",
      "Parfait pour cuir, daim et sneakers",
    ],
    complementaryIds: ["brosse-nettoyage-daim", "embauchoir-chaussures", "sole-bright-100ml", "lacets-chaussures"],
    tutorialVideo: TUTORIALS.nettoyage,
  },
  {
    id: "spray-blanchisseur-200ml",
    name: "Spray Blanchisseur",
    familyId: "soin-et-entretien",
    familyLabel: "Produits de soin et d'entretien",
    volumeOrFormat: "Spray 200 ml",
    priceDisplay: "29,00 DT",
    numericPrice: 29,
    image: "/images/boutique/467487562_1638459630089955_8992126874243753485_n.jpg",
    description:
      "Spray raviveur de blanc conçu pour redonner un éclat net aux sneakers et chaussures blanches ternies par l'usage.",
    usagePoints: [
      "Ravive la blancheur instantanément",
      "Diffusion homogène en spray 200 ml",
      "Paiement à la livraison (COD)",
    ],
    complementaryIds: ["brosse-nettoyage-daim", "sole-bright-100ml", "embauchoir-chaussures", "lacets-chaussures"],
    tutorialVideo: TUTORIALS.blanchisseur,
  },
  {
    id: "pinceaux-precision",
    name: "Lot de 5 Pinceaux de Précision",
    familyId: "accessoires",
    familyLabel: "Accessoires et brosses",
    volumeOrFormat: "Lot de 5 tailles",
    priceDisplay: "Sur confirmation",
    image: "/images/boutique/pinceaux-precision.jpg",
    description:
      "Set de 5 pinceaux professionnels (pointes fines, rondes et plates) spécialement sélectionnés pour appliquer nos peintures cuir, daim, textile et Sole Bright sans laisser de traces.",
    usagePoints: [
      "5 formats : détails fins, coutures et aplats",
      "Poils souples de qualité pour un rendu lisse",
      "Faciles à nettoyer à l'eau savonneuse",
    ],
    complementaryIds: ["peinture-cuir-100ml", "peinture-daim-100ml", "sole-bright-100ml", "brosse-nettoyage-daim"],
    complementaryNote: "Indispensable pour appliquer la peinture",
    tutorialVideo: TUTORIALS.peintureDaim,
  },
  {
    id: "brosse-nettoyage-daim",
    name: "Duo Brosses Nettoyage & Daim",
    familyId: "accessoires",
    familyLabel: "Accessoires et brosses",
    volumeOrFormat: "Duo 2 brosses",
    priceDisplay: "Sur confirmation",
    image: "/images/boutique/brosse-nettoyage-daim.jpg",
    description:
      "Brosse douce en bois et crin naturel pour le nettoyage quotidien du cuir et des sneakers, accompagnée de sa brosse daim crêpe & laiton pour raviver le nubuck.",
    usagePoints: [
      "Brosse crin doux pour nettoyer sans rayer",
      "Brosse spéciale daim & nubuck double face",
      "Prépare et finit parfaitement vos rénovations",
    ],
    complementaryIds: ["pack-all-in-one", "peinture-daim-100ml", "pinceaux-precision", "embauchoir-chaussures"],
    complementaryNote: "Nettoie & prépare le cuir et le daim",
    tutorialVideo: TUTORIALS.brosseDaim,
  },
  {
    id: "embauchoir-chaussures",
    name: "Embauchoirs de Maintien",
    familyId: "accessoires",
    familyLabel: "Accessoires et brosses",
    volumeOrFormat: "La paire",
    priceDisplay: "15,00 DT",
    numericPrice: 15,
    image: "/images/boutique/EMBAUCHOIR.jpg",
    description:
      "Embauchoirs à ressort permettant de maintenir la forme d'origine de vos chaussures et de limiter les plis de marche.",
    usagePoints: [
      "Préserve le galbe de vos chaussures",
      "Indispensable pendant le nettoyage et le séchage",
      "Compatible sneakers et souliers de ville",
    ],
    complementaryIds: ["brosse-nettoyage-daim", "pack-all-in-one", "pinceaux-precision", "lacets-chaussures"],
    complementaryNote: "Maintient la forme durant le soin",
    tutorialVideo: TUTORIALS.accessoires,
  },
  {
    id: "lacets-chaussures",
    name: "Lacets Sneakers & Chaussures",
    familyId: "accessoires",
    familyLabel: "Accessoires et brosses",
    volumeOrFormat: "La paire",
    priceDisplay: "3,00 DT",
    numericPrice: 3,
    image: "/images/boutique/lacets-ronde-chaussures.jpg",
    description:
      "Lacets de remplacement résistants en plusieurs coloris pour parfaire la remise à neuf de vos sneakers et bottines.",
    usagePoints: [
      "Tressage solide et durable",
      "Plusieurs teintes disponibles",
      "Finition propre comme neuf",
    ],
    variantOptions: ["Noir", "Blanc", "Marron", "Autre"],
    complementaryIds: ["pack-all-in-one", "brosse-nettoyage-daim", "embauchoir-chaussures", "sole-bright-100ml"],
    complementaryNote: "Finition neuve pour vos sneakers",
    tutorialVideo: TUTORIALS.accessoires,
  },
  {
    id: "patch-reparation-talon",
    name: "Patchs de Réparation Talon",
    familyId: "accessoires",
    familyLabel: "Accessoires et brosses",
    volumeOrFormat: "Lot de 4",
    priceDisplay: "Sur confirmation",
    image: "/images/boutique/483891980_1190217459134999_2880878275371482912_n.jpg",
    description:
      "Patchs auto-adhésifs souples pour réparer et protéger l'intérieur usé des talons ou doublures de vos sneakers.",
    usagePoints: [
      "Lot de 4 pièces (2 tailles complémentaires)",
      "Pose rapide sans couture",
      "Confort immédiat et protection anti-frottements",
    ],
    variantOptions: ["Noir", "Blanc", "Beige", "Gris"],
    complementaryIds: ["embauchoir-chaussures", "brosse-nettoyage-daim", "lacets-chaussures", "pack-all-in-one"],
    tutorialVideo: TUTORIALS.accessoires,
  },
];

export function getProductById(id: string): BoutiqueCatalogItem | undefined {
  return BOUTIQUE_CATALOG.find((item) => item.id === id);
}

export function getComplementaryProducts(
  product: BoutiqueCatalogItem
): BoutiqueCatalogItem[] {
  if (!product.complementaryIds?.length) return [];
  return product.complementaryIds
    .map((id) => getProductById(id))
    .filter((item): item is BoutiqueCatalogItem => Boolean(item));
}
