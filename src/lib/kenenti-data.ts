export interface BeforeAfterPair {
  id: string;
  title: string;
  universe: string;
  description: string;
  beforeImage: string;
  beforeAlt: string;
  afterImage: string;
  afterAlt: string;
  sourcePage: string;
}

export interface UniverseItem {
  id: number;
  slug: string;
  title: string;
  shortTitle: string;
  modeLabel: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  realArchiveImage?: string;
  highlights: string[];
}

export interface BoutiquePoster {
  id: number;
  familyNumber: string;
  tabLabel: string;
  familyTitle: string;
  headline: string;
  description: string;
  image: string;
  imageAlt: string;
  badgeText: string;
  swatches?: string[];
  featuredProducts: { name: string; price: string; subtitle: string; image?: string }[];
  ctaLabel: string;
  ctaHref: string;
  sourceUrl: string;
}

export interface VerifiableStat {
  value: string;
  exactLabel: string;
  context: string;
  sourceUrl: string;
}

export interface WorkshopLocation {
  id: string;
  name: string;
  shortName: string;
  city: string;
  address: string;
  plusCode: string;
  phoneDisplay: string;
  phoneHref: string;
  mapUrl: string;
  image: string;
  hoursNote: string;
}

export const KENENTI_BRAND = {
  name: "KENENTI",
  slogan: "kenenti tjik win enti",
  shortIntro:
    "Restauration, rénovation, personnalisation et entretien de chaussures et sneakers, d'articles de maroquinerie, de vêtements en cuir, de mobilier et d'intérieurs automobiles, ainsi qu'une gamme dédiée de produits et accessoires de soin.",
  email: "contact@kenenti.com",
  whatsappGeneralNumber: "21690747044",
  whatsappGeneralDisplay: "+216 90 747 044",
  whatsappGeneralUrl:
    "https://wa.me/21690747044?text=Bonjour%20KENENTI%2C%20je%20souhaite%20demander%20un%20devis%20pour%20un%20service%20de%20restauration%20ou%20un%20renseignement.",
  socials: {
    facebook: "https://www.facebook.com/kenenti",
    instagramBrand: "https://www.instagram.com/kenenti_brand/",
    instagramCustom: "https://www.instagram.com/kenenti_sneakers_custom/",
    youtube: "https://www.youtube.com/channel/UCtQUDP6dWbVcMMGUFmXHQEw/featured",
  },
  logos: {
    dark: "/images/logo/cropped-logo1-192x192.png",
    icon192: "/images/logo/cropped-logo1-192x192.png",
    userLogo: "/images/logo/logo-kenenti-user.png",
  },
};

export const VERIFIED_STATS: VerifiableStat[] = [
  {
    value: "1er Atelier",
    exactLabel: "1er Atelier Tunisien de nettoyage, rénovation et customisation",
    context: "Pionnier du soin du cuir & sneakers en Tunisie",
    sourceUrl: "https://kenenti.com/",
  },
  {
    value: "Collecte & Retour",
    exactLabel: "Collecte et livraison à domicile sans vous déplacer",
    context: "KENENTI récupère votre article et vous le retourne restauré (« kenenti tjik win enti »)",
    sourceUrl: "https://kenenti.com/",
  },
  {
    value: "2 Ateliers",
    exactLabel: "La Goulette & Menzah 6",
    context: "Accueil physique, conseil et diagnostic artisanal",
    sourceUrl: "https://kenenti.com/contact/",
  },
  {
    value: "67 Produits & 7 Médias",
    exactLabel: "Gamme pro de 67 soins • Salué par 7 médias (DW, Al Jazeera...)",
    context: "Savoir-faire reconnu en Tunisie et à l'international",
    sourceUrl: "https://kenenti.com/boutique/",
  },
];

/**
 * Paires Avant / Après pour le comparateur interactif du Hero
 * Paire #1 : Sneaker de profil unique alignée au pixel près (comme sur l'écran 1 de la maquette)
 */
