export interface BeforeAfterPair {
  id: string;
  title: string;
  beforeImage: string;
  beforeAlt: string;
  afterImage: string;
  afterAlt: string;
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
  highlights: string[];
}

export interface BoutiquePoster {
  id: number;
  tabLabel: string;
  headline: string;
  image: string;
  imageAlt: string;
  featuredProducts: { name: string; price: string; image?: string }[];
  ctaLabel: string;
  ctaHref: string;
}

export interface WorkshopLocation {
  id: string;
  name: string;
  shortName: string;
  city: string;
  address: string;
  phoneDisplay: string;
  phoneHref: string;
  mapUrl: string;
  reviewsUrl: string;
  googleRating: string;
  googleReviewCount: number;
  image: string;
}

export interface GoogleReviewItem {
  id: string;
  author: string;
  rating: number;
  relativeDate: string;
  workshopName: string;
  workshopId: "la-goulette" | "menzah-6";
  universeTag: string;
  text: string;
  reviewUrl: string;
}

const LA_GOULETTE_MAP_URL =
  "https://www.google.com/maps/place/Kenenti/@36.8183374,10.304817,17z/data=!3m1!4b1!4m6!3m5!1s0x12fd4b0057cf5def:0x7d6ef82264e28430!8m2!3d36.8183374!4d10.304817!16s%2Fg%2F11vwldscjf";
const LA_GOULETTE_REVIEWS_URL =
  "https://www.google.com/maps/place/Kenenti/@36.8183374,10.304817,17z/data=!4m8!3m7!1s0x12fd4b0057cf5def:0x7d6ef82264e28430!8m2!3d36.8183374!4d10.304817!9m1!1b1!16s%2Fg%2F11vwldscjf";
const MENZAH_MAP_URL =
  "https://www.google.com/maps/place/Kenenti+Manzah+6/@36.8462588,10.1651438,17z/data=!3m1!4b1!4m6!3m5!1s0x12fd330046e24d7d:0xe442cff36918290c!8m2!3d36.8462588!4d10.1677187!16s%2Fg%2F11m6sngk7n";
const MENZAH_REVIEWS_URL =
  "https://www.google.com/maps/place/Kenenti+Manzah+6/@36.8462588,10.1651438,17z/data=!4m8!3m7!1s0x12fd330046e24d7d:0xe442cff36918290c!8m2!3d36.8462588!4d10.1677187!9m1!1b1!16s%2Fg%2F11m6sngk7n";

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
    icon192: "/images/logo/cropped-logo1-192x192.png",
  },
};

export const HERO_BEFORE_AFTER_PAIRS: BeforeAfterPair[] = [
  {
    id: "entretien-nettoyage",
    title: "Nettoyage",
    beforeImage: "/images/avant-apres/sneaker-profile-before.jpg",
    beforeAlt: "Avant nettoyage : Sneaker en cuir blanc tachée et jaunie",
    afterImage: "/images/avant-apres/sneaker-profile-after.jpg",
    afterAlt: "Après nettoyage : Sneaker en cuir blanc nettoyée par KENENTI",
  },
  {
    id: "entretien-peinture",
    title: "Peinture",
    beforeImage: "/images/avant-apres/peinture-before.jpg",
    beforeAlt: "Avant peinture : Chaussure en daim délavée avant teinture",
    afterImage: "/images/avant-apres/peinture-after.jpg",
    afterAlt: "Après peinture : Chaussure en daim recolorée en bleu profond",
  },
  {
    id: "entretien-renovation",
    title: "Rénovation",
    beforeImage: "/images/avant-apres/renovation-before.jpg",
    beforeAlt: "Avant rénovation : Mocassin en cuir cognac desséché et griffé",
    afterImage: "/images/avant-apres/renovation-after.jpg",
    afterAlt: "Après rénovation : Mocassin en cuir cognac nourri et patiné",
  },
];

