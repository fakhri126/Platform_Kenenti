"use client";

import * as React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  ShoppingBag,
  Sparkles,
  Truck,
  Banknote,
  ShieldCheck,
  Search,
  MessageCircle,
  Plus,
  Minus,
  Trash2,
  Check,
  ZoomIn,
  X,
  Palette,
  Droplets,
  Wrench,
  Layers,
  SlidersHorizontal,
  ArrowRight,
  Phone,
} from "lucide-react";
import { KENENTI_BRAND, WORKSHOPS } from "@/lib/kenenti-data";
import { cn } from "@/lib/utils";

export type BoutiqueFamilyId =
  | "all"
  | "peintures"
  | "soin-et-entretien"
  | "accessoires";

export interface BoutiqueCatalogItem {
  id: string;
  name: string;
  familyId: Exclude<BoutiqueFamilyId, "all">;
  familyLabel: string;
  volumeOrFormat: string;
  priceDisplay: string;
  numericPrice?: number;
  image: string;
  gallery?: string[];
  badge: string;
  description: string;
  usagePoints: string[];
  hasManualVariant?: boolean;
  variantLabel?: string;
  variantOptions?: string[];
  sourceUrl: string;
}

const BOUTIQUE_FAMILIES: {
  id: BoutiqueFamilyId;
  number?: string;
  title: string;
  shortLabel: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
}[] = [
  {
    id: "all",
    title: "Tous les produits",
    shortLabel: "Tout voir",
    subtitle: "Les 3 familles officielles de la boutique KENENTI",
    icon: Layers,
  },
  {
    id: "peintures",
    number: "01",
    title: "Peintures et produits pour le daim, le cuir et le textile",
    shortLabel: "Peintures",
    subtitle: "Flacons 100 ml formulés pour la rénovation et la customisation",
    icon: Palette,
  },
  {
    id: "soin-et-entretien",
    number: "02",
    title: "Produits de soin et d'entretien",
    shortLabel: "Soins & Kits",
    subtitle: "Kits complets, mousses nettoyantes et reblanchissant semelles",
    icon: Droplets,
  },
  {
    id: "accessoires",
    number: "03",
    title: "Accessoires et brosses",
    shortLabel: "Accessoires",
    subtitle: "Embauchoirs, lacets, patchs de réparation et outils d'entretien",
    icon: Wrench,
  },
];