export const HERO_BEFORE_AFTER_PAIRS: BeforeAfterPair[] = [
  {
    id: "sneaker-profil-unique",
    title: "Sneaker Cuir (Profil)",
    universe: "Chaussures et sneakers",
    description:
      "Nettoyage approfondi, déjaunissement de la semelle, traitement des griffures et restauration complète du cuir blanc.",
    beforeImage: "/images/avant-apres/sneaker-profile-before.jpg",
    beforeAlt:
      "Avant : Sneaker en cuir blanc fortement tachée, plissée et jaunie avant l'intervention KENENTI",
    afterImage: "/images/avant-apres/sneaker-profile-after.jpg",
    afterAlt:
      "Après : La même sneaker en cuir blanc entièrement rénovée, détachée et remise à neuf par KENENTI",
    sourcePage: "https://kenenti.com/service-entretient/",
  },
  {
    id: "sneakers-souliers-atelier",
    title: "Duo Sneaker & Mocassin",
    universe: "Chaussures et sneakers",
    description:
      "Déjaunissement des semelles, détachage profond, nutrition du cuir glacé et repigmentation artisanale sur mesure.",
    beforeImage: "/images/avant-apres/hero-studio-before.jpg",
    beforeAlt:
      "Avant restauration : Sneaker blanche ternie à semelle jaunie et mocassin en cuir cognac desséché et griffé",
    afterImage: "/images/avant-apres/hero-studio-after.jpg",
    afterAlt:
      "Après restauration : Sneaker blanche éclatante et mocassin en cuir cognac nourri et patiné en atelier",
    sourcePage: "https://kenenti.com/service-entretient/",
  },
  {
    id: "mocassins-lv-cuir",
    title: "Mocassins Louis Vuitton",
    universe: "Archive Atelier KENENTI",
    description:
      "Nettoyage, détachage du cuir altéré, nutrition en profondeur et repigmentation intégrale réalisée à la main dans nos ateliers.",
    beforeImage: "/images/avant-apres/WhatsApp-Image-2025-06-20-a-17.37.01_42dfc4fa.jpg",
    beforeAlt:
      "Photo Avant : Paire de mocassins Louis Vuitton en cuir marron taché et délavé avant l'intervention de KENENTI",
    afterImage: "/images/avant-apres/WhatsApp-Image-2025-06-20-a-17.37.01_b2238924.jpg",
    afterAlt:
      "Photo Après : Même paire de mocassins Louis Vuitton après restauration et repigmentation complète chez KENENTI",
    sourcePage: "https://kenenti.com/service-luxe-et-marques/",
  },
  {
    id: "sac-chanel-cuir",
    title: "Sac Chanel Cuir",
    universe: "Maroquinerie",
    description:
      "Restauration complète d'un sac en cuir fortement décoloré et taché : traitement de surface, assouplissement et teinture noire intense.",
    beforeImage: "/images/avant-apres/WhatsApp-Image-2025-06-20-a-17.37.00_164285ba.jpg",
    beforeAlt:
      "Photo Avant : Sac à main Chanel présentant une forte décoloration et des taches jaunes avant restauration KENENTI",
    afterImage: "/images/avant-apres/WhatsApp-Image-2025-06-20-a-17.37.00_b462408b.jpg",
    afterAlt:
      "Photo Après : Même sac à main Chanel entièrement restauré et repigmenté en cuir noir par l'atelier KENENTI",
    sourcePage: "https://kenenti.com/service-luxe-et-marques/",
  },
];

/**
 * Section 4.2 — Nos 5 univers (Ordre exact du cahier des charges)
 */