export const FIVE_UNIVERSES: UniverseItem[] = [
  {
    id: 1,
    slug: "chaussures-et-sneakers",
    title: "Chaussures et sneakers",
    shortTitle: "Sneakers & Chaussures",
    modeLabel: "Collecte ou Atelier",
    subtitle: "Nettoyage, peinture & rénovation",
    description:
      "Soin complet, déjaunissement, recoloration et customisation de vos sneakers et chaussures.",
    image: "/images/services/univers-chaussures-sneakers.jpg",
    imageAlt: "Rénovation manuelle au pinceau d'une sneaker en daim en atelier",
    highlights: ["Nettoyage approfondi", "Rénovation & teinture", "Customisation"],
  },
  {
    id: 2,
    slug: "maroquinerie",
    title: "Maroquinerie",
    shortTitle: "Sacs & Maroquinerie",
    modeLabel: "Collecte ou Atelier",
    subtitle: "Sacs à main, portefeuilles & accessoires",
    description:
      "Détachage, réparation des coins et repigmentation minutieuse de vos sacs et petite maroquinerie.",
    image: "/images/services/univers-maroquinerie.jpg",
    imageAlt: "Restauration et repigmentation au pinceau fin d'un sac en cuir noir",
    highlights: ["Soin des cuirs précieux", "Coins & tranches", "Repigmentation"],
  },
  {
    id: 3,
    slug: "vetements-en-cuir",
    title: "Vêtements en cuir",
    shortTitle: "Vestes Cuir & Daim",
    modeLabel: "Collecte ou Atelier",
    subtitle: "Vestes, blousons & manteaux",
    description:
      "Assouplissement, nutrition et ravivage couleur de vos vestes en cuir ou daim.",
    image: "/images/services/univers-vetements-cuir.jpg",
    imageAlt: "Repigmentation et restauration au pistolet d'un blouson en cuir marron",
    highlights: ["Nutrition du cuir", "Recoloration", "Soin des zones d'usure"],
  },
  {
    id: 4,
    slug: "mobilier",
    title: "Mobilier",
    shortTitle: "Salons & Canapés",
    modeLabel: "Sur étude & Devis",
    subtitle: "Canapés, fauteuils & assises",
    description:
      "Traitement des griffures, craquelures et décolorations pour redonner éclat à vos salons.",
    image: "/images/services/univers-mobilier.jpg",
    imageAlt: "Rénovation et repigmentation Avant / Après d'un fauteuil en cuir",
    highlights: ["Canapés & fauteuils", "Soin anti-craquelures", "Étude personnalisée"],
  },
  {
    id: 5,
    slug: "interieur-automobile",
    title: "Intérieur automobile",
    shortTitle: "Intérieur Voiture",
    modeLabel: "Sur RDV Atelier",
    subtitle: "Sièges en cuir, volants & garnitures",
    description:
      "Restauration de l'usure et recoloration des sièges, volants et garnitures automobiles.",
    image: "/images/services/univers-interieur-automobile.jpg",
    imageAlt: "Repigmentation au pistolet d'un siège automobile en cuir cognac",
    highlights: ["Sièges & sellerie cuir", "Rénovation volants", "Devis sur mesure"],
  },
];

export const BOUTIQUE_POSTERS: BoutiquePoster[] = [
  {
    id: 1,
    tabLabel: "Peintures",
    headline: "Peintures Cuir, Daim & Tissu",
    image: "/images/kenenti/real/affiche-trio-vrais-flacons.png",
    imageAlt: "Les trois bouteilles de peinture KENENTI : Cuir, Daim et Tissu",
    featuredProducts: [
      {
        name: "Peinture Cuir",
        price: "19,00 DT",
        image: "/images/kenenti/real/peinture-cuir-100ml.jpg",
      },
      {
        name: "Peinture Daim",
        price: "19,00 DT",
        image: "/images/kenenti/real/peinture-daim-1.jpg",
      },
      {
        name: "Peinture Tissu",
        price: "19,00 DT",
        image: "/images/kenenti/real/peinture-r.jpg",
      },
    ],
    ctaLabel: "Commander les peintures",
    ctaHref: "/boutique?famille=peintures",
  },
  {
    id: 2,
    tabLabel: "Kit de nettoyage",
    headline: "Kit de Nettoyage Complet",
    image: "/images/kenenti/real/pack-all-in-one.jpg",
    imageAlt: "Kit de nettoyage complet KENENTI",
    featuredProducts: [
      {
        name: "Kit de Nettoyage Complet",
        price: "49,00 DT",
        image: "/images/kenenti/real/pack-all-in-one.jpg",
      },
    ],
    ctaLabel: "Commander le kit de nettoyage",
    ctaHref: "/boutique?famille=soin-et-entretien",
  },
  {
    id: 3,
    tabLabel: "Reblanchissant",
    headline: "Reblanchissant — Sole Bright",
    image: "/images/kenenti/real/sole-bright-cropped.png",
    imageAlt: "Flacon Reblanchissant Sole Bright KENENTI 100ml",
    featuredProducts: [
      {
        name: "Reblanchissant (Sole Bright)",
        price: "20,00 DT",
        image: "/images/kenenti/real/sole-bright-cropped.png",
      },
    ],
    ctaLabel: "Commander le reblanchissant",
    ctaHref: "/boutique?famille=reblanchissant",
  },
];