export const BOUTIQUE_CATALOG: BoutiqueCatalogItem[] = [
  // FAMILLE 1 : Peintures et produits pour le daim, le cuir et le textile
  {
    id: "peinture-cuir-100ml",
    name: "Peinture Cuir KENENTI",
    familyId: "peintures",
    familyLabel: "Peintures Cuir, Daim & Textile",
    volumeOrFormat: "Flacon 100 ml",
    priceDisplay: "19,00 DT",
    numericPrice: 19,
    image: "/images/kenenti/real/peinture-cuir-100ml.jpg",
    gallery: [
      "/images/kenenti/real/peinture-cuir-100ml.jpg",
      "/images/kenenti/real/affiche-trio-vrais-flacons.png",
      "/images/kenenti/real/peinture-ss.jpg",
    ],
    badge: "Best-Seller • 100 ml",
    description:
      "Peinture acrylique professionnelle souple et couvrante pour la repigmentation, la rénovation et la personnalisation (custom) des cuirs lisses et synthétiques.",
    usagePoints: [
      "Haute adhérence & souplesse sur cuir",
      "Rénovation ou customisation au pinceau",
      "Disponibilité des teintes confirmée manuellement",
    ],
    hasManualVariant: true,
    variantLabel: "Teinte souhaitée (confirmée manuellement)",
    variantOptions: [
      "Noir",
      "Blanc",
      "Marron / Cognac",
      "Bleu",
      "Rouge",
      "Autre teinte (à préciser)",
    ],
    sourceUrl: "https://kenenti.com/produit-de-peinture/",
  },
  {
    id: "peinture-daim-100ml",
    name: "Peinture Daim & Nubuck KENENTI",
    familyId: "peintures",
    familyLabel: "Peintures Cuir, Daim & Textile",
    volumeOrFormat: "Flacon 100 ml",
    priceDisplay: "19,00 DT",
    numericPrice: 19,
    image: "/images/kenenti/real/peinture-daim-1.jpg",
    gallery: [
      "/images/kenenti/real/peinture-daim-1.jpg",
      "/images/kenenti/real/peinture-t.jpg",
      "/images/kenenti/real/affiche-trio-vrais-flacons.png",
    ],
    badge: "Soin Daim • 100 ml",
    description:
      "Teinture pénétrante spécialement conçue pour raviver et recolorer le daim, le nubuck et les peaux retournées tout en préservant leur toucher velouté.",
    usagePoints: [
      "Ne cartonne pas les fibres du daim",
      "Ravive les couleurs délavées",
      "Teinte vérifiée manuellement à la commande",
    ],
    hasManualVariant: true,
    variantLabel: "Teinte daim souhaitée",
    variantOptions: [
      "Noir",
      "Bleu Marine / Bleu",
      "Marron / Camel",
      "Vert",
      "Gris",
      "Autre teinte (à préciser)",
    ],
    sourceUrl: "https://kenenti.com/produit-de-peinture/",
  },
  {
    id: "peinture-tissu-100ml",
    name: "Peinture Tissu & Textile KENENTI",
    familyId: "peintures",
    familyLabel: "Peintures Cuir, Daim & Textile",
    volumeOrFormat: "Flacon 100 ml",
    priceDisplay: "19,00 DT",
    numericPrice: 19,
    image: "/images/kenenti/real/peinture-r.jpg",
    gallery: [
      "/images/kenenti/real/peinture-r.jpg",
      "/images/kenenti/real/peinture-z.jpg",
      "/images/kenenti/real/affiche-trio-vrais-flacons.png",
    ],
    badge: "Textile & Toile • 100 ml",
    description:
      "Peinture dédiée aux empeignes en toile, mesh, coton et matériaux textiles pour restaurer une couleur uniforme ou réaliser des créations custom.",
    usagePoints: [
      "Idéale pour sneakers en toile & mesh",
      "Tenue durable après séchage",
      "Variantes de couleurs gérées manuellement",
    ],
    hasManualVariant: true,
    variantLabel: "Teinte textile souhaitée",
    variantOptions: [
      "Noir",
      "Blanc",
      "Rouge",
      "Bleu",
      "Jaune",
      "Autre teinte (à préciser)",
    ],
    sourceUrl: "https://kenenti.com/produit-de-peinture/",
  },
  {
    id: "trio-peintures-kenenti",
    name: "Gamme Complète Peintures (Cuir, Daim, Tissu)",
    familyId: "peintures",
    familyLabel: "Peintures Cuir, Daim & Textile",
    volumeOrFormat: "3 × 100 ml",
    priceDisplay: "19,00 DT / flacon",
    numericPrice: 57,
    image: "/images/kenenti/real/affiche-trio-vrais-flacons.png",
    gallery: [
      "/images/kenenti/real/affiche-trio-vrais-flacons.png",
      "/images/boutique/y.jpg",
      "/images/ateliers/atelier-messenger-1.jpeg",
    ],
    badge: "Sélection 3 Flacons",
    description:
      "Composez votre assortiment de 3 flacons de peinture 100 ml parmi nos formules Cuir, Daim et Tissu selon vos besoins d'atelier ou de rénovation maison.",
    usagePoints: [
      "Choix libre des supports (Cuir / Daim / Tissu)",
      "Conseil artisanal sur les teintes",
      "Paiement à la livraison (COD)",
    ],
    hasManualVariant: true,
    variantLabel: "Assortiment souhaité",
    variantOptions: [
      "1 Cuir + 1 Daim + 1 Tissu",
      "3 Peintures Cuir (teintes au choix)",
      "3 Peintures Daim (teintes au choix)",
      "Personnalisé (à préciser)",
    ],
    sourceUrl: "https://kenenti.com/produit-de-peinture/",
  },

  // FAMILLE 2 : Produits de soin et d'entretien
  {
    id: "pack-all-in-one",
    name: "Kit de Nettoyage Complet — Pack All-in-One",
    familyId: "soin-et-entretien",
    familyLabel: "Produits de soin et d'entretien",
    volumeOrFormat: "Coffret Complet",
    priceDisplay: "49,00 DT",
    numericPrice: 49,
    image: "/images/kenenti/real/pack-all-in-one.jpg",
    gallery: [
      "/images/kenenti/real/pack-all-in-one.jpg",
      "/images/boutique/IMG_3424.jpeg",
    ],
    badge: "Coffret Phare",
    description:
      "Le kit complet KENENTI réunissant les essentiels de nettoyage et d'entretien pour nettoyer, détacher et prendre soin de vos sneakers et articles en cuir à domicile.",
    usagePoints: [
      "Solution nettoyante + accessoires inclus",
      "Adapté au cuir, daim, nubuck, toile et semelles",
      "Livraison à domicile avec paiement COD",
    ],
    sourceUrl: "https://kenenti.com/product/pack-all-in-one/",
  },
  {
    id: "sole-bright-100ml",
    name: "Reblanchissant Semelles — Sole Bright",
    familyId: "soin-et-entretien",
    familyLabel: "Produits de soin et d'entretien",
    volumeOrFormat: "Flacon 100 ml",
    priceDisplay: "20,00 DT",
    numericPrice: 20,
    image: "/images/kenenti/real/sole-bright-cropped.png",
    gallery: [
      "/images/kenenti/real/sole-bright-cropped.png",
      "/images/kenenti/real/sole-bright.png",
    ],
    badge: "Anti-Jaunissement",
    description:
      "Formule dédiée au déjaunissement et au reblanchissement des semelles en caoutchouc ou translucides oxydées par le temps.",
    usagePoints: [
      "Action ciblée contre l'oxydation des semelles",
      "Application simple au pinceau",
      "Utilisé dans nos ateliers KENENTI",
    ],
    sourceUrl: "https://kenenti.com/product/sole-bright/",
  },
  {
    id: "pack-nettoyage-3-en-1",
    name: "Pack Nettoyage 3 en 1 KENENTI",
    familyId: "soin-et-entretien",
    familyLabel: "Produits de soin et d'entretien",
    volumeOrFormat: "Pack 3 éléments",
    priceDisplay: "Sur confirmation",
    image: "/images/kenenti/real/pack-nettoyage-3-en-1.png",
    gallery: [
      "/images/kenenti/real/pack-nettoyage-3-en-1.png",
      "/images/boutique/Untitled-10.png",
    ],
    badge: "Pack Entretien",
    description:
      "Trio d'entretien quotidien associant la solution nettoyante KENENTI et ses accessoires dédiés pour un nettoyage rapide et efficace.",
    usagePoints: [
      "Entretien régulier des sneakers & chaussures",
      "Formule respectueuse des matières",
      "Disponibilité confirmée manuellement",
    ],
    sourceUrl: "https://kenenti.com/product/pack-nettoyage-3-en-1/",
  },
  {
    id: "pack-nettoyage-2-en-1",
    name: "Pack Nettoyage 2 en 1 KENENTI",
    familyId: "soin-et-entretien",
    familyLabel: "Produits de soin et d'entretien",
    volumeOrFormat: "Duo Nettoyage",
    priceDisplay: "Sur confirmation",
    image: "/images/kenenti/real/pack-nettoyage-2-en-1.png",
    gallery: ["/images/kenenti/real/pack-nettoyage-2-en-1.png"],
    badge: "Format Duo",
    description:
      "Format compact combinant le nettoyant KENENTI et sa brosse d'application pour l'entretien courant de vos paires.",
    usagePoints: [
      "Format pratique à emporter",
      "Nettoyage doux multi-supports",
      "Paiement à la livraison (COD)",
    ],
    sourceUrl: "https://kenenti.com/boutique/",
  },
  {
    id: "nettoyant-mousse",
    name: "Nettoyant à Mousse KENENTI",
    familyId: "soin-et-entretien",
    familyLabel: "Produits de soin et d'entretien",
    volumeOrFormat: "Flacon Mousse",
    priceDisplay: "Sur confirmation",
    image: "/images/boutique/Untitled-4.png",
    gallery: ["/images/boutique/Untitled-4.png"],
    badge: "Mousse Active",
    description:
      "Mousse nettoyante prête à l'emploi permettant de décoller les salissures sans détremper le cuir, le daim ou le textile.",
    usagePoints: [
      "Action moussante sans excès d'eau",
      "Séchage rapide",
      "Idéal pour cuir, daim et sneakers",
    ],
    sourceUrl: "https://kenenti.com/product/nettoyage-kenenti-500ml/",
  },
  {
    id: "spray-blanchisseur-200ml",
    name: "Spray Blanchisseur KENENTI 200 ml",
    familyId: "soin-et-entretien",
    familyLabel: "Produits de soin et d'entretien",
    volumeOrFormat: "Spray 200 ml",
    priceDisplay: "Sur confirmation",
    image: "/images/boutique/467487562_1638459630089955_8992126874243753485_n.jpg",
    gallery: [
      "/images/boutique/467487562_1638459630089955_8992126874243753485_n.jpg",
    ],
    badge: "Blancheur • 200 ml",
    description:
      "Spray raviveur de blanc conçu pour redonner un éclat net aux sneakers et chaussures blanches ternies par l'usage.",
    usagePoints: [
      "Ravive la blancheur instantanément",
      "Application homogène en spray 200 ml",
      "Confirmation manuelle à la commande",
    ],
    sourceUrl: "https://kenenti.com/product/spray-blanchisseur-200ml/",
  },

  // FAMILLE 3 : Accessoires et brosses
  {
    id: "embauchoir-chaussures",
    name: "Embauchoirs de Maintien KENENTI",
    familyId: "accessoires",
    familyLabel: "Accessoires et brosses",
    volumeOrFormat: "La paire",
    priceDisplay: "Sur confirmation",
    image: "/images/boutique/EMBAUCHOIR.jpg",
    gallery: ["/images/boutique/EMBAUCHOIR.jpg"],
    badge: "Anti-Plis",
    description:
      "Embauchoirs à ressort permettant de maintenir la forme d'origine de vos chaussures et sneakers, de limiter les plis de marche et de faciliter le nettoyage ou la peinture.",
    usagePoints: [
      "Préserve le galbe de la chaussure",
      "Indispensable pendant le nettoyage et le séchage",
      "Tension adaptée aux sneakers et souliers",
    ],
    sourceUrl: "https://kenenti.com/product/embauchoir/",
  },
  {
    id: "lacets-chaussures",
    name: "Lacets Chaussures & Sneakers",
    familyId: "accessoires",
    familyLabel: "Accessoires et brosses",
    volumeOrFormat: "La paire • Plusieurs teintes",
    priceDisplay: "Sur confirmation",
    image: "/images/boutique/lacets-ronde-chaussures.jpg",
    gallery: ["/images/boutique/lacets-ronde-chaussures.jpg"],
    badge: "Finition Neuf",
    description:
      "Lacets de remplacement ronds ou plats en plusieurs coloris pour parfaire la remise à neuf de vos sneakers, bottines et chaussures de ville.",
    usagePoints: [
      "Plusieurs coloris et formes disponibles",
      "Tressage résistant",
      "Disponibilité de la couleur confirmée manuellement",
    ],
    hasManualVariant: true,
    variantLabel: "Couleur / Type de lacet souhaité",
    variantOptions: [
      "Noir",
      "Blanc",
      "Marron / Beige",
      "Bleu / Rouge / Autre (à préciser)",
    ],
    sourceUrl: "https://kenenti.com/product/lacet/",
  },
  {
    id: "patch-reparation-talon",
    name: "Patchs de Réparation Intérieur (Lot de 4)",
    familyId: "accessoires",
    familyLabel: "Accessoires et brosses",
    volumeOrFormat: "Pack de 4 pièces",
    priceDisplay: "Sur confirmation",
    image: "/images/boutique/483891980_1190217459134999_2880878275371482912_n.jpg",
    gallery: [
      "/images/boutique/483891980_1190217459134999_2880878275371482912_n.jpg",
    ],
    badge: "Lot de 4 Patchs",
    description:
      "Patchs auto-adhésifs en cuir souple pour réparer et protéger l'intérieur usé des talons ou des doublures de vos sneakers et chaussures.",
    usagePoints: [
      "Contient 2 tailles complémentaires (4 pièces)",
      "Pose rapide sans couture",
      "Protège contre les ampoules et l'usure du talon",
    ],
    hasManualVariant: true,
    variantLabel: "Teinte du patch souhaitée",
    variantOptions: ["Noir", "Blanc", "Beige / Marron", "Gris"],
    sourceUrl: "https://kenenti.com/product/patch-de-reparation/",
  },
];

