import { MapPin, Truck } from "lucide-react";
import { FIVE_UNIVERSES, type UniverseItem } from "@/lib/kenenti-data";

export interface UniversePastExample {
  src: string;
  caption: string;
}

export interface UniverseCareOption {
  id: string;
  title: string;
  shortDesc: string;
}

export interface UniverseServiceConfig {
  id: number;
  heroPhoto: string;
  pastExamples: UniversePastExample[];
  careOptions: UniverseCareOption[];
}

export const UNIVERSE_CONFIGS: Record<number, UniverseServiceConfig> = {
  1: {
    id: 1,
    heroPhoto: "/images/services/chaussures-banner-horizontal.jpg",
    pastExamples: [
      {
        src: "/images/services/WhatsApp-Image-2025-06-20-a-17.37.03_6180b03d.jpg",
        caption: "Nike Air Force 1 — Avant / Après rénovation complète",
      },
      {
        src: "/images/services/WhatsApp-Image-2025-06-20-a-17.37.02_4203d7fe.jpg",
        caption: "Timberland Nubuck — Détachage profond & nutrition cuir",
      },
      {
        src: "/images/avant-apres/WhatsApp-Image-2025-06-20-a-17.37.01_cb58a3ef.jpg",
        caption: "Mocassins Gucci Blancs — Nettoyage & repigmentation",
      },
      {
        src: "/images/avant-apres/WhatsApp-Image-2025-06-20-a-17.37.02_cbcdd0da.jpg",
        caption: "Mocassins Daim Gant — Recoloration marron cognac",
      },
      {
        src: "/images/avant-apres/WhatsApp-Image-2025-06-20-a-17.37.02_23a92b43.jpg",
        caption: "Sneakers Toile — Déjaunissement & détachage complet",
      },
      {
        src: "/images/avant-apres/WhatsApp-Image-2025-06-20-a-17.37.03_ee871867.jpg",
        caption: "Adidas Toile — Changement de couleur en bleu roi",
      },
    ],
    careOptions: [
      {
        id: "sneakers-nettoyage",
        title: "Nettoyage approfondi & Détachage",
        shortDesc: "Soin complet cuir, daim, mesh et remise en forme",
      },
      {
        id: "sneakers-dejaunissement",
        title: "Déjaunissement des semelles (Sole Bright)",
        shortDesc: "Traitement de l'oxydation et reblanchissement des semelles",
      },
      {
        id: "sneakers-peinture",
        title: "Peinture & Recoloration Cuir / Daim",
        shortDesc: "Teinture sur mesure et ravivage des couleurs délavées",
      },
      {
        id: "sneakers-renovation",
        title: "Rénovation Complète & Griffures",
        shortDesc: "Restauration intégrale du cuir, nutrition et patine",
      },
      {
        id: "sneakers-custom",
        title: "Personnalisation (Custom sur mesure)",
        shortDesc: "Création artistique peinte à la main en atelier",
      },
    ],
  },
  2: {
    id: 2,
    heroPhoto: "/images/avant-apres/WhatsApp-Image-2025-06-20-a-17.37.00_6bcb7953.jpg",
    pastExamples: [
      {
        src: "/images/avant-apres/WhatsApp-Image-2025-06-20-a-17.37.00_6bcb7953.jpg",
        caption: "Sac Chanel Matelassé — Avant / Après restauration",
      },
      {
        src: "/images/avant-apres/WhatsApp-Image-2025-06-20-a-17.37.00_b462408b.jpg",
        caption: "Sac Chanel Cuir Noir — Repigmentation intégrale",
      },
      {
        src: "/images/avant-apres/WhatsApp-Image-2025-06-20-a-17.37.01_06c7e0f3.jpg",
        caption: "Portefeuille Prada Saffiano — Soin des coins & teinte",
      },
      {
        src: "/images/avant-apres/WhatsApp-Image-2025-06-20-a-17.37.01_617fa0d5.jpg",
        caption: "Sac Gucci Toile & Cuir — Détachage & soin",
      },
    ],
    careOptions: [
      {
        id: "maro-nettoyage",
        title: "Nettoyage délicat & Détachage",
        shortDesc: "Soin doux des cuirs précieux, toiles et doublures intérieures",
      },
      {
        id: "maro-coins",
        title: "Restauration des coins, tranches & poignées",
        shortDesc: "Réfection minutieuse des angles usés et bordures écaillées",
      },
      {
        id: "maro-repigmentation",
        title: "Repigmentation & Teinture sur mesure",
        shortDesc: "Correction des décolorations et ravivage uniforme de la teinte",
      },
      {
        id: "maro-nutrition",
        title: "Nutrition & Protection cuir précieux",
        shortDesc: "Assouplissement profond et traitement protecteur",
      },
    ],
  },
  3: {
    id: 3,
    heroPhoto: "/images/services/univers-vetements-cuir.jpg",
    pastExamples: [
      {
        src: "/images/services/univers-vetements-cuir.jpg",
        caption: "Blouson en cuir marron — Avant / Après repigmentation au pistolet",
      },
    ],
    careOptions: [
      {
        id: "veste-nettoyage",
        title: "Nettoyage & Assouplissement du cuir",
        shortDesc: "Élimination des salissures et nourrissage assouplissant",
      },
      {
        id: "veste-repigmentation",
        title: "Repigmentation complète (Cols, manches, épaules)",
        shortDesc: "Correction des zones décolorées par le soleil ou l'usure",
      },
      {
        id: "veste-daim",
        title: "Soin spécifique Veste en Daim / Peau retournée",
        shortDesc: "Détachage à sec, brossage et ravivage pigmentaire du daim",
      },
      {
        id: "veste-griffures",
        title: "Traitement des griffures & accros",
        shortDesc: "Atténuation des éraflures et finition satinée protectrice",
      },
    ],
  },
  4: {
    id: 4,
    heroPhoto: "/images/services/univers-mobilier.jpg",
    pastExamples: [
      {
        src: "/images/services/univers-mobilier.jpg",
        caption: "Fauteuil Chesterfield en cuir — Avant / Après repigmentation",
      },
    ],
    careOptions: [
      {
        id: "mobilier-nettoyage",
        title: "Nettoyage profond Canapé & Fauteuil",
        shortDesc: "Extraction des salissures et dégraissage cuir ou tissu",
      },
      {
        id: "mobilier-craquelures",
        title: "Correction des craquelures & griffures",
        shortDesc: "Comblement souple des sillons d'usure sur assises et accoudoirs",
      },
      {
        id: "mobilier-repigmentation",
        title: "Repigmentation & Restauration de teinte salon",
        shortDesc: "Harmonisation de la couleur et fixateur haute résistance",
      },
    ],
  },
  5: {
    id: 5,
    heroPhoto: "/images/services/univers-interieur-automobile.jpg",
    pastExamples: [
      {
        src: "/images/services/univers-interieur-automobile.jpg",
        caption: "Siège automobile en cuir cognac — Repigmentation en atelier",
      },
    ],
    careOptions: [
      {
        id: "auto-sieges",
        title: "Rénovation des sièges & bourrelets en cuir",
        shortDesc: "Traitement de l'usure par frottement, plis et décoloration",
      },
      {
        id: "auto-volant",
        title: "Restauration & Repigmentation de volant cuir",
        shortDesc: "Dégraissage, correction de l'usure et finition mate d'origine",
      },
      {
        id: "auto-sellerie",
        title: "Détachage & Nutrition sellerie complète",
        shortDesc: "Nettoyage des transferts et hydratation anti-UV du cuir",
      },
    ],
  },
};

export const LOGISTICS_MODES = [
  { id: "collecte", label: "Collecte & Retour à domicile", icon: Truck },
  { id: "goulette", label: "Dépôt Atelier La Goulette", icon: MapPin },
  { id: "menzah", label: "Dépôt Atelier Menzah 6", icon: MapPin },
];

export function getUniverseWithConfigBySlug(
  slug: string
): { universe: UniverseItem; config: UniverseServiceConfig } | null {
  const universe = FIVE_UNIVERSES.find((item) => item.slug === slug);
  if (!universe) return null;
  const config = UNIVERSE_CONFIGS[universe.id];
  if (!config) return null;
  return { universe, config };
}