export const WORKSHOPS: WorkshopLocation[] = [
  {
    id: "la-goulette",
    name: "Atelier KENENTI — La Goulette",
    shortName: "La Goulette",
    city: "La Goulette, Tunis",
    address: "Rue des Ecoles, La Goulette 2060",
    phoneDisplay: "+216 29 286 445",
    phoneHref: "tel:+21629286445",
    mapUrl: LA_GOULETTE_MAP_URL,
    reviewsUrl: LA_GOULETTE_REVIEWS_URL,
    googleRating: "4,1",
    googleReviewCount: 52,
    image: "/images/ateliers/atelier-presse-1.jpg",
  },
  {
    id: "menzah-6",
    name: "Atelier KENENTI — Menzah 6",
    shortName: "Menzah 6",
    city: "Menzah 6, Ariana",
    address: "Kenenti Manzah 6, R5W9+G34, Ariana",
    phoneDisplay: "+216 28 877 074",
    phoneHref: "tel:+21628877074",
    mapUrl: MENZAH_MAP_URL,
    reviewsUrl: MENZAH_REVIEWS_URL,
    googleRating: "4,5",
    googleReviewCount: 23,
    image: "/images/ateliers/d3_1.jpg",
  },
];

export const GOOGLE_REVIEWS: GoogleReviewItem[] = [
  {
    id: "google-review-1",
    author: "Mouna Mbarek",
    rating: 5,
    relativeDate: "Il y a 4 mois",
    workshopName: "Atelier La Goulette",
    workshopId: "la-goulette",
    universeTag: "Maroquinerie & Sacs",
    text: "Très satisfaite de la rénovation de mes sacs, merci à toute l'équipe pour son professionnalisme.",
    reviewUrl: LA_GOULETTE_REVIEWS_URL,
  },
  {
    id: "google-review-2",
    author: "Wajed Khkh",
    rating: 5,
    relativeDate: "Il y a un an",
    workshopName: "Atelier Menzah 6",
    workshopId: "menzah-6",
    universeTag: "Chaussures & Articles Cuir",
    text: "Un service exceptionnel ! Un travail réalisé avec un grand soin et une vraie maîtrise.",
    reviewUrl: MENZAH_REVIEWS_URL,
  },
  {
    id: "google-review-3",
    author: "khalsi rahma",
    rating: 5,
    relativeDate: "Il y a un an",
    workshopName: "Atelier La Goulette",
    workshopId: "la-goulette",
    universeTag: "Sneakers & Baskets",
    text: "Très impressionnée par la prestation ! Les baskets raj3ou on dirait jdod, service client au top.",
    reviewUrl: LA_GOULETTE_REVIEWS_URL,
  },
  {
    id: "google-review-4",
    author: "hosni ben amor",
    rating: 5,
    relativeDate: "Il y a un an",
    workshopName: "Atelier Menzah 6",
    workshopId: "menzah-6",
    universeTag: "Maroquinerie & Sacs",
    text: "Une équipe très professionnelle et soignée. Mon sac a retrouvé une nouvelle vie, mille mercis !",
    reviewUrl: MENZAH_REVIEWS_URL,
  },
  {
    id: "google-review-5",
    author: "Nour Ghaleb",
    rating: 5,
    relativeDate: "Il y a un an",
    workshopName: "Atelier Menzah 6",
    workshopId: "menzah-6",
    universeTag: "Rénovation Chaussures",
    text: "Mes chaussures ont retrouvé une seconde vie et sont maintenant comme neuves. Un immense merci !",
    reviewUrl: MENZAH_REVIEWS_URL,
  },
  {
    id: "google-review-6",
    author: "Slim KEFI",
    rating: 5,
    relativeDate: "Il y a un mois",
    workshopName: "Atelier La Goulette",
    workshopId: "la-goulette",
    universeTag: "Soin & Entretien",
    text: "Très professionnel, très méticuleux, prix abordable.",
    reviewUrl: LA_GOULETTE_REVIEWS_URL,
  },
];

export const FAQ_ITEMS = [
  {
    id: "faq-devis",
    question: "Comment demander un devis pour une restauration ou un entretien ?",
    answer:
      "Chaque pièce (chaussures, sneakers, sac de maroquinerie, vêtement en cuir, mobilier ou intérieur automobile) est examinée individuellement. Vous pouvez envoyer vos photos depuis la page Services ou déposer votre article dans l'un de nos ateliers à La Goulette ou Menzah 6.",
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
      "KENENTI dispose de deux ateliers : le premier à La Goulette (Rue des Ecoles, La Goulette 2060 — Tél : +216 29 286 445) et le second à Menzah 6 (Ariana, R5W9+G34 — Tél : +216 28 877 074).",
  },
  {
    id: "faq-delais-tarifs",
    question: "Comment sont déterminés le tarif et le délai d'une intervention en atelier ?",
    answer:
      "Chaque article nécessitant un traitement adapté à sa matière et à son état d'usure, nos artisans réalisent un diagnostic manuel préalable (sur photos ou lors du dépôt en atelier) afin de vous communiquer une proposition précise.",
  },
];