export const FIVE_UNIVERSES: UniverseItem[] = [
  {
    id: 1,
    slug: "chaussures-et-sneakers",
    title: "Chaussures et sneakers",
    shortTitle: "Sneakers & Chaussures",
    modeLabel: "Collecte ou Atelier",
    subtitle: "Nettoyage, rénovation, déjaunissement & customisation",
    description:
      "Du soin d'entretien courant à la restauration complète et à la personnalisation sur mesure de vos sneakers, souliers en cuir, bottines et chaussures en daim.",
    image: "/images/services/univers-chaussures-sneakers.jpg",
    imageAlt:
      "Travail réel KENENTI (@kenenti_brand, optimisé IA) : teinture et rénovation manuelle au pinceau d'une sneaker Puma Suede bleue en atelier",
    realArchiveImage: "/images/services/WhatsApp-Image-2025-06-20-a-17.37.03_6180b03d.jpg",
    highlights: ["Nettoyage approfondi", "Rénovation & teinture daim/cuir", "Personnalisation (Custom)"],
  },
  {
    id: 2,
    slug: "maroquinerie",
    title: "Maroquinerie",
    shortTitle: "Sacs à main & Maroquinerie",
    modeLabel: "Collecte ou Atelier",
    subtitle: "Sacs à main, cabas, portefeuilles & petite maroquinerie",
    description:
      "Restauration minutieuse des cuirs lisses, grainés, matelassés ou en toile : soin des coins, réfection des tranches, détachage et repigmentation.",
    image: "/images/services/univers-maroquinerie.jpg",
    imageAlt:
      "Travail réel KENENTI (@kenenti_brand, optimisé IA) : restauration et repigmentation au pinceau fin d'un sac à main en cuir noir en atelier",
    realArchiveImage: "/images/avant-apres/WhatsApp-Image-2025-06-20-a-17.37.00_6bcb7953.jpg",
    highlights: ["Soin des pièces de marque", "Réparation des coins & tranches", "Repigmentation sur mesure"],
  },
  {
    id: 3,
    slug: "vetements-en-cuir",
    title: "Vêtements en cuir",
    shortTitle: "Vestes en Cuir & Daim",
    modeLabel: "Collecte ou Atelier",
    subtitle: "Vestes, blousons, manteaux & pièces en cuir ou daim",
    description:
      "Entretien, assouplissement, recoloration et remise en état de vos vestes et vêtements en cuir ou en peau retournée après examen en atelier.",
    image: "/images/services/univers-vetements-cuir.jpg",
    imageAlt: "Restauration et nutrition d'un blouson en cuir sur l'établi d'atelier",
    highlights: ["Assouplissement & nutrition", "Ravivage des couleurs", "Traitement des zones d'usure"],
  },
  {
    id: 4,
    slug: "mobilier",
    title: "Mobilier",
    shortTitle: "Salons & Canapés",
    modeLabel: "Sur étude & Devis",
    subtitle: "Canapés, fauteuils & assises en cuir ou tissu",
    description:
      "Rénovation des cuirs d'ameublement : traitement des griffures, craquelures et décolorations pour redonner éclat et confort à votre mobilier.",
    image: "/images/services/univers-mobilier.jpg",
    imageAlt: "Rénovation et repigmentation Avant / Après d'un fauteuil Chesterfield en cuir en atelier",
    highlights: ["Canapés & fauteuils cuir", "Correction des craquelures", "Devis sur étude personnalisée"],
  },
  {
    id: 5,
    slug: "interieur-automobile",
    title: "Intérieur automobile",
    shortTitle: "Intérieur Voiture",
    modeLabel: "Sur RDV Atelier",
    subtitle: "Sièges en cuir, volants, accoudoirs & garnitures",
    description:
      "Soin et restauration de la sellerie automobile : réparation de l'usure sur les sièges, volants et panneaux intérieurs en cuir.",
    image: "/images/services/univers-interieur-automobile.jpg",
    imageAlt: "Soin et rénovation d'un siège en cuir et d'un volant automobile par un artisan sellier",
    highlights: ["Sièges & sellerie cuir", "Rénovation de volants", "Étude manuelle sur devis"],
  },
];

/**
 * Section 4.3 — Notre boutique (Exactement 3 affiches promotionnelles)
 */
export const BOUTIQUE_POSTERS: BoutiquePoster[] = [
  {
    id: 1,
    familyNumber: "Affiche 01 / 03",
    tabLabel: "Peintures",
    familyTitle: "Peintures KENENTI 100ml",
    headline: "Peintures Cuir, Daim & Tissu",
    description: "",
    image: "/images/kenenti/real/affiche-trio-vrais-flacons.png",
    imageAlt: "Les trois vraies bouteilles de peinture KENENTI : Cuir, Daim et Tissu",
    badgeText: "Peintures 100ml",
    featuredProducts: [
      {
        name: "Peinture Cuir",
        price: "19,00 DT",
        subtitle: "100 ml",
        image: "/images/kenenti/real/peinture-cuir-100ml.jpg",
      },
      {
        name: "Peinture Daim",
        price: "19,00 DT",
        subtitle: "100 ml",
        image: "/images/kenenti/real/peinture-daim-1.jpg",
      },
      {
        name: "Peinture Tissu",
        price: "19,00 DT",
        subtitle: "100 ml",
        image: "/images/kenenti/real/peinture-r.jpg",
      },
    ],
    ctaLabel: "Commander les peintures",
    ctaHref: "/boutique?famille=peintures",
    sourceUrl: "https://kenenti.com/produit-de-peinture/",
  },
  {
    id: 2,
    familyNumber: "Affiche 02 / 03",
    tabLabel: "Kit de nettoyage",
    familyTitle: "Kit de nettoyage KENENTI",
    headline: "Kit de Nettoyage Complet",
    description: "",
    image: "/images/kenenti/real/pack-all-in-one.jpg",
    imageAlt: "Kit de nettoyage complet KENENTI",
    badgeText: "Kit Complet",
    featuredProducts: [
      {
        name: "Kit de Nettoyage Complet",
        price: "49,00 DT",
        subtitle: "Pack All-in-One",
        image: "/images/kenenti/real/pack-all-in-one.jpg",
      },
    ],
    ctaLabel: "Commander le kit de nettoyage",
    ctaHref: "/boutique?famille=soin-et-entretien",
    sourceUrl: "https://kenenti.com/product/pack-all-in-one/",
  },
  {
    id: 3,
    familyNumber: "Affiche 03 / 03",
    tabLabel: "Reblanchissant",
    familyTitle: "Reblanchissant Semelles",
    headline: "Reblanchissant — Sole Bright",
    description: "",
    image: "/images/kenenti/real/sole-bright-cropped.png",
    imageAlt: "Flacon Reblanchissant Sole Bright KENENTI 100ml",
    badgeText: "Sole Bright",
    featuredProducts: [
      {
        name: "Reblanchissant (Sole Bright)",
        price: "20,00 DT",
        subtitle: "100 ml",
        image: "/images/kenenti/real/sole-bright-cropped.png",
      },
    ],
    ctaLabel: "Commander le reblanchissant",
    ctaHref: "/boutique?famille=reblanchissant",
    sourceUrl: "https://kenenti.com/product/sole-bright/",
  },
];