interface CodCartItem {
  product: BoutiqueCatalogItem;
  quantity: number;
  variant: string;
}

export function BoutiquePageContent() {
  const searchParams = useSearchParams();

  const [activeFamily, setActiveFamily] = React.useState<BoutiqueFamilyId>("all");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedVariants, setSelectedVariants] = React.useState<Record<string, string>>(
    () => {
      const initial: Record<string, string> = {};
      BOUTIQUE_CATALOG.forEach((item) => {
        if (item.variantOptions && item.variantOptions.length > 0) {
          initial[item.id] = item.variantOptions[0];
        }
      });
      return initial;
    }
  );

  // Panier de commande COD (Paiement à la livraison uniquement — sans paiement en ligne ni compte client)
  const [codCart, setCodCart] = React.useState<CodCartItem[]>([]);
  const [customerName, setCustomerName] = React.useState("");
  const [customerPhone, setCustomerPhone] = React.useState("");
  const [customerCity, setCustomerCity] = React.useState("");
  const [customerNotes, setCustomerNotes] = React.useState("");
  const [justAddedId, setJustAddedId] = React.useState<string | null>(null);

  // Lightbox d'aperçu photo produit
  const [lightboxItem, setLightboxItem] = React.useState<{
    product: BoutiqueCatalogItem;
    activeImage: string;
  } | null>(null);

  // Synchronisation avec le paramètre ?famille=... issu du carrousel de l'accueil
  React.useEffect(() => {
    const familleParam = searchParams.get("famille");
    if (!familleParam) return;
    if (familleParam === "peintures") {
      setActiveFamily("peintures");
    } else if (
      familleParam === "soin-et-entretien" ||
      familleParam === "reblanchissant"
    ) {
      setActiveFamily("soin-et-entretien");
    } else if (
      familleParam === "accessoires" ||
      familleParam === "accessoires-et-brosses"
    ) {
      setActiveFamily("accessoires");
    }
  }, [searchParams]);

  // Fermeture Lightbox avec Escape
  React.useEffect(() => {
    if (!lightboxItem) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxItem(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxItem]);

  const filteredProducts = React.useMemo(() => {
    return BOUTIQUE_CATALOG.filter((item) => {
      const matchesFamily =
        activeFamily === "all" || item.familyId === activeFamily;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.familyLabel.toLowerCase().includes(q);
      return matchesFamily && matchesSearch;
    });
  }, [activeFamily, searchQuery]);

  const handleAddToCodOrder = (product: BoutiqueCatalogItem) => {
    const chosenVariant = selectedVariants[product.id] ?? "";
    setCodCart((prev) => {
      const existingIndex = prev.findIndex(
        (entry) =>
          entry.product.id === product.id && entry.variant === chosenVariant
      );
      if (existingIndex !== -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + 1,
        };
        return updated;
      }
      return [...prev, { product, quantity: 1, variant: chosenVariant }];
    });

    setJustAddedId(product.id);
    window.setTimeout(() => {
      setJustAddedId((current) => (current === product.id ? null : current));
    }, 1400);
  };

  const handleUpdateQty = (index: number, delta: number) => {
    setCodCart((prev) => {
      const updated = [...prev];
      const nextQty = updated[index].quantity + delta;
      if (nextQty <= 0) {
        return prev.filter((_, idx) => idx !== index);
      }
      updated[index] = { ...updated[index], quantity: nextQty };
      return updated;
    });
  };

  const handleRemoveCartItem = (index: number) => {
    setCodCart((prev) => prev.filter((_, idx) => idx !== index));
  };

  const totalItemsCount = codCart.reduce((acc, item) => acc + item.quantity, 0);

  const composedOrderWhatsappUrl = React.useMemo(() => {
    const lines = [
      "Bonjour KENENTI, je souhaite passer une commande Boutique (Paiement à la livraison — COD) :",
    ];

    if (codCart.length > 0) {
      lines.push("");
      lines.push("Articles sélectionnés :");
      codCart.forEach((entry, idx) => {
        const variantPart = entry.variant ? ` [${entry.variant}]` : "";
        lines.push(
          `${idx + 1}. ${entry.product.name}${variantPart} × ${entry.quantity} (${entry.product.priceDisplay})`
        );
      });
    } else {
      lines.push("• Je souhaite être conseillé(e) sur vos produits de soin et peintures.");
    }

    lines.push("");
    lines.push("Modalités : Paiement à la livraison (COD) • Livraison 5 DT");
    if (customerName.trim()) lines.push(`• Nom : ${customerName.trim()}`);
    if (customerPhone.trim()) lines.push(`• Téléphone : ${customerPhone.trim()}`);
    if (customerCity.trim()) lines.push(`• Adresse / Ville : ${customerCity.trim()}`);
    if (customerNotes.trim()) lines.push(`• Précisions : ${customerNotes.trim()}`);

    lines.push("");
    lines.push("Merci de me confirmer la disponibilité des articles et variantes.");

    return `https://wa.me/${KENENTI_BRAND.whatsappGeneralNumber}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;
  }, [codCart, customerName, customerPhone, customerCity, customerNotes]);

  return (
    <div className="bg-[#FAF8F5]">
      {/* 1. HERO DE LA PAGE BOUTIQUE — Compact, Chic & Optimisé Mobile/Web */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0B1933] via-[#132850] to-[#0B1933] text-white py-4 sm:py-10 lg:py-14 border-b border-kenenti-yellow/25">
        <div
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-56 w-[360px] sm:w-[540px] rounded-full bg-kenenti-yellow/15 blur-[90px]"
          aria-hidden="true"
        />

        <div className="container relative z-10 max-w-6xl space-y-4 sm:space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div className="max-w-3xl space-y-2 sm:space-y-3">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-kenenti-yellow/20 border border-kenenti-yellow/45 px-2.5 py-0.5 sm:px-3 sm:py-1 font-heading text-[9.5px] sm:text-xs font-extrabold uppercase tracking-wider text-kenenti-yellow">
                <ShoppingBag className="h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden="true" />
                <span>La Boutique KENENTI • 67 Références Pro</span>
              </div>

              <h1 className="font-heading text-lg sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug sm:leading-[1.15]">
                Peintures, Kits de Nettoyage &amp; Accessoires de Soin
              </h1>

              <p className="text-[11px] sm:text-sm lg:text-base text-white/85 leading-snug sm:leading-relaxed">
                Retrouvez les peintures (Cuir, Daim, Tissu), les kits d&apos;entretien, le
                reblanchissant <strong className="text-white">Sole Bright</strong> et les
                accessoires utilisés par nos artisans. Commande simple sans création de
                compte avec{" "}
                <strong className="text-kenenti-yellow">
                  paiement uniquement à la livraison (COD)
                </strong>
                .
              </p>
            </div>

            <div className="grid grid-cols-2 sm:flex items-center gap-2 shrink-0">
              <a
                href="#bon-commande-cod"
                className="inline-flex h-9 sm:h-11 items-center justify-center gap-1.5 sm:gap-2 rounded-xl bg-kenenti-yellow px-3 sm:px-5 font-heading text-[10.5px] sm:text-xs font-extrabold text-kenenti-navy shadow-md transition-transform active:scale-[0.99] hover:bg-[#f2aa40]"
              >
                <ShoppingBag className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" aria-hidden="true" />
                <span className="truncate">
                  Ma commande COD ({totalItemsCount})
                </span>
              </a>

              <Link
                href="/services"
                className="inline-flex h-9 sm:h-11 items-center justify-center gap-1.5 rounded-xl border border-white/20 bg-white/10 px-3 sm:px-4 font-heading text-[10.5px] sm:text-xs font-bold text-white transition-colors hover:bg-white/15"
              >
                <Sparkles className="h-3.5 w-3.5 text-kenenti-yellow shrink-0" aria-hidden="true" />
                <span className="truncate">Services Rénovation</span>
              </Link>
            </div>
          </div>

          {/* Les 3 engagements Boutique (Section 6 du Cahier des charges) côte à côte même sur mobile */}
          <div className="grid grid-cols-3 gap-1.5 sm:gap-3">
            <div className="flex flex-col sm:flex-row items-start gap-1.5 sm:gap-3 rounded-xl sm:rounded-2xl bg-white/10 border border-white/15 p-2 sm:p-3.5 backdrop-blur-sm">
              <span className="flex h-6 w-6 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-kenenti-yellow text-kenenti-navy">
                <Banknote className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <h2 className="font-heading text-[10px] sm:text-sm font-extrabold text-white leading-tight">
                  Paiement à la Livraison
                </h2>
                <p className="mt-0.5 text-[9px] sm:text-[11px] text-white/75 leading-tight sm:leading-snug">
                  Règlement COD uniquement à la réception. Aucun paiement en ligne ni
                  compte client requis.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-1.5 sm:gap-3 rounded-xl sm:rounded-2xl bg-white/10 border border-white/15 p-2 sm:p-3.5 backdrop-blur-sm">
              <span className="flex h-6 w-6 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-kenenti-yellow text-kenenti-navy">
                <Truck className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <h2 className="font-heading text-[10px] sm:text-sm font-extrabold text-white leading-tight">
                  Livraison 5 DT
                </h2>
                <p className="mt-0.5 text-[9px] sm:text-[11px] text-white/75 leading-tight sm:leading-snug">
                  Livraison 5 DT pour tous les produits ou retrait dans nos ateliers de La
                  Goulette &amp; Menzah 6.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-1.5 sm:gap-3 rounded-xl sm:rounded-2xl bg-white/10 border border-white/15 p-2 sm:p-3.5 backdrop-blur-sm">
              <span className="flex h-6 w-6 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-kenenti-yellow text-kenenti-navy">
                <ShieldCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <h2 className="font-heading text-[10px] sm:text-sm font-extrabold text-white leading-tight">
                  Variantes Vérifiées
                </h2>
                <p className="mt-0.5 text-[9px] sm:text-[11px] text-white/75 leading-tight sm:leading-snug">
                  Disponibilité des teintes et variantes gérée et confirmée manuellement
                  avec vous.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BARRE DE FILTRES DES 3 FAMILLES OFFICIELLES & RECHERCHE */}
      <section
        id="catalogue-boutique"
        aria-labelledby="catalogue-heading"
        className="py-6 sm:py-12 lg:py-16"
      >
        <div className="container max-w-6xl">
          {/* Barre de contrôle : Onglets des 3 familles + Recherche */}
          <div className="sticky top-12 sm:top-16 z-30 -mx-2 px-2 py-2.5 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-kenenti-navy/10 mb-5 sm:mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2.5 sm:gap-4">
              {/* Sélecteur des 3 familles (Grille 4 colonnes sur mobile & web) */}
              <div
                role="tablist"
                aria-label="Filtrer par famille de produits"
                className="grid grid-cols-4 gap-1.5 sm:gap-2 flex-1"
              >
                {BOUTIQUE_FAMILIES.map((fam) => {
                  const Icon = fam.icon;
                  const isSelected = activeFamily === fam.id;
                  const count =
                    fam.id === "all"
                      ? BOUTIQUE_CATALOG.length
                      : BOUTIQUE_CATALOG.filter((p) => p.familyId === fam.id).length;

                  return (
                    <button
                      key={fam.id}
                      type="button"
                      role="tab"
                      aria-selected={isSelected}
                      onClick={() => setActiveFamily(fam.id)}
                      className={cn(
                        "flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 rounded-xl border px-2 py-2 sm:px-3.5 sm:py-2.5 text-center transition-all cursor-pointer",
                        isSelected
                          ? "bg-[#0F2143] text-white border-kenenti-yellow shadow-md"
                          : "bg-white text-kenenti-navy border-kenenti-navy/15 hover:border-kenenti-yellow"
                      )}
                    >
                      <Icon
                        className={cn(
                          "h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0",
                          isSelected ? "text-kenenti-yellow" : "text-[#B86E08]"
                        )}
                        aria-hidden="true"
                      />
                      <span
                        className={cn(
                          "font-heading text-[9.5px] sm:text-xs font-extrabold leading-tight truncate max-w-full",
                          isSelected ? "text-kenenti-yellow" : "text-kenenti-navy"
                        )}
                      >
                        {fam.shortLabel}
                      </span>
                      <span
                        className={cn(
                          "hidden sm:inline-flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 font-heading text-[10px] font-extrabold",
                          isSelected
                            ? "bg-kenenti-yellow text-kenenti-navy"
                            : "bg-kenenti-navy/10 text-kenenti-navy"
                        )}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Champ de recherche rapide */}
              <div className="relative w-full lg:w-72 shrink-0">
                <Search
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-kenenti-navy/45"
                  aria-hidden="true"
                />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Rechercher : peinture, kit, sole bright, lacet..."
                  aria-label="Rechercher un produit dans la boutique"
                  className="h-9 sm:h-10 w-full rounded-xl border border-kenenti-navy/15 bg-white pl-9 pr-3 text-xs text-kenenti-navy placeholder:text-kenenti-navy/45 focus:border-kenenti-yellow focus:outline-none shadow-2xs"
                />
              </div>
            </div>
          </div>

          {/* En-tête de la famille active */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-4 sm:mb-6">
            <div>
              <h2
                id="catalogue-heading"
                className="font-heading text-base sm:text-2xl font-extrabold text-kenenti-navy"
              >
                {BOUTIQUE_FAMILIES.find((f) => f.id === activeFamily)?.title}
              </h2>
              <p className="text-[11px] sm:text-xs text-kenenti-navy/70">
                {BOUTIQUE_FAMILIES.find((f) => f.id === activeFamily)?.subtitle}
              </p>
            </div>
            <span className="text-[11px] sm:text-xs font-heading font-bold text-[#B86E08]">
              {filteredProducts.length} référence(s) affichée(s)
            </span>
          </div>

          {/* GRILLE DES PRODUITS — Mini-Cartes Luxe Ultra-Compactes sur Mobile (2 col) & Studio Chic sur Web (3 col) */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-5">
            {filteredProducts.map((product) => {
              const currentVariant = selectedVariants[product.id] ?? "";
              const isJustAdded = justAddedId === product.id;
              const hasNumericPrice = Boolean(product.numericPrice);
              const compactPrice =
                product.priceDisplay === "Sur confirmation"
                  ? "Sur confirm."
                  : product.priceDisplay.replace(" / flacon", "");

              const directProductWhatsapp = `https://wa.me/${KENENTI_BRAND.whatsappGeneralNumber}?text=${encodeURIComponent(
                `Bonjour KENENTI, je souhaite commander l'article "${product.name}"${
                  currentVariant ? ` (Variante : ${currentVariant})` : ""
                } avec paiement à la livraison (COD). Merci de me confirmer sa disponibilité.`
              )}`;

              const getSwatchStyle = (opt: string): string | null => {
                const lower = opt.toLowerCase();
                if (lower.startsWith("noir")) return "#12151C";
                if (lower.startsWith("blanc")) return "#FFFFFF";
                if (
                  lower.includes("marron") ||
                  lower.includes("cognac") ||
                  lower.includes("camel")
                )
                  return "#7B4B27";
                if (lower.includes("beige")) return "#D8C3A5";
                if (lower.includes("bleu")) return "#1D4ED8";
                if (lower.includes("rouge")) return "#DC2626";
                if (lower.includes("vert")) return "#15803D";
                if (lower.includes("gris")) return "#6B7280";
                if (lower.includes("jaune")) return "#F59E0B";
                return null;
              };

              return (
                <article
                  key={product.id}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl border border-kenenti-navy/10 bg-white p-1.5 sm:p-3 shadow-[0_4px_16px_rgba(15,33,67,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-kenenti-yellow hover:shadow-[0_14px_32px_rgba(15,33,67,0.12)]"
                >
                  <div>
                    {/* Visuel Studio Épuré & Compact sur Mobile (h-28 sur mobile, h-48 sur desktop) */}
                    <button
                      type="button"
                      onClick={() =>
                        setLightboxItem({
                          product,
                          activeImage: product.image,
                        })
                      }
                      className="relative h-28 sm:h-48 w-full rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#FAF8F4] via-white to-[#F2EEE5] border border-kenenti-navy/6 p-2 sm:p-4 flex items-center justify-center overflow-hidden cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kenenti-yellow"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        decoding="async"
                        className="relative z-10 max-h-full max-w-full object-contain drop-shadow-[0_4px_10px_rgba(15,33,67,0.1)] transition-transform duration-500 group-hover:scale-108"
                      />

                      {/* Micro-badge format en haut à gauche */}
                      <span className="absolute top-1.5 left-1.5 z-20 rounded-md sm:rounded-lg bg-[#0F2143]/90 px-1.5 py-0.5 sm:px-2 font-heading text-[7.5px] sm:text-[10px] font-extrabold text-kenenti-yellow shadow-2xs">
                        {product.volumeOrFormat}
                      </span>

                      {/* Icône loupe discrète en haut à droite */}
                      <span
                        className="absolute top-1.5 right-1.5 z-20 flex h-5 w-5 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-white/85 border border-kenenti-navy/10 text-kenenti-navy/75 shadow-2xs transition-colors group-hover:bg-[#0F2143] group-hover:text-kenenti-yellow"
                        title="Agrandir la photo"
                      >
                        <ZoomIn className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5" aria-hidden="true" />
                      </span>
                    </button>

                    {/* Corps de carte ultra-compact sur mobile */}
                    <div className="px-1 pt-2 pb-1.5 sm:px-1.5 sm:pt-3 sm:pb-2.5 space-y-1 sm:space-y-2">
                      {/* Titre Produit */}
                      <h3 className="font-heading text-[11px] sm:text-[15px] font-extrabold text-kenenti-navy leading-tight line-clamp-1 sm:line-clamp-2">
                        {product.name}
                      </h3>

                      {/* Description visible uniquement sur Tablette / Desktop pour garder la carte mobile petite et chic */}
                      <p className="hidden sm:line-clamp-2 text-xs text-kenenti-navy/70 leading-snug">
                        {product.description}
                      </p>

                      {/* Ligne unique ultra-fine pour les pastilles de teintes (ou mention COD) */}
                      {product.hasManualVariant && product.variantOptions ? (
                        <div className="flex items-center justify-between gap-1.5 pt-0.5">
                          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-0.5">
                            {product.variantOptions.map((opt) => {
                              const isSelectedVar = currentVariant === opt;
                              const swatchHex = getSwatchStyle(opt);

                              if (swatchHex) {
                                return (
                                  <button
                                    key={opt}
                                    type="button"
                                    title={opt}
                                    aria-label={`Teinte ${opt}`}
                                    onClick={() =>
                                      setSelectedVariants((prev) => ({
                                        ...prev,
                                        [product.id]: opt,
                                      }))
                                    }
                                    className={cn(
                                      "h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 rounded-full transition-transform cursor-pointer",
                                      swatchHex === "#FFFFFF"
                                        ? "border border-kenenti-navy/35"
                                        : "border border-black/15",
                                      isSelectedVar
                                        ? "ring-2 ring-kenenti-yellow ring-offset-1 scale-110"
                                        : "opacity-75 hover:opacity-100"
                                    )}
                                    style={{ backgroundColor: swatchHex }}
                                  />
                                );
                              }

                              return (
                                <button
                                  key={opt}
                                  type="button"
                                  onClick={() =>
                                    setSelectedVariants((prev) => ({
                                      ...prev,
                                      [product.id]: opt,
                                    }))
                                  }
                                  className={cn(
                                    "shrink-0 rounded px-1.5 py-0.5 font-heading text-[8px] sm:text-[9.5px] font-bold transition-all cursor-pointer",
                                    isSelectedVar
                                      ? "bg-[#0F2143] text-kenenti-yellow"
                                      : "bg-[#FAF8F5] text-kenenti-navy/75 border border-kenenti-navy/15"
                                  )}
                                >
                                  {opt.includes("Autre")
                                    ? "+Autre"
                                    : opt.split(" ")[0]}
                                </button>
                              );
                            })}
                          </div>

                          <span className="text-[8.5px] sm:text-[10px] font-heading font-bold text-[#B86E08] truncate max-w-[58px] sm:max-w-[90px] shrink-0">
                            {currentVariant.split(" ")[0]}
                          </span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1 pt-0.5 text-[9px] sm:text-[10.5px] font-heading font-semibold text-kenenti-navy/55">
                          <Check className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-[#B86E08] shrink-0" />
                          <span className="truncate">{product.badge} • COD 5 DT</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Barre inférieure Chic : Prix à gauche + Actions rapides à droite */}
                  <div className="mt-0.5 pt-1.5 sm:pt-2.5 px-1 pb-0.5 border-t border-kenenti-navy/8 flex items-center justify-between gap-1">
                    <span
                      className={cn(
                        "font-heading font-extrabold leading-none truncate",
                        hasNumericPrice
                          ? "text-xs sm:text-base text-[#0F2143]"
                          : "text-[9.5px] sm:text-xs text-[#B86E08]"
                      )}
                    >
                      {compactPrice}
                    </span>

                    <div className="flex items-center gap-1 shrink-0">
                      <a
                        href={directProductWhatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`Commander ${product.name} sur WhatsApp`}
                        aria-label={`Commander ${product.name} sur WhatsApp`}
                        className="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-lg sm:rounded-xl border border-[#25D366]/30 bg-[#25D366]/10 text-[#199E48] transition-colors hover:bg-[#25D366] hover:text-white"
                      >
                        <MessageCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
                      </a>

                      <button
                        type="button"
                        onClick={() => handleAddToCodOrder(product)}
                        className={cn(
                          "inline-flex h-7 sm:h-9 items-center justify-center gap-1 rounded-lg sm:rounded-xl px-2 sm:px-3 font-heading text-[9.5px] sm:text-xs font-extrabold shadow-2xs transition-all cursor-pointer",
                          isJustAdded
                            ? "bg-[#25D366] text-white"
                            : "bg-[#0F2143] text-kenenti-yellow hover:bg-kenenti-yellow hover:text-kenenti-navy"
                        )}
                      >
                        {isJustAdded ? (
                          <>
                            <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" aria-hidden="true" />
                            <span>OK</span>
                          </>
                        ) : (
                          <>
                            <Plus className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" aria-hidden="true" />
                            <span>Ajouter</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. BON DE COMMANDE COD (PAIEMENT À LA LIVRAISON UNIQUEMENT — SANS COMPTE CLIENT) */}
      <section
        id="bon-commande-cod"
        aria-labelledby="cod-order-heading"
        className="relative overflow-hidden py-7 sm:py-14 lg:py-20 bg-gradient-to-b from-[#081226] via-[#0F2143] to-[#081226] text-white border-t border-kenenti-yellow/35"
      >
        <div className="container relative z-10 max-w-6xl">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2.5 mb-4 sm:mb-7">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-kenenti-yellow/20 border border-kenenti-yellow/45 px-3 py-0.5 text-[10px] sm:text-xs font-heading font-extrabold uppercase tracking-wider text-kenenti-yellow">
                <SlidersHorizontal className="h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden="true" />
                <span>Commande Directe • Cash on Delivery (COD)</span>
              </div>
              <h2
                id="cod-order-heading"
                className="font-heading text-lg sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight"
              >
                Finaliser ma Commande (Paiement à la Livraison)
              </h2>
            </div>
            <p className="text-[11px] sm:text-xs text-white/75 max-w-md">
              Aucun paiement en ligne ni création de compte • Disponibilité des variantes
              confirmée manuellement par notre équipe.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-start">
            {/* Colonne Gauche (8 col) : Panier COD & Coordonnées de livraison */}
            <div className="lg:col-span-8 overflow-hidden rounded-2xl sm:rounded-3xl bg-white text-kenenti-navy shadow-[0_24px_60px_rgba(0,0,0,0.4)] border border-kenenti-yellow/45">
              {/* Bandeau supérieur */}
              <div className="bg-gradient-to-r from-[#0B1933] via-[#132850] to-[#0B1933] px-4 py-3 sm:px-6 sm:py-4 border-b border-kenenti-yellow/30 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-xl bg-kenenti-yellow text-kenenti-navy shadow-sm">
                    <ShoppingBag className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-heading text-xs sm:text-sm font-extrabold text-white">
                      Bon de Commande Paiement à la Livraison (COD)
                    </p>
                    <p className="text-[10px] sm:text-[11px] text-white/70">
                      Livraison 5 DT partout en Tunisie • Règlement à la réception
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-kenenti-yellow px-2.5 py-0.5 font-heading text-[10px] sm:text-xs font-extrabold text-kenenti-navy shrink-0">
                  {totalItemsCount} article(s)
                </span>
              </div>

              <div className="p-3 sm:p-5 lg:p-6 space-y-4 bg-[#FAF8F5]/60">
                {/* CADRE 01 : Articles sélectionnés */}
                <div className="rounded-2xl border border-kenenti-navy/12 bg-white p-3 sm:p-4 shadow-2xs space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-lg bg-[#0F2143] font-heading text-[10px] sm:text-xs font-extrabold text-kenenti-yellow">
                        01
                      </span>
                      <span className="font-heading text-xs sm:text-sm font-extrabold text-kenenti-navy">
                        Vos produits sélectionnés
                      </span>
                    </div>
                    {codCart.length > 0 && (
                      <button
                        type="button"
                        onClick={() => setCodCart([])}
                        className="text-[10.5px] font-heading font-bold text-kenenti-red hover:underline cursor-pointer"
                      >
                        Vider la sélection
                      </button>
                    )}
                  </div>

                  {codCart.length === 0 ? (
                    <div className="rounded-xl border border-dashed border-kenenti-navy/20 bg-[#FAF8F5] p-4 text-center space-y-2">
                      <p className="font-heading text-xs sm:text-sm font-bold text-kenenti-navy">
                        Aucun produit sélectionné pour le moment
                      </p>
                      <p className="text-[11px] text-kenenti-navy/65">
                        Cliquez sur <strong>« Ajouter à ma commande »</strong> sur les
                        produits ci-dessus, ou envoyez directement votre demande ci-dessous.
                      </p>
                      <div className="pt-1 flex flex-wrap justify-center gap-1.5">
                        {BOUTIQUE_CATALOG.slice(0, 3).map((quickProd) => (
                          <button
                            key={quickProd.id}
                            type="button"
                            onClick={() => handleAddToCodOrder(quickProd)}
                            className="inline-flex items-center gap-1 rounded-lg border border-kenenti-navy/15 bg-white px-2.5 py-1 font-heading text-[10.5px] font-bold text-kenenti-navy hover:border-kenenti-yellow cursor-pointer"
                          >
                            <Plus className="h-3 w-3 text-[#B86E08]" aria-hidden="true" />
                            <span>+ {quickProd.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {codCart.map((entry, idx) => (
                        <div
                          key={`${entry.product.id}-${entry.variant}`}
                          className="flex items-center justify-between gap-2.5 rounded-xl border border-kenenti-navy/10 bg-[#FAF8F5] p-2 sm:p-2.5"
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <img
                              src={entry.product.image}
                              alt={entry.product.name}
                              className="h-11 w-11 shrink-0 rounded-lg border border-kenenti-navy/10 bg-white object-contain p-1"
                            />
                            <div className="min-w-0">
                              <p className="font-heading text-xs sm:text-sm font-extrabold text-kenenti-navy truncate">
                                {entry.product.name}
                              </p>
                              <p className="text-[10px] sm:text-[11px] text-kenenti-navy/70 truncate">
                                {entry.product.priceDisplay}
                                {entry.variant ? ` • Teinte : ${entry.variant}` : ""}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-1.5 shrink-0">
                            <button
                              type="button"
                              onClick={() => handleUpdateQty(idx, -1)}
                              aria-label="Diminuer la quantité"
                              className="flex h-7 w-7 items-center justify-center rounded-lg border border-kenenti-navy/15 bg-white text-kenenti-navy hover:border-kenenti-yellow cursor-pointer"
                            >
                              <Minus className="h-3 w-3" aria-hidden="true" />
                            </button>
                            <span className="w-6 text-center font-heading text-xs font-extrabold text-kenenti-navy">
                              {entry.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => handleUpdateQty(idx, 1)}
                              aria-label="Augmenter la quantité"
                              className="flex h-7 w-7 items-center justify-center rounded-lg border border-kenenti-navy/15 bg-white text-kenenti-navy hover:border-kenenti-yellow cursor-pointer"
                            >
                              <Plus className="h-3 w-3" aria-hidden="true" />
                            </button>
                            <button
                              type="button"
                              onClick={() => handleRemoveCartItem(idx)}
                              aria-label="Retirer l'article"
                              className="ml-1 flex h-7 w-7 items-center justify-center rounded-lg bg-kenenti-red/10 text-kenenti-red hover:bg-kenenti-red hover:text-white transition-colors cursor-pointer"
                            >
                              <Trash2 className="h-3.5 w-3.5" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* CADRE 02 : Coordonnées de livraison COD (Sans création de compte) */}
                <div className="rounded-2xl border border-kenenti-navy/12 bg-white p-3 sm:p-4 shadow-2xs space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-lg bg-[#0F2143] font-heading text-[10px] sm:text-xs font-extrabold text-kenenti-yellow">
                      02
                    </span>
                    <span className="font-heading text-xs sm:text-sm font-extrabold text-kenenti-navy">
                      Informations pour la livraison (facultatif avant WhatsApp)
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    <div>
                      <label
                        htmlFor="cod-name"
                        className="block font-heading text-[10.5px] font-bold text-kenenti-navy/80 mb-1"
                      >
                        Nom &amp; Prénom
                      </label>
                      <input
                        id="cod-name"
                        type="text"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="Votre nom"
                        className="h-9 sm:h-10 w-full rounded-xl border border-kenenti-navy/15 bg-[#FAF8F5] px-3 text-xs text-kenenti-navy placeholder:text-kenenti-navy/40 focus:border-kenenti-yellow focus:bg-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="cod-phone"
                        className="block font-heading text-[10.5px] font-bold text-kenenti-navy/80 mb-1"
                      >
                        Téléphone
                      </label>
                      <input
                        id="cod-phone"
                        type="tel"
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        placeholder="Ex. : 29 000 000"
                        className="h-9 sm:h-10 w-full rounded-xl border border-kenenti-navy/15 bg-[#FAF8F5] px-3 text-xs text-kenenti-navy placeholder:text-kenenti-navy/40 focus:border-kenenti-yellow focus:bg-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="cod-city"
                        className="block font-heading text-[10.5px] font-bold text-kenenti-navy/80 mb-1"
                      >
                        Ville / Adresse de livraison
                      </label>
                      <input
                        id="cod-city"
                        type="text"
                        value={customerCity}
                        onChange={(e) => setCustomerCity(e.target.value)}
                        placeholder="Ex. : Tunis, Ariana, Sousse..."
                        className="h-9 sm:h-10 w-full rounded-xl border border-kenenti-navy/15 bg-[#FAF8F5] px-3 text-xs text-kenenti-navy placeholder:text-kenenti-navy/40 focus:border-kenenti-yellow focus:bg-white focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="cod-notes"
                      className="block font-heading text-[10.5px] font-bold text-kenenti-navy/80 mb-1"
                    >
                      Précisions sur les teintes ou votre commande
                    </label>
                    <input
                      id="cod-notes"
                      type="text"
                      value={customerNotes}
                      onChange={(e) => setCustomerNotes(e.target.value)}
                      placeholder="Ex. : Peinture cuir noir + lacet blanc, ou retrait à l'atelier de La Goulette..."
                      className="h-9 sm:h-10 w-full rounded-xl border border-kenenti-navy/15 bg-[#FAF8F5] px-3 text-xs text-kenenti-navy placeholder:text-kenenti-navy/40 focus:border-kenenti-yellow focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                {/* PIED DE COMMANDE COD */}
                <div className="rounded-2xl bg-gradient-to-r from-[#0B1933] via-[#132850] to-[#0B1933] p-3.5 sm:p-4 text-white space-y-3 shadow-md">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-[10.5px] sm:text-xs">
                    <div className="flex items-center gap-2">
                      <span className="rounded-md bg-kenenti-yellow/20 border border-kenenti-yellow/40 px-2 py-0.5 font-heading font-extrabold text-kenenti-yellow">
                        Paiement à la livraison (COD)
                      </span>
                      <span className="text-white/75">• Livraison : 5 DT</span>
                    </div>
                    <span className="text-white/80 font-heading font-bold">
                      {totalItemsCount} produit(s) dans votre bon
                    </span>
                  </div>

                  <a
                    href={composedOrderWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 sm:h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 font-heading text-xs sm:text-sm font-extrabold text-white shadow-md transition-transform active:scale-[0.99] hover:bg-[#20bd5a]"
                  >
                    <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" aria-hidden="true" />
                    <span>Envoyer ma commande COD sur WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Colonne Droite (4 col) : Règles Boutique & Retrait en Atelier */}
            <aside className="lg:col-span-4 space-y-3.5 sm:space-y-4">
              <div className="rounded-2xl sm:rounded-3xl bg-white/[0.07] border border-white/15 p-4 sm:p-5 backdrop-blur-md space-y-3">
                <h3 className="font-heading text-sm sm:text-base font-extrabold text-white">
                  Comment commander sur la boutique ?
                </h3>

                <ol className="grid grid-cols-3 lg:grid-cols-1 gap-2 sm:gap-3 text-[10px] sm:text-xs text-white/85">
                  <li className="flex flex-col lg:flex-row items-start gap-1.5 sm:gap-3 rounded-xl bg-white/5 p-2.5 sm:p-3 border border-white/10">
                    <span className="flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-lg bg-kenenti-yellow font-heading text-[10px] sm:text-xs font-extrabold text-kenenti-navy">
                      01
                    </span>
                    <div>
                      <strong className="font-heading text-white block leading-tight">
                        Choix &amp; Teintes
                      </strong>
                      <span className="text-white/75 leading-snug block mt-0.5">
                        Sélectionnez vos peintures, kits ou accessoires et la variante souhaitée.
                      </span>
                    </div>
                  </li>
                  <li className="flex flex-col lg:flex-row items-start gap-1.5 sm:gap-3 rounded-xl bg-white/5 p-2.5 sm:p-3 border border-white/10">
                    <span className="flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-lg bg-kenenti-yellow font-heading text-[10px] sm:text-xs font-extrabold text-kenenti-navy">
                      02
                    </span>
                    <div>
                      <strong className="font-heading text-white block leading-tight">
                        Confirmation Manuelle
                      </strong>
                      <span className="text-white/75 leading-snug block mt-0.5">
                        Notre équipe vérifie manuellement la disponibilité de vos variantes sur WhatsApp.
                      </span>
                    </div>
                  </li>
                  <li className="flex flex-col lg:flex-row items-start gap-1.5 sm:gap-3 rounded-xl bg-white/5 p-2.5 sm:p-3 border border-white/10">
                    <span className="flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-lg bg-kenenti-yellow font-heading text-[10px] sm:text-xs font-extrabold text-kenenti-navy">
                      03
                    </span>
                    <div>
                      <strong className="font-heading text-white block leading-tight">
                        Livraison COD (5 DT)
                      </strong>
                      <span className="text-white/75 leading-snug block mt-0.5">
                        Vous réglez uniquement à la réception de votre colis à domicile.
                      </span>
                    </div>
                  </li>
                </ol>
              </div>

              {/* Achat direct dans nos 2 ateliers */}
              <div className="rounded-2xl sm:rounded-3xl bg-white/[0.07] border border-white/15 p-4 sm:p-5 backdrop-blur-md space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-xs sm:text-sm font-extrabold text-kenenti-yellow uppercase tracking-wider">
                    Disponibles dans nos 2 Ateliers
                  </h3>
                  <Link
                    href="/#notre-atelier"
                    className="inline-flex items-center gap-1 text-[11px] font-heading font-bold text-white/85 hover:text-kenenti-yellow"
                  >
                    <span>Adresses</span>
                    <ArrowRight className="h-3 w-3" aria-hidden="true" />
                  </Link>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-1 gap-2.5">
                  {WORKSHOPS.map((w, idx) => (
                    <div
                      key={w.id}
                      className="rounded-xl bg-[#09152E]/90 border border-white/15 p-3 space-y-1.5"
                    >
                      <div className="flex items-center justify-between gap-1">
                        <p className="font-heading text-xs sm:text-sm font-extrabold text-white">
                          {w.shortName}
                        </p>
                        <span className="rounded bg-kenenti-yellow/20 px-1.5 py-0.5 font-heading text-[8.5px] font-bold text-kenenti-yellow">
                          0{idx + 1}
                        </span>
                      </div>
                      <p className="text-[10px] sm:text-[11px] text-white/75 leading-tight line-clamp-2">
                        {w.address}
                      </p>
                      <div className="pt-1 border-t border-white/10 flex items-center justify-between gap-1">
                        <a
                          href={w.phoneHref}
                          className="inline-flex items-center gap-1 font-heading text-[10.5px] sm:text-xs font-extrabold text-kenenti-yellow hover:underline truncate"
                        >
                          <Phone className="h-2.5 w-2.5 sm:h-3 sm:w-3 shrink-0" aria-hidden="true" />
                          <span className="truncate">{w.phoneDisplay.replace("+216 ", "")}</span>
                        </a>
                        <a
                          href={w.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[10px] font-heading font-semibold text-white/80 hover:text-white underline shrink-0"
                        >
                          Carte
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* LIGHTBOX D'APERÇU PHOTO PRODUIT */}
      {lightboxItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Aperçu produit — ${lightboxItem.product.name}`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-6"
          onClick={() => setLightboxItem(null)}
        >
          <div
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl sm:rounded-3xl border border-white/20 bg-white text-kenenti-navy shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 border-b border-kenenti-navy/10 bg-[#0F2143] px-4 py-3 text-white">
              <div className="min-w-0">
                <span className="inline-block rounded bg-kenenti-yellow px-2 py-0.5 font-heading text-[10px] font-extrabold text-kenenti-navy">
                  {lightboxItem.product.familyLabel} • {lightboxItem.product.priceDisplay}
                </span>
                <p className="mt-1 font-heading text-xs sm:text-base font-extrabold text-white truncate">
                  {lightboxItem.product.name}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setLightboxItem(null)}
                aria-label="Fermer l'aperçu"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-kenenti-yellow hover:text-kenenti-navy transition-colors cursor-pointer"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <div className="relative h-72 sm:h-96 w-full bg-white p-6 flex items-center justify-center">
              <img
                src={lightboxItem.activeImage}
                alt={lightboxItem.product.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {lightboxItem.product.gallery && lightboxItem.product.gallery.length > 1 && (
              <div className="flex items-center justify-center gap-2 border-t border-kenenti-navy/10 bg-[#FAF8F5] px-4 py-2.5">
                {lightboxItem.product.gallery.map((imgSrc) => (
                  <button
                    key={imgSrc}
                    type="button"
                    onClick={() =>
                      setLightboxItem((prev) =>
                        prev ? { ...prev, activeImage: imgSrc } : null
                      )
                    }
                    className={cn(
                      "h-12 w-14 overflow-hidden rounded-lg border-2 bg-white p-1 transition-all cursor-pointer",
                      lightboxItem.activeImage === imgSrc
                        ? "border-kenenti-yellow scale-105"
                        : "border-kenenti-navy/15 opacity-70 hover:opacity-100"
                    )}
                  >
                    <img
                      src={imgSrc}
                      alt={lightboxItem.product.name}
                      className="h-full w-full object-contain"
                    />
                  </button>
                ))}
              </div>
            )}

            <div className="flex items-center justify-between gap-3 border-t border-kenenti-navy/10 px-4 py-3 bg-white">
              <p className="text-[11px] sm:text-xs text-kenenti-navy/75 line-clamp-2">
                {lightboxItem.product.description}
              </p>
              <button
                type="button"
                onClick={() => {
                  handleAddToCodOrder(lightboxItem.product);
                  setLightboxItem(null);
                }}
                className="inline-flex h-9 shrink-0 items-center gap-1.5 rounded-xl bg-[#0F2143] px-3.5 font-heading text-xs font-extrabold text-kenenti-yellow hover:bg-kenenti-yellow hover:text-kenenti-navy transition-colors cursor-pointer"
              >
                <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Ajouter à ma commande</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* BARRE FLOTTANTE MOBILE DE COMMANDE COD (apparaît dès qu'un produit est sélectionné) */}
      {totalItemsCount > 0 && (
        <div className="fixed bottom-16 inset-x-3 z-40 lg:hidden">
          <div className="flex items-center justify-between gap-2 rounded-2xl bg-[#0F2143]/95 backdrop-blur-md border border-kenenti-yellow/50 p-2.5 text-white shadow-[0_12px_30px_rgba(15,33,67,0.45)]">
            <div className="flex items-center gap-2 min-w-0">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-kenenti-yellow font-heading text-xs font-extrabold text-kenenti-navy">
                {totalItemsCount}
              </span>
              <div className="min-w-0">
                <p className="font-heading text-xs font-extrabold text-white truncate">
                  Ma commande COD
                </p>
                <p className="text-[10px] text-white/75 truncate">
                  Paiement à la livraison • Livraison 5 DT
                </p>
              </div>
            </div>

            <a
              href="#bon-commande-cod"
              className="inline-flex h-8 shrink-0 items-center gap-1 rounded-xl bg-kenenti-yellow px-3 font-heading text-[11px] font-extrabold text-kenenti-navy shadow-xs"
            >
              <span>Finaliser</span>
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