/**
 * Section 4.5 — Découvrir notre atelier (La Goulette & Menzah 6)
 */
export const WORKSHOPS: WorkshopLocation[] = [
  {
    id: "la-goulette",
    name: "Atelier KENENTI — La Goulette",
    shortName: "La Goulette",
    city: "La Goulette, Tunis",
    address: "Rue des Ecoles, La Goulette 2060",
    plusCode: "R893+8X5, La Goulette",
    phoneDisplay: "+216 29 286 445",
    phoneHref: "tel:+21629286445",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Rue+des+Ecoles+La+Goulette+2060+Tunisie",
    image: "/images/ateliers/atelier-presse-1.jpg",
    hoursNote: "Contactez-nous par téléphone ou WhatsApp avant votre passage",
  },
  {
    id: "menzah-6",
    name: "Atelier KENENTI — Menzah 6",
    shortName: "Menzah 6",
    city: "Menzah 6, Ariana",
    address: "Kenenti Manzah 6, R5W9+G34, Ariana",
    plusCode: "R5W9+G34, Ariana",
    phoneDisplay: "+216 28 877 074",
    phoneHref: "tel:+21628877074",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=R5W9%2BG34+Ariana+Tunisie",
    image: "/images/ateliers/d3_1.jpg",
    hoursNote: "Contactez-nous par téléphone ou WhatsApp avant votre passage",
  },
];

/**
 * Section 4.6 — FAQ
 */
export const FAQ_ITEMS = [
  {
    id: "faq-devis",
    question: "Comment demander un devis pour une restauration ou un entretien ?",
    answer:
      "Chaque pièce (chaussures, sneakers, sac de maroquinerie, vêtement en cuir, mobilier ou intérieur automobile) est examinée individuellement. Vous pouvez nous envoyer des photos via WhatsApp ou déposer votre article dans l'un de nos ateliers à La Goulette ou Menzah 6. Toutes les demandes de devis sont étudiées manuellement par nos artisans avant toute confirmation de faisabilité, de tarif ou de délai.",
  },
  {
    id: "faq-univers",
    question: "Quels sont les cinq univers pris en charge par KENENTI ?",
    answer:
      "Nos ateliers prennent en charge cinq catégories d'articles : 1. Chaussures et sneakers (nettoyage, rénovation, customisation), 2. Maroquinerie (sacs à main, portefeuilles, accessoires en cuir), 3. Vêtements en cuir, 4. Mobilier en cuir ou tissu, et 5. Intérieur automobile (sièges, volants, garnitures).",
  },
  {
    id: "faq-paiement-boutique",
    question: "Comment fonctionne le paiement pour les produits de la boutique ?",
    answer:
      "Pour toutes vos commandes de peintures, produits de soin et accessoires de notre boutique, le règlement s'effectue uniquement par paiement à la livraison (COD — Cash on Delivery). Aucun paiement en ligne ni création de compte client n'est requis.",
  },
  {
    id: "faq-ateliers",
    question: "Où se trouvent vos ateliers en Tunisie et comment vous joindre ?",
    answer:
      "KENENTI dispose de deux ateliers : le premier à La Goulette (Rue des Ecoles, La Goulette 2060 — Tél : +216 29 286 445) et le second à Menzah 6 (Ariana, R5W9+G34 — Tél : +216 28 877 074). Vous pouvez également nous contacter sur WhatsApp au +216 90 747 044.",
  },
  {
    id: "faq-delais-tarifs",
    question: "Comment sont déterminés le tarif et le délai d'une intervention en atelier ?",
    answer:
      "Chaque article nécessitant un traitement adapté à sa matière et à son état d'usure, aucun tarif, délai ou enlèvement n'est fixé de manière automatique. Nos artisans réalisent un diagnostic manuel préalable (sur photos via WhatsApp ou lors du dépôt en atelier) afin de vous communiquer une proposition précise.",
  },
];
