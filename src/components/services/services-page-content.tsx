"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Check,
  MessageCircle,
  Truck,
  MapPin,
  ShieldCheck,
  Camera,
  Footprints,
  Briefcase,
  Shirt,
  Armchair,
  CarFront,
  Phone,
  ArrowRight,
  ChevronRight,
  SlidersHorizontal,
  Layers,
  ShoppingBag,
  ZoomIn,
  X,
  ChevronLeft,
  ImagePlus,
  Trash2,
  Share2,
} from "lucide-react";
import { FIVE_UNIVERSES, KENENTI_BRAND, WORKSHOPS } from "@/lib/kenenti-data";
import { cn } from "@/lib/utils";

interface RealGalleryPhoto {
  src: string;
  label: string;
  caption: string;
}

interface DetailedUniverseConfig {
  id: number;
  slug: string;
  icon: React.ComponentType<{ className?: string }>;
  materials: string[];
  articles: string[];
  prestations: {
    title: string;
    detail: string;
  }[];
  processNote: string;
  realGallery: RealGalleryPhoto[];
}

const DETAILED_UNIVERSES: DetailedUniverseConfig[] = [
  {
    id: 1,
    slug: "chaussures-et-sneakers",
    icon: Footprints,
    materials: ["Cuir lisse & glacé", "Daim & Nubuck", "Toile & Mesh", "Semelles caoutchouc"],
    articles: [
      "Sneakers & baskets de collection",
      "Mocassins & souliers de ville",
      "Bottines & chaussures en daim",
      "Sandales & talons en cuir",
    ],
    prestations: [
      {
        title: "Nettoyage approfondi & Décontamination",
        detail:
          "Soin complet adapté à chaque matière (cuir, daim, nubuck, mesh), détachage minutieux et remise en forme sur embauchoir.",
      },
      {
        title: "Déjaunissement des semelles (Sole Bright)",
        detail:
          "Traitement d'oxydation des semelles jaunies pour restaurer leur blancheur ou leur transparence d'origine.",
      },
      {
        title: "Rénovation & Repigmentation cuir / daim",
        detail:
          "Correction des griffures, nutrition du cuir desséché et teinture artisanale au pinceau ou à l'aérographe.",
      },
      {
        title: "Personnalisation & Custom sur mesure",
        detail:
          "Créations artistiques et motifs personnalisés réalisés à la main avec nos peintures professionnelles KENENTI.",
      },
    ],
    processNote:
      "Disponible en collecte & retour à domicile (« kenenti tjik win enti ») ou en dépôt direct dans nos ateliers de La Goulette et Menzah 6.",
    realGallery: [
      {
        src: "/images/avant-apres/WhatsApp-Image-2025-06-20-a-17.37.01_b2238924.jpg",
        label: "Archive KENENTI",
        caption: "Mocassins Louis Vuitton — Restauration & repigmentation",
      },
      {
        src: "/images/services/WhatsApp-Image-2025-06-20-a-17.37.03_6180b03d.jpg",
        label: "Avant / Après",
        caption: "Nike Air Force 1 — Remise à neuf intégrale",
      },
      {
        src: "/images/avant-apres/WhatsApp-Image-2025-06-20-a-17.37.03_adf05821.jpg",
        label: "Before / After",
        caption: "Air Jordan 5 Daim Bleu — Ravivage & soin du daim",
      },
      {
        src: "/images/avant-apres/WhatsApp-Image-2025-06-20-a-17.37.03_44db0e0c.jpg",
        label: "Custom Atelier",
        caption: "Converse Custom Galaxy — Personnalisation peinte à la main",
      },
    ],
  },
  {
    id: 2,
    slug: "maroquinerie",
    icon: Briefcase,
    materials: ["Cuir agneau & veau", "Cuir grainé / Saffiano", "Cuir matelassé", "Toile enduite & cuir"],
    articles: [
      "Sacs à main & sacs de marque",
      "Cabas, pochettes & besaces",
      "Portefeuilles & porte-cartes",
      "Ceintures & petite maroquinerie",
    ],
    prestations: [
      {
        title: "Détachage & Nettoyage délicat",
        detail:
          "Traitement doux des cuirs précieux, doublures et toiles sans altérer la souplesse ni la patine de la pièce.",
      },
      {
        title: "Restauration des coins, bordures & tranches",
        detail:
          "Réfection minutieuse des angles usés, des poignées patinées et des tranches écaillées.",
      },
      {
        title: "Repigmentation & Ravivage des teintes",
        detail:
          "Correction des décolorations, taches et transferts de couleur par teinture formulée sur mesure en atelier.",
      },
      {
        title: "Nutrition & Protection hydrophobe",
        detail:
          "Assouplissement en profondeur du cuir et protection contre l'humidité et les frottements.",
      },
    ],
    processNote:
      "Chaque pièce de maroquinerie fait l'objet d'un examen individuel par nos artisans avant toute intervention.",
    realGallery: [
      {
        src: "/images/avant-apres/WhatsApp-Image-2025-06-20-a-17.37.00_b462408b.jpg",
        label: "Archive KENENTI",
        caption: "Sac Chanel Cuir — Repigmentation noire intense",
      },
      {
        src: "/images/avant-apres/WhatsApp-Image-2025-06-20-a-17.37.00_6bcb7953.jpg",
        label: "Avant / Après",
        caption: "Sac Chanel Matelassé — Restauration complète",
      },
      {
        src: "/images/avant-apres/WhatsApp-Image-2025-06-20-a-17.37.01_06c7e0f3.jpg",
        label: "Avant / Après",
        caption: "Portefeuille Prada Saffiano — Soin des angles & teinte",
      },
      {
        src: "/images/avant-apres/WhatsApp-Image-2025-06-20-a-17.37.01_617fa0d5.jpg",
        label: "Avant / Après",
        caption: "Sac Gucci Toile & Cuir — Nettoyage & restauration",
      },
    ],
  },
  {
    id: 3,
    slug: "vetements-en-cuir",
    icon: Shirt,
    materials: ["Cuir d'agneau & vachette", "Peau retournée & Daim", "Nubuck", "Cuir vintage / patiné"],
    articles: [
      "Vestes & blousons en cuir",
      "Manteaux & trenchs en cuir",
      "Vestes en daim & peau lainée",
      "Pantalons & jupes en cuir",
    ],
    prestations: [
      {
        title: "Nettoyage & Assouplissement du cuir",
        detail:
          "Élimination des salissures et nourrissage profond pour redonner souplesse et toucher soyeux au vêtement.",
      },
      {
        title: "Recoloration & Ravivage d'éclat",
        detail:
          "Correction des zones décolorées par le soleil ou les frottements (cols, poignets, épaules, coudes).",
      },
      {
        title: "Soin spécifique Daim & Peau retournée",
        detail:
          "Détachage à sec, brossage des fibres et ravivage pigmentaire sans cartonner la matière.",
      },
      {
        title: "Traitement des griffures & accros",
        detail:
          "Atténuation des éraflures de surface et finition protectrice adaptée à la coupe du vêtement.",
      },
    ],
    processNote:
      "Collecte à domicile possible dans le Grand Tunis ou dépôt direct en atelier après diagnostic préalable.",
    realGallery: [],
  },
  {
    id: 4,
    slug: "mobilier",
    icon: Armchair,
    materials: ["Cuir d'ameublement", "Cuir pleine fleur & pigmenté", "Similicuir", "Tissu & Velours"],
    articles: [
      "Canapés & salons complets",
      "Fauteuils Chesterfield & clubs",
      "Chaises & assises de salle à manger",
      "Fauteuils de bureau & réception",
    ],
    prestations: [
      {
        title: "Nettoyage approfondi Cuir & Tissu",
        detail:
          "Extraction des salissures incrustées, détachage et dégraissage respectueux des revêtements d'ameublement.",
      },
      {
        title: "Correction des craquelures & griffures",
        detail:
          "Comblement souple des sillons d'usure sur les assises, accoudoirs et dossiers sollicités.",
      },
      {
        title: "Repigmentation & Restauration de teinte",
        detail:
          "Harmonisation de la couleur d'origine et application d'un fixateur résistant aux frottements quotidiens.",
      },
      {
        title: "Étude personnalisée sur photos",
        detail:
          "Diagnostic manuel par nos artisans à partir de vos photos pour définir le protocole adapté.",
      },
    ],
    processNote:
      "Intervention étudiée au cas par cas sur photos WhatsApp avant toute confirmation de faisabilité, de modalité ou de délai.",
    realGallery: [],
  },
  {
    id: 5,
    slug: "interieur-automobile",
    icon: CarFront,
    materials: ["Sellerie cuir auto", "Cuir perforé", "Alcantara & Daim", "Garnitures & Volants cuir"],
    articles: [
      "Sièges conducteur & passager",
      "Banquettes arrière complètes",
      "Volants & pommeaux en cuir",
      "Accoudoirs & panneaux de porte",
    ],
    prestations: [
      {
        title: "Rénovation des sièges & bourrelets d'entrée",
        detail:
          "Traitement de l'usure par frottement, des plis marqués et des craquelures sur les flancs de sièges.",
      },
      {
        title: "Restauration de volants en cuir",
        detail:
          "Dégraissage, ponçage fin du cuir poli par les mains, repigmentation mate d'origine et scellement protecteur.",
      },
      {
        title: "Détachage & Nutrition de la sellerie",
        detail:
          "Nettoyage des transferts de vêtements (jeans) et hydratation anti-UV pour prévenir le dessèchement.",
      },
      {
        title: "Diagnostic en atelier sur rendez-vous",
        detail:
          "Examen manuel sur photos WhatsApp ou dans nos ateliers afin d'évaluer précisément l'intervention.",
      },
    ],
    processNote:
      "Toutes les demandes d'intérieur automobile sont examinées manuellement sur photos ou en atelier avant proposition.",
    realGallery: [],
  },
];

const CARE_TYPES = [
  "Nettoyage & Entretien",
  "Rénovation & Repigmentation",
  "Déjaunissement / Détachage",
  "Personnalisation (Custom)",
  "Diagnostic complet sur photos",
];

const LOGISTICS_MODES = [
  "Collecte & Retour à domicile (« kenenti tjik win enti »)",
  "Dépôt à l'atelier de La Goulette",
  "Dépôt à l'atelier de Menzah 6",
  "À définir après étude des photos",
];

interface UploadedPreview {
  id: string;
  file: File;
  url: string;
}

export function ServicesPageContent() {
  const [activeIdx, setActiveIdx] = React.useState(0);
  const [quoteUniverse, setQuoteUniverse] = React.useState(FIVE_UNIVERSES[0].title);
  const [quoteCare, setQuoteCare] = React.useState(CARE_TYPES[0]);
  const [quoteMode, setQuoteMode] = React.useState(LOGISTICS_MODES[0]);
  const [quoteDetails, setQuoteDetails] = React.useState("");

  // État pour les photos ajoutées par le client (Mobile & Web)
  const [uploadedPhotos, setUploadedPhotos] = React.useState<UploadedPreview[]>([]);
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);

  // État pour la Lightbox d'agrandissement des photos de réalisations réelles
  const [lightboxState, setLightboxState] = React.useState<{
    photos: RealGalleryPhoto[];
    currentIndex: number;
    universeTitle: string;
  } | null>(null);

  React.useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash;
      if (!hash.startsWith("#univers-")) return;
      const slug = hash.replace("#univers-", "");
      const foundIdx = FIVE_UNIVERSES.findIndex((u) => u.slug === slug);
      if (foundIdx !== -1) {
        setActiveIdx(foundIdx);
        setQuoteUniverse(FIVE_UNIVERSES[foundIdx].title);
      }
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  // Nettoyage des URLs d'aperçu locales
  React.useEffect(() => {
    return () => {
      uploadedPhotos.forEach((item) => URL.revokeObjectURL(item.url));
    };
  }, [uploadedPhotos]);

  // Fermeture Lightbox au clavier (Escape + Flèches)
  React.useEffect(() => {
    if (!lightboxState) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxState(null);
      } else if (e.key === "ArrowRight") {
        setLightboxState((prev) =>
          prev
            ? {
                ...prev,
                currentIndex: (prev.currentIndex + 1) % prev.photos.length,
              }
            : null
        );
      } else if (e.key === "ArrowLeft") {
        setLightboxState((prev) =>
          prev
            ? {
                ...prev,
                currentIndex:
                  (prev.currentIndex - 1 + prev.photos.length) % prev.photos.length,
              }
            : null
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxState]);

  const handleSelectUniverse = (idx: number) => {
    setActiveIdx(idx);
    if (FIVE_UNIVERSES[idx]) {
      setQuoteUniverse(FIVE_UNIVERSES[idx].title);
    }
  };

  const handleFilesSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    if (files.length === 0) return;

    setUploadedPhotos((prev) => {
      const remainingSlots = Math.max(0, 4 - prev.length);
      const selectedSlice = files.slice(0, remainingSlots);
      const newPreviews = selectedSlice.map((file) => ({
        id: `${file.name}-${file.lastModified}-${Math.random().toString(36).slice(2, 7)}`,
        file,
        url: URL.createObjectURL(file),
      }));
      return [...prev, ...newPreviews];
    });

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleRemovePhoto = (id: string) => {
    setUploadedPhotos((prev) => {
      const target = prev.find((p) => p.id === id);
      if (target) {
        URL.revokeObjectURL(target.url);
      }
      return prev.filter((p) => p.id !== id);
    });
  };

  const composedWhatsappText = React.useMemo(() => {
    const lines = [
      "Bonjour KENENTI, je souhaite demander une étude de devis manuelle :",
      `• Univers : ${quoteUniverse}`,
      `• Prestation souhaitée : ${quoteCare}`,
      `• Mode souhaité : ${quoteMode}`,
    ];
    if (quoteDetails.trim()) {
      lines.push(`• Précisions sur l'article : ${quoteDetails.trim()}`);
    }
    if (uploadedPhotos.length > 0) {
      lines.push(
        `• Photos préparées (${uploadedPhotos.length}) : ${uploadedPhotos
          .map((p) => p.file.name)
          .join(", ")}`
      );
    }
    lines.push("Je vous joins les photos de mon article dans cette discussion.");
    return lines.join("\n");
  }, [quoteUniverse, quoteCare, quoteMode, quoteDetails, uploadedPhotos]);

  const composedWhatsappUrl = `https://wa.me/${KENENTI_BRAND.whatsappGeneralNumber}?text=${encodeURIComponent(
    composedWhatsappText
  )}`;

  const handleShareWithFiles = async () => {
    if (uploadedPhotos.length === 0) {
      window.open(composedWhatsappUrl, "_blank", "noopener,noreferrer");
      return;
    }

    const files = uploadedPhotos.map((p) => p.file);
    if (
      typeof navigator !== "undefined" &&
      navigator.canShare &&
      navigator.canShare({ files })
    ) {
      try {
        await navigator.share({
          title: "Demande de devis KENENTI",
          text: composedWhatsappText,
          files,
        });
        return;
      } catch {
        // Si l'utilisateur annule ou si le partage échoue, on ouvre WhatsApp
      }
    }
    window.open(composedWhatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-[#FAF8F5]">
      {/* 1. HERO DE LA PAGE SERVICES — Ultra-optimisé Mobile & Desktop */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0B1933] via-[#132850] to-[#0B1933] text-white py-4 sm:py-10 lg:py-14 border-b border-kenenti-yellow/25">
        <div
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-56 w-[360px] sm:w-[520px] rounded-full bg-kenenti-yellow/15 blur-[90px]"
          aria-hidden="true"
        />

        <div className="container relative z-10 max-w-6xl space-y-4 sm:space-y-6">
          {/* Texte + Boutons */}
          <div className="max-w-3xl space-y-2 sm:space-y-3">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-kenenti-yellow/20 border border-kenenti-yellow/45 px-2.5 py-0.5 sm:px-3 sm:py-1 font-heading text-[9.5px] sm:text-xs font-extrabold uppercase tracking-wider text-kenenti-yellow">
              <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden="true" />
              <span>Nos Prestations • « {KENENTI_BRAND.slogan} »</span>
            </div>

            <h1 className="font-heading text-lg sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug sm:leading-[1.15]">
              Nos 5 Univers de Restauration, Rénovation &amp; Soin
            </h1>

            <p className="text-[11px] sm:text-sm lg:text-base text-white/85 leading-snug sm:leading-relaxed">
              Du nettoyage minutieux à la repigmentation intégrale et à la
              personnalisation sur mesure : chaque article est examiné manuellement par
              nos artisans à <strong className="text-white">La Goulette</strong> et{" "}
              <strong className="text-white">Menzah 6</strong>, avec service de{" "}
              <strong className="text-kenenti-yellow">
                collecte et retour à domicile
              </strong>
              .
            </p>

            {/* Les 2 boutons côte à côte sur mobile et desktop */}
            <div className="pt-1 grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 sm:gap-3">
              <a
                href="#demande-devis"
                className="inline-flex h-9 sm:h-11 items-center justify-center gap-1.5 sm:gap-2 rounded-xl bg-kenenti-yellow px-2.5 sm:px-5 font-heading text-[10.5px] sm:text-sm font-extrabold text-kenenti-navy shadow-md transition-transform active:scale-[0.99] hover:bg-[#f2aa40] text-center"
              >
                <MessageCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" aria-hidden="true" />
                <span className="truncate">Préparer ma demande de devis</span>
              </a>

              <Link
                href="/#notre-boutique"
                className="inline-flex h-9 sm:h-11 items-center justify-center gap-1.5 sm:gap-2 rounded-xl border border-white/20 bg-white/10 px-2.5 sm:px-5 font-heading text-[10.5px] sm:text-sm font-bold text-white transition-colors hover:bg-white/15 text-center"
              >
                <ShoppingBag className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-kenenti-yellow shrink-0" aria-hidden="true" />
                <span className="truncate">Voir nos produits de soin</span>
              </Link>
            </div>
          </div>

          {/* Les 3 cadres plus petits et l'un près de l'autre (grid-cols-3 même sur mobile) */}
          <div className="grid grid-cols-3 gap-1.5 sm:gap-3">
            <div className="flex flex-col sm:flex-row items-start gap-1.5 sm:gap-3 rounded-xl sm:rounded-2xl bg-white/10 border border-white/15 p-2 sm:p-3.5 backdrop-blur-sm">
              <span className="flex h-6 w-6 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-kenenti-yellow text-kenenti-navy">
                <ShieldCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <h2 className="font-heading text-[10px] sm:text-sm font-extrabold text-white leading-tight">
                  Diagnostic 100% Manuel
                </h2>
                <p className="mt-0.5 text-[9px] sm:text-[11px] text-white/75 leading-tight sm:leading-snug">
                  Étude par nos artisans sur photos ou en atelier avant confirmation de
                  faisabilité, tarif ou délai.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-1.5 sm:gap-3 rounded-xl sm:rounded-2xl bg-white/10 border border-white/15 p-2 sm:p-3.5 backdrop-blur-sm">
              <span className="flex h-6 w-6 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-kenenti-yellow text-kenenti-navy">
                <Truck className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <h2 className="font-heading text-[10px] sm:text-sm font-extrabold text-white leading-tight">
                  Collecte &amp; Retour à Domicile
                </h2>
                <p className="mt-0.5 text-[9px] sm:text-[11px] text-white/75 leading-tight sm:leading-snug">
                  « {KENENTI_BRAND.slogan} » — Récupération et livraison chez vous,
                  paiement à la livraison (COD).
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-1.5 sm:gap-3 rounded-xl sm:rounded-2xl bg-white/10 border border-white/15 p-2 sm:p-3.5 backdrop-blur-sm">
              <span className="flex h-6 w-6 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-kenenti-yellow text-kenenti-navy">
                <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <h2 className="font-heading text-[10px] sm:text-sm font-extrabold text-white leading-tight">
                  2 Ateliers en Tunisie
                </h2>
                <p className="mt-0.5 text-[9px] sm:text-[11px] text-white/75 leading-tight sm:leading-snug">
                  La Goulette (29 286 445) &amp; Menzah 6 (28 877 074).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRÉSENTATION DÉTAILLÉE DES 5 UNIVERS */}
      <section
        id="detail-5-univers"
        aria-labelledby="detail-univers-heading"
        className="py-6 sm:py-12 lg:py-16"
      >
        <div className="container max-w-6xl">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-4 sm:mb-7">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#0F2143] px-2.5 py-0.5 text-[10px] sm:text-xs font-heading font-extrabold uppercase tracking-wider text-kenenti-yellow">
                <Layers className="h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden="true" />
                <span>Catalogue des Prestations</span>
              </div>
              <h2
                id="detail-univers-heading"
                className="font-heading text-lg sm:text-2xl lg:text-3xl font-extrabold text-kenenti-navy tracking-tight"
              >
                Présentation détaillée de nos 5 Univers
              </h2>
            </div>
            <p className="text-[11px] sm:text-xs text-kenenti-navy/70">
              Choisissez une catégorie sur mobile ou parcourez nos 5 univers complets
            </p>
          </div>

          {/* Sélecteur Mobile des 5 catégories (affiché uniquement sur Mobile/Tablette) */}
          <div
            role="tablist"
            aria-label="Choisir l'univers à afficher sur mobile"
            className="grid grid-cols-5 lg:hidden gap-1.5 sm:gap-2.5 mb-4 sticky top-12 z-30 bg-[#FAF8F5]/95 backdrop-blur-md py-1.5"
          >
            {FIVE_UNIVERSES.map((u, idx) => {
              const isSelected = activeIdx === idx;
              return (
                <button
                  key={`service-tab-${u.id}`}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => handleSelectUniverse(idx)}
                  className={cn(
                    "group relative flex flex-col items-center justify-between overflow-hidden rounded-xl p-1.5 text-center transition-all border cursor-pointer",
                    isSelected
                      ? "bg-[#0F2143] text-white border-kenenti-yellow shadow-md -translate-y-0.5"
                      : "bg-white text-kenenti-navy border-kenenti-navy/15 shadow-xs"
                  )}
                >
                  <div className="relative h-8 w-full sm:h-11 overflow-hidden rounded-lg bg-kenenti-navy">
                    <Image
                      src={u.image}
                      alt={u.shortTitle}
                      fill
                      loading="lazy"
                      sizes="20vw"
                      className="object-cover object-center"
                    />
                    <div
                      className={cn(
                        "absolute inset-0",
                        isSelected ? "bg-black/15" : "bg-black/35"
                      )}
                      aria-hidden="true"
                    />
                    <span
                      className={cn(
                        "absolute top-1 left-1 inline-flex h-4 w-4 items-center justify-center rounded text-[8px] font-heading font-extrabold",
                        isSelected
                          ? "bg-kenenti-yellow text-kenenti-navy"
                          : "bg-[#0F2143]/85 text-white"
                      )}
                    >
                      0{u.id}
                    </span>
                  </div>
                  <span
                    className={cn(
                      "mt-1 font-heading text-[9px] sm:text-xs font-extrabold leading-tight line-clamp-1 w-full",
                      isSelected ? "text-kenenti-yellow" : "text-kenenti-navy"
                    )}
                  >
                    {u.shortTitle.split(" ")[0]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Liste des 5 Univers :
              - Sur Mobile (< lg) : Seul l'univers sélectionné s'affiche
              - Sur Web / Desktop (lg:) : Les 5 univers détaillés complets sont affichés */}
          <div className="space-y-6 lg:space-y-9">
            {FIVE_UNIVERSES.map((universe, idx) => {
              const details =
                DETAILED_UNIVERSES.find((d) => d.id === universe.id) ??
                DETAILED_UNIVERSES[0];
              const Icon = details.icon;
              const isSelected = activeIdx === idx;
              const directWhatsappHref = `https://wa.me/${KENENTI_BRAND.whatsappGeneralNumber}?text=${encodeURIComponent(
                `Bonjour KENENTI, je souhaite demander un devis pour l'univers "${universe.title}".`
              )}`;

              return (
                <article
                  key={universe.id}
                  id={`univers-${universe.slug}`}
                  className={cn(
                    "scroll-mt-24 overflow-hidden rounded-2xl sm:rounded-3xl border border-kenenti-navy/15 bg-white shadow-[0_8px_30px_rgba(15,33,67,0.07)] transition-all",
                    isSelected ? "block" : "hidden lg:block"
                  )}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    {/* Colonne Visuelle & Identité de l'Univers (5 col sur Desktop) */}
                    <div className="lg:col-span-5 flex flex-col justify-between bg-[#0B1933] text-white">
                      <div className="relative h-48 sm:h-60 lg:h-68 w-full overflow-hidden">
                        <Image
                          src={universe.image}
                          alt={universe.imageAlt}
                          fill
                          loading="lazy"
                          sizes="(max-width: 1024px) 100vw, 42vw"
                          className="object-cover object-center"
                        />
                        <div
                          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1933] via-[#0B1933]/35 to-black/15"
                          aria-hidden="true"
                        />

                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                          <span className="inline-flex items-center gap-1.5 rounded-xl bg-kenenti-yellow px-2.5 py-0.5 sm:px-3 sm:py-1 font-heading text-[10.5px] sm:text-xs font-extrabold text-kenenti-navy shadow-md">
                            <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                            <span>Univers 0{universe.id}</span>
                          </span>

                          <span className="rounded-full bg-[#0F2143]/90 border border-white/20 px-2.5 py-0.5 sm:px-3 sm:py-1 font-heading text-[9.5px] sm:text-xs font-bold text-white backdrop-blur-md">
                            {universe.modeLabel}
                          </span>
                        </div>

                        <div className="absolute bottom-3 left-3.5 right-3.5">
                          <p className="text-[10px] sm:text-xs font-heading font-bold uppercase tracking-wider text-kenenti-yellow">
                            {universe.subtitle}
                          </p>
                          <h3 className="mt-0.5 font-heading text-lg sm:text-2xl font-extrabold text-white leading-tight">
                            {universe.title}
                          </h3>
                        </div>
                      </div>

                      <div className="p-3.5 sm:p-5 space-y-3.5 flex-1 flex flex-col justify-between">
                        <div className="space-y-2.5">
                          <p className="text-[11.5px] sm:text-sm text-white/85 leading-relaxed">
                            {universe.description}
                          </p>

                          {/* Matières traitées */}
                          <div className="space-y-1">
                            <p className="font-heading text-[10px] font-extrabold uppercase tracking-wider text-kenenti-yellow">
                              Matières &amp; Supports pris en charge :
                            </p>
                            <div className="flex flex-wrap gap-1">
                              {details.materials.map((mat) => (
                                <span
                                  key={mat}
                                  className="rounded-lg bg-white/10 border border-white/15 px-2 py-0.5 text-[10px] sm:text-xs font-semibold text-white/90"
                                >
                                  {mat}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Articles pris en charge */}
                          <div className="space-y-1">
                            <p className="font-heading text-[10px] font-extrabold uppercase tracking-wider text-kenenti-yellow">
                              Articles concernés :
                            </p>
                            <ul className="grid grid-cols-2 gap-1 text-[10.5px] sm:text-xs text-white/85">
                              {details.articles.map((art) => (
                                <li key={art} className="flex items-center gap-1.5">
                                  <span className="h-1.5 w-1.5 rounded-full bg-kenenti-yellow shrink-0" />
                                  <span className="truncate">{art}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* CTA Devis Direct de l'univers */}
                        <div className="pt-2.5 border-t border-white/15 grid grid-cols-2 gap-2">
                          <a
                            href={directWhatsappHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-9 sm:h-10 items-center justify-center gap-1.5 rounded-xl bg-kenenti-yellow px-3 font-heading text-[11px] sm:text-xs font-extrabold text-kenenti-navy shadow-md transition-colors hover:bg-[#f2aa40]"
                          >
                            <MessageCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                            <span className="truncate">Devis WhatsApp</span>
                          </a>

                          <a
                            href="#demande-devis"
                            onClick={() => setQuoteUniverse(universe.title)}
                            className="inline-flex h-9 sm:h-10 items-center justify-center gap-1 rounded-xl border border-white/20 bg-white/5 px-3 font-heading text-[11px] sm:text-xs font-bold text-white transition-colors hover:bg-white/15"
                          >
                            <span className="truncate">Joindre mes photos</span>
                            <ChevronRight className="h-3.5 w-3.5 text-kenenti-yellow shrink-0" aria-hidden="true" />
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Colonne Détail des Prestations & Réalisations Réelles (7 col sur Desktop) */}
                    <div className="lg:col-span-7 p-3.5 sm:p-6 flex flex-col justify-between space-y-4">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between gap-2 border-b border-kenenti-navy/10 pb-2.5">
                          <div>
                            <span className="text-[10px] sm:text-xs font-heading font-extrabold uppercase tracking-wider text-[#B86E08]">
                              Savoir-faire d&apos;Atelier
                            </span>
                            <h4 className="font-heading text-sm sm:text-lg font-extrabold text-kenenti-navy">
                              Prestations détaillées — {universe.title}
                            </h4>
                          </div>
                          <span className="inline-flex items-center gap-1 rounded-full bg-kenenti-sand/60 px-2.5 py-0.5 font-heading text-[10px] sm:text-[11px] font-bold text-kenenti-navy shrink-0">
                            4 soins
                          </span>
                        </div>

                        {/* Grille des 4 prestations détaillées */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                          {details.prestations.map((prest, pIdx) => (
                            <div
                              key={prest.title}
                              className="rounded-xl sm:rounded-2xl border border-kenenti-navy/10 bg-[#FAF8F5] p-3 space-y-1 transition-colors hover:border-kenenti-yellow"
                            >
                              <div className="flex items-start gap-2">
                                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0F2143] font-heading text-[10px] font-extrabold text-kenenti-yellow mt-0.5">
                                  {pIdx + 1}
                                </span>
                                <h5 className="font-heading text-xs sm:text-sm font-extrabold text-kenenti-navy leading-snug">
                                  {prest.title}
                                </h5>
                              </div>
                              <p className="text-[11px] sm:text-xs text-kenenti-navy/75 leading-relaxed pl-7">
                                {prest.detail}
                              </p>
                            </div>
                          ))}
                        </div>

                        {/* Galerie d'archives réelles vérifiées — Claire et cliquable avec Lightbox sur Mobile & Web */}
                        {details.realGallery.length > 0 && (
                          <div className="rounded-2xl border border-kenenti-yellow/45 bg-gradient-to-b from-[#FAF6EE] to-white p-3 sm:p-4 space-y-3">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <div className="flex items-center gap-2">
                                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0F2143] text-kenenti-yellow">
                                  <Camera className="h-3.5 w-3.5" aria-hidden="true" />
                                </span>
                                <div>
                                  <p className="font-heading text-xs sm:text-sm font-extrabold text-kenenti-navy leading-tight">
                                    Exemples de réalisations réelles KENENTI
                                  </p>
                                  <p className="text-[10px] sm:text-[11px] text-kenenti-navy/65">
                                    Cliquez sur une photo pour l&apos;agrandir en plein écran
                                  </p>
                                </div>
                              </div>

                              <span className="inline-flex items-center gap-1 rounded-full bg-kenenti-yellow/25 border border-kenenti-yellow/50 px-2.5 py-0.5 font-heading text-[9.5px] sm:text-[10.5px] font-extrabold text-kenenti-navy">
                                <ZoomIn className="h-3 w-3 text-[#B86E08]" aria-hidden="true" />
                                <span>Cliquer pour voir</span>
                              </span>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                              {details.realGallery.map((photo, photoIdx) => (
                                <button
                                  key={photo.src}
                                  type="button"
                                  onClick={() =>
                                    setLightboxState({
                                      photos: details.realGallery,
                                      currentIndex: photoIdx,
                                      universeTitle: universe.title,
                                    })
                                  }
                                  className="group relative flex flex-col overflow-hidden rounded-xl border border-kenenti-navy/15 bg-white text-left shadow-xs transition-all hover:-translate-y-0.5 hover:border-kenenti-yellow hover:shadow-md cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kenenti-yellow"
                                >
                                  <div className="relative h-32 sm:h-36 w-full overflow-hidden bg-[#0B1933]">
                                    <Image
                                      src={photo.src}
                                      alt={photo.caption}
                                      fill
                                      loading="lazy"
                                      sizes="(max-width: 640px) 48vw, 200px"
                                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <span className="absolute top-1.5 left-1.5 rounded-md bg-kenenti-yellow px-1.5 py-0.5 font-heading text-[8.5px] font-extrabold text-kenenti-navy shadow-xs">
                                      {photo.label}
                                    </span>
                                    <span className="absolute bottom-1.5 right-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#0F2143]/90 text-kenenti-yellow shadow-sm transition-transform group-hover:scale-110">
                                      <ZoomIn className="h-3.5 w-3.5" aria-hidden="true" />
                                    </span>
                                  </div>
                                  <div className="p-2 bg-white flex-1 flex items-center">
                                    <p className="text-[10px] sm:text-[11px] font-heading font-bold text-kenenti-navy leading-snug line-clamp-2">
                                      {photo.caption}
                                    </p>
                                  </div>
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Note de prise en charge conforme au cahier des charges */}
                      <div className="rounded-xl bg-[#0F2143]/5 border border-kenenti-navy/10 px-3 py-2 flex items-center gap-2 text-[10.5px] sm:text-xs text-kenenti-navy/85">
                        <span className="flex h-4 w-4 sm:h-5 sm:w-5 shrink-0 items-center justify-center rounded-full bg-kenenti-yellow text-kenenti-navy">
                          <Check className="h-2.5 w-2.5 sm:h-3 sm:w-3 stroke-[3]" aria-hidden="true" />
                        </span>
                        <span>{details.processNote}</span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. DEMANDE DE DEVIS SUR MESURE — Design Studio Chic, Pro & Optimisé Mobile/Web */}
      <section
        id="demande-devis"
        aria-labelledby="devis-heading"
        className="relative overflow-hidden py-7 sm:py-14 lg:py-20 bg-gradient-to-b from-[#081226] via-[#0F2143] to-[#081226] text-white border-t border-kenenti-yellow/35"
      >
        {/* Halos décoratifs subtils */}
        <div
          className="pointer-events-none absolute -top-24 right-1/4 h-72 w-72 rounded-full bg-kenenti-yellow/10 blur-[110px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-0 left-10 h-64 w-64 rounded-full bg-kenenti-yellow/10 blur-[100px]"
          aria-hidden="true"
        />

        <div className="container relative z-10 max-w-6xl">
          {/* En-tête de section centré / aligné chic */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2.5 mb-4 sm:mb-7">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-kenenti-yellow/20 border border-kenenti-yellow/45 px-3 py-0.5 text-[10px] sm:text-xs font-heading font-extrabold uppercase tracking-wider text-kenenti-yellow">
                <SlidersHorizontal className="h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden="true" />
                <span>Conciergerie &amp; Diagnostic Artisan</span>
              </div>
              <h2
                id="devis-heading"
                className="font-heading text-lg sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight"
              >
                Demande de Devis sur Mesure
              </h2>
            </div>
            <p className="text-[11px] sm:text-xs text-white/75 max-w-md">
              Étude manuelle par nos artisans sur photos ou en atelier • Aucun tarif ou
              délai automatique avant examen de votre pièce.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-7 items-start">
            {/* Colonne Gauche (8 col) : Le Formulaire Studio Pro structuré en cadres numérotés */}
            <div className="lg:col-span-8 overflow-hidden rounded-2xl sm:rounded-3xl bg-white text-kenenti-navy shadow-[0_24px_60px_rgba(0,0,0,0.4)] border border-kenenti-yellow/45">
              {/* Bandeau Supérieur du Formulaire */}
              <div className="bg-gradient-to-r from-[#0B1933] via-[#132850] to-[#0B1933] px-4 py-3 sm:px-6 sm:py-4 border-b border-kenenti-yellow/30 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-xl bg-kenenti-yellow text-kenenti-navy shadow-sm">
                    <Sparkles className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-heading text-xs sm:text-sm font-extrabold text-white truncate">
                      Dossier de Diagnostic Personnalisé
                    </p>
                    <p className="text-[10px] sm:text-[11px] text-white/70 truncate">
                      Configurez votre besoin et joignez vos photos en quelques secondes
                    </p>
                  </div>
                </div>

                <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/15 px-3 py-1 font-heading text-[10px] font-bold text-kenenti-yellow shrink-0">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" />
                  <span>Réponse Artisan WhatsApp</span>
                </span>
              </div>

              {/* Corps du Formulaire divisé en Cadres Professionnels */}
              <div className="p-3 sm:p-5 lg:p-6 space-y-3 sm:space-y-4 bg-[#FAF8F5]/60">
                {/* CADRE 01 : Sélection visuelle de l'Univers (5 colonnes sur Mobile & Web) */}
                <div className="rounded-2xl border border-kenenti-navy/12 bg-white p-3 sm:p-4 shadow-[0_2px_12px_rgba(15,33,67,0.04)] space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-lg bg-[#0F2143] font-heading text-[10px] sm:text-xs font-extrabold text-kenenti-yellow">
                        01
                      </span>
                      <span className="font-heading text-xs sm:text-sm font-extrabold text-kenenti-navy">
                        Catégorie de votre article
                      </span>
                    </div>
                    <span className="text-[10px] sm:text-xs font-heading font-bold text-[#B86E08] truncate">
                      {quoteUniverse}
                    </span>
                  </div>

                  <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
                    {FIVE_UNIVERSES.map((u) => {
                      const active = quoteUniverse === u.title;
                      const detailObj =
                        DETAILED_UNIVERSES.find((d) => d.id === u.id) ??
                        DETAILED_UNIVERSES[0];
                      const Icon = detailObj.icon;

                      return (
                        <button
                          key={`q-univ-${u.id}`}
                          type="button"
                          onClick={() => setQuoteUniverse(u.title)}
                          className={cn(
                            "group relative flex flex-col items-center justify-center gap-1 sm:gap-1.5 rounded-xl border p-2 sm:p-2.5 text-center transition-all cursor-pointer",
                            active
                              ? "bg-[#0F2143] text-white border-kenenti-yellow shadow-[0_6px_16px_rgba(15,33,67,0.2)] -translate-y-0.5"
                              : "bg-[#FAF8F5] text-kenenti-navy border-kenenti-navy/12 hover:border-kenenti-yellow hover:bg-white"
                          )}
                        >
                          <div
                            className={cn(
                              "flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-lg transition-colors",
                              active
                                ? "bg-kenenti-yellow text-kenenti-navy"
                                : "bg-white text-kenenti-navy border border-kenenti-navy/10 group-hover:border-kenenti-yellow"
                            )}
                          >
                            <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
                          </div>
                          <span
                            className={cn(
                              "font-heading text-[9px] sm:text-[11px] font-extrabold leading-tight line-clamp-1 w-full",
                              active ? "text-kenenti-yellow" : "text-kenenti-navy"
                            )}
                          >
                            {u.shortTitle.split(" ")[0]}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* CADRES 02 & 03 CÔTE À CÔTE : Prestation souhaitée + Mode de prise en charge */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  {/* CADRE 02 : Prestation souhaitée */}
                  <div className="rounded-2xl border border-kenenti-navy/12 bg-white p-3 sm:p-4 shadow-[0_2px_12px_rgba(15,33,67,0.04)] space-y-2.5">
                    <div className="flex items-center gap-2">
                      <span className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-lg bg-[#0F2143] font-heading text-[10px] sm:text-xs font-extrabold text-kenenti-yellow">
                        02
                      </span>
                      <span className="font-heading text-xs sm:text-sm font-extrabold text-kenenti-navy">
                        Prestation recherchée
                      </span>
                    </div>

                    <div className="grid grid-cols-1 gap-1.5">
                      {CARE_TYPES.map((care) => {
                        const active = quoteCare === care;
                        return (
                          <button
                            key={care}
                            type="button"
                            onClick={() => setQuoteCare(care)}
                            className={cn(
                              "flex items-center justify-between gap-2 rounded-xl border px-3 py-2 text-left font-heading text-[11px] sm:text-xs font-bold transition-all cursor-pointer",
                              active
                                ? "bg-[#0F2143] text-white border-[#0F2143] shadow-xs"
                                : "bg-[#FAF8F5] text-kenenti-navy/85 border-kenenti-navy/12 hover:border-kenenti-yellow hover:bg-white"
                            )}
                          >
                            <span className="truncate">{care}</span>
                            <span
                              className={cn(
                                "flex h-4 w-4 shrink-0 items-center justify-center rounded-full border",
                                active
                                  ? "bg-kenenti-yellow border-kenenti-yellow text-kenenti-navy"
                                  : "border-kenenti-navy/25 bg-white"
                              )}
                            >
                              {active && <Check className="h-2.5 w-2.5 stroke-[3]" />}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* CADRE 03 : Mode de prise en charge */}
                  <div className="rounded-2xl border border-kenenti-navy/12 bg-white p-3 sm:p-4 shadow-[0_2px_12px_rgba(15,33,67,0.04)] flex flex-col justify-between space-y-2.5">
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-2">
                        <span className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-lg bg-[#0F2143] font-heading text-[10px] sm:text-xs font-extrabold text-kenenti-yellow">
                          03
                        </span>
                        <span className="font-heading text-xs sm:text-sm font-extrabold text-kenenti-navy">
                          Mode de prise en charge
                        </span>
                      </div>

                      <div className="grid grid-cols-1 gap-1.5">
                        {LOGISTICS_MODES.map((mode) => {
                          const active = quoteMode === mode;
                          const isCollecte = mode.includes("Collecte");
                          return (
                            <button
                              key={mode}
                              type="button"
                              onClick={() => setQuoteMode(mode)}
                              className={cn(
                                "flex items-center justify-between gap-2 rounded-xl border px-3 py-2 text-left font-heading text-[11px] sm:text-xs font-bold transition-all cursor-pointer",
                                active
                                  ? "bg-kenenti-yellow/25 text-kenenti-navy border-kenenti-yellow font-extrabold shadow-xs"
                                  : "bg-[#FAF8F5] text-kenenti-navy/85 border-kenenti-navy/12 hover:border-kenenti-yellow hover:bg-white"
                              )}
                            >
                              <div className="flex items-center gap-2 min-w-0">
                                {isCollecte ? (
                                  <Truck
                                    className="h-3.5 w-3.5 shrink-0 text-[#B86E08]"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <MapPin
                                    className="h-3.5 w-3.5 shrink-0 text-[#0F2143]"
                                    aria-hidden="true"
                                  />
                                )}
                                <span className="truncate">{mode}</span>
                              </div>
                              <span
                                className={cn(
                                  "flex h-4 w-4 shrink-0 items-center justify-center rounded-full border",
                                  active
                                    ? "bg-[#0F2143] border-[#0F2143] text-kenenti-yellow"
                                    : "border-kenenti-navy/25 bg-white"
                                )}
                              >
                                {active && <Check className="h-2.5 w-2.5 stroke-[3]" />}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="rounded-xl bg-[#FAF8F5] border border-kenenti-navy/10 px-2.5 py-1.5 text-[10px] text-kenenti-navy/70 flex items-center justify-between">
                      <span>Règlement des prestations :</span>
                      <strong className="font-heading text-kenenti-navy">
                        Paiement à la livraison (COD)
                      </strong>
                    </div>
                  </div>
                </div>

                {/* CADRE 04 : Studio Photos du Produit (4 emplacements Pro Mobile & Web) + Précisions */}
                <div className="rounded-2xl border border-kenenti-navy/12 bg-white p-3 sm:p-4 shadow-[0_2px_12px_rgba(15,33,67,0.04)] space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-lg bg-[#0F2143] font-heading text-[10px] sm:text-xs font-extrabold text-kenenti-yellow">
                        04
                      </span>
                      <div>
                        <label
                          htmlFor="client-media-upload"
                          className="block font-heading text-xs sm:text-sm font-extrabold text-kenenti-navy cursor-pointer"
                        >
                          Photos de votre article &amp; Précisions
                        </label>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-[#0F2143]/8 px-2.5 py-0.5 font-heading text-[10px] font-extrabold text-kenenti-navy">
                        {uploadedPhotos.length} / 4 photos
                      </span>
                      {uploadedPhotos.length < 4 && (
                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          className="inline-flex items-center gap-1 rounded-full bg-kenenti-yellow px-2.5 py-0.5 font-heading text-[10px] font-extrabold text-kenenti-navy shadow-2xs hover:bg-[#f2aa40] cursor-pointer"
                        >
                          <ImagePlus className="h-3 w-3" aria-hidden="true" />
                          <span>Ajouter</span>
                        </button>
                      )}
                    </div>
                  </div>

                  <input
                    ref={fileInputRef}
                    id="client-media-upload"
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleFilesSelected}
                    className="sr-only"
                  />

                  {/* Les 4 cadres d'emplacements photos professionnels (Vue 01 à Vue 04) */}
                  <div className="grid grid-cols-4 gap-2 sm:gap-3">
                    {[0, 1, 2, 3].map((slotIdx) => {
                      const item = uploadedPhotos[slotIdx];
                      const slotLabels = ["Vue d'ensemble", "Profil / Côté", "Zone à traiter", "Détail / Signature"];

                      if (item) {
                        return (
                          <div
                            key={item.id}
                            className="group relative h-20 sm:h-24 overflow-hidden rounded-xl border-2 border-kenenti-yellow bg-[#0B1933] shadow-xs"
                          >
                            <img
                              src={item.url}
                              alt={`Photo produit ${slotIdx + 1}`}
                              className="h-full w-full object-cover"
                            />
                            <span className="absolute bottom-1 left-1 rounded bg-[#0F2143]/85 px-1.5 py-0.5 font-heading text-[8px] font-bold text-white">
                              0{slotIdx + 1}
                            </span>
                            <button
                              type="button"
                              onClick={() => handleRemovePhoto(item.id)}
                              aria-label={`Supprimer la photo ${slotIdx + 1}`}
                              className="absolute top-1 right-1 flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-kenenti-red text-white shadow-sm hover:opacity-90 cursor-pointer"
                            >
                              <Trash2 className="h-3 w-3" aria-hidden="true" />
                            </button>
                          </div>
                        );
                      }

                      return (
                        <button
                          key={`empty-slot-${slotIdx}`}
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          className="group flex h-20 sm:h-24 flex-col items-center justify-center gap-1 rounded-xl border border-dashed border-kenenti-navy/25 bg-[#FAF8F5] p-1.5 text-center transition-all hover:border-kenenti-yellow hover:bg-kenenti-yellow/10 cursor-pointer"
                        >
                          <span className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-lg bg-white border border-kenenti-navy/10 text-[#B86E08] shadow-2xs group-hover:bg-[#0F2143] group-hover:text-kenenti-yellow transition-colors">
                            <Camera className="h-3.5 w-3.5" aria-hidden="true" />
                          </span>
                          <span className="font-heading text-[8.5px] sm:text-[10px] font-extrabold text-kenenti-navy leading-tight line-clamp-1">
                            0{slotIdx + 1}. {slotLabels[slotIdx]}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Champ de précisions intégré au cadre 04 */}
                  <div className="pt-1">
                    <input
                      id="quote-details-input"
                      type="text"
                      value={quoteDetails}
                      onChange={(e) => setQuoteDetails(e.target.value)}
                      placeholder="Précisions facultatives : marque, matière (cuir, daim...), couleur ou tache à signaler..."
                      className="w-full h-9 sm:h-10 rounded-xl border border-kenenti-navy/15 bg-[#FAF8F5] px-3.5 text-[11px] sm:text-xs font-medium text-kenenti-navy placeholder:text-kenenti-navy/45 focus:border-kenenti-yellow focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* PIED DE FORMULAIRE PRO : Récapitulatif & Envoi WhatsApp */}
                <div className="rounded-2xl bg-gradient-to-r from-[#0B1933] via-[#132850] to-[#0B1933] p-3.5 sm:p-4 text-white space-y-3 shadow-md">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] sm:text-xs">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-white/65">Votre sélection :</span>
                      <span className="rounded-md bg-white/10 px-2 py-0.5 font-heading font-bold text-kenenti-yellow">
                        {quoteUniverse}
                      </span>
                      <span className="text-white/35">•</span>
                      <span className="rounded-md bg-white/10 px-2 py-0.5 font-heading font-semibold text-white">
                        {quoteCare}
                      </span>
                    </div>
                    {uploadedPhotos.length > 0 && (
                      <span className="inline-flex items-center gap-1 text-kenenti-yellow font-heading font-bold">
                        <Check className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>{uploadedPhotos.length} photo(s) prête(s)</span>
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-2">
                    <a
                      href={composedWhatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "flex h-10 sm:h-11 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 font-heading text-xs sm:text-sm font-extrabold text-white shadow-md transition-transform active:scale-[0.99] hover:bg-[#20bd5a]",
                        uploadedPhotos.length > 0 ? "sm:col-span-8" : "sm:col-span-12"
                      )}
                    >
                      <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <span>Envoyer ma demande sur WhatsApp</span>
                    </a>

                    {uploadedPhotos.length > 0 && (
                      <button
                        type="button"
                        onClick={handleShareWithFiles}
                        className="sm:col-span-4 flex h-10 sm:h-11 items-center justify-center gap-1.5 rounded-xl bg-kenenti-yellow px-3 font-heading text-[11px] sm:text-xs font-extrabold text-kenenti-navy shadow-sm transition-colors hover:bg-[#f2aa40] cursor-pointer"
                      >
                        <Share2 className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        <span>Partager photos</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Colonne Droite (4 col) : Étapes du Diagnostic & Nos 2 Ateliers */}
            <aside className="lg:col-span-4 space-y-3.5 sm:space-y-4">
              {/* Carte Parcours en 3 étapes */}
              <div className="rounded-2xl sm:rounded-3xl bg-white/[0.07] border border-white/15 p-4 sm:p-5 backdrop-blur-md space-y-3.5">
                <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-2.5">
                  <h3 className="font-heading text-sm sm:text-base font-extrabold text-white">
                    Parcours de votre Devis
                  </h3>
                  <span className="rounded-full bg-kenenti-yellow/20 border border-kenenti-yellow/40 px-2 py-0.5 font-heading text-[9.5px] font-extrabold text-kenenti-yellow">
                    3 Étapes
                  </span>
                </div>

                <ol className="grid grid-cols-3 lg:grid-cols-1 gap-2 sm:gap-3 text-[10px] sm:text-xs text-white/85">
                  <li className="flex flex-col lg:flex-row items-start gap-1.5 sm:gap-3 rounded-xl bg-white/5 p-2.5 sm:p-3 border border-white/10">
                    <span className="flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-lg bg-kenenti-yellow font-heading text-[10px] sm:text-xs font-extrabold text-kenenti-navy">
                      01
                    </span>
                    <div>
                      <strong className="font-heading text-white block leading-tight">
                        Photos ou Atelier
                      </strong>
                      <span className="text-white/75 leading-snug block mt-0.5">
                        Envoi sur WhatsApp ({KENENTI_BRAND.whatsappGeneralDisplay}) ou
                        dépôt en atelier.
                      </span>
                    </div>
                  </li>
                  <li className="flex flex-col lg:flex-row items-start gap-1.5 sm:gap-3 rounded-xl bg-white/5 p-2.5 sm:p-3 border border-white/10">
                    <span className="flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-lg bg-kenenti-yellow font-heading text-[10px] sm:text-xs font-extrabold text-kenenti-navy">
                      02
                    </span>
                    <div>
                      <strong className="font-heading text-white block leading-tight">
                        Diagnostic Manuel
                      </strong>
                      <span className="text-white/75 leading-snug block mt-0.5">
                        Examen artisanal de la matière, du soin adapté, du tarif et du délai.
                      </span>
                    </div>
                  </li>
                  <li className="flex flex-col lg:flex-row items-start gap-1.5 sm:gap-3 rounded-xl bg-white/5 p-2.5 sm:p-3 border border-white/10">
                    <span className="flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-lg bg-kenenti-yellow font-heading text-[10px] sm:text-xs font-extrabold text-kenenti-navy">
                      03
                    </span>
                    <div>
                      <strong className="font-heading text-white block leading-tight">
                        Collecte &amp; Retour
                      </strong>
                      <span className="text-white/75 leading-snug block mt-0.5">
                        Service « {KENENTI_BRAND.slogan} » à domicile et paiement COD.
                      </span>
                    </div>
                  </li>
                </ol>
              </div>

              {/* Carte Nos 2 Ateliers : Côte à côte sur mobile et empilés/grille propre */}
              <div className="rounded-2xl sm:rounded-3xl bg-white/[0.07] border border-white/15 p-4 sm:p-5 backdrop-blur-md space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-xs sm:text-sm font-extrabold text-kenenti-yellow uppercase tracking-wider">
                    Nos 2 Ateliers en Tunisie
                  </h3>
                  <Link
                    href="/#notre-atelier"
                    className="inline-flex items-center gap-1 text-[11px] font-heading font-bold text-white/85 hover:text-kenenti-yellow"
                  >
                    <span>Voir l&apos;atelier</span>
                    <ArrowRight className="h-3 w-3" aria-hidden="true" />
                  </Link>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-1 gap-2.5">
                  {WORKSHOPS.map((w, idx) => (
                    <div
                      key={w.id}
                      className="rounded-xl bg-[#09152E]/90 border border-white/15 p-3 space-y-1.5 transition-colors hover:border-kenenti-yellow/50"
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
                          Google Maps
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

      {/* LIGHTBOX PLEIN ÉCRAN POUR VOIR LES PHOTOS DE RÉALISATIONS RÉELLES */}
      {lightboxState && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Réalisation réelle KENENTI — ${lightboxState.universeTitle}`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-6"
          onClick={() => setLightboxState(null)}
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-2xl sm:rounded-3xl border border-white/20 bg-[#0B1933] text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Barre supérieure Lightbox */}
            <div className="flex items-center justify-between gap-3 border-b border-white/15 px-4 py-3">
              <div className="min-w-0">
                <span className="inline-block rounded bg-kenenti-yellow px-2 py-0.5 font-heading text-[10px] font-extrabold text-kenenti-navy">
                  {lightboxState.photos[lightboxState.currentIndex]?.label} •{" "}
                  {lightboxState.currentIndex + 1} / {lightboxState.photos.length}
                </span>
                <p className="mt-1 font-heading text-xs sm:text-base font-extrabold text-white truncate">
                  {lightboxState.photos[lightboxState.currentIndex]?.caption}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setLightboxState(null)}
                aria-label="Fermer l'aperçu photo"
                className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white hover:bg-kenenti-yellow hover:text-kenenti-navy transition-colors cursor-pointer"
              >
                <X className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
              </button>
            </div>

            {/* Image grand format */}
            <div className="relative h-[320px] sm:h-[460px] w-full bg-black">
              <Image
                src={lightboxState.photos[lightboxState.currentIndex]?.src ?? ""}
                alt={lightboxState.photos[lightboxState.currentIndex]?.caption ?? ""}
                fill
                sizes="(max-width: 768px) 95vw, 768px"
                className="object-contain"
              />

              {/* Flèches Précédent / Suivant */}
              {lightboxState.photos.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxState((prev) =>
                        prev
                          ? {
                              ...prev,
                              currentIndex:
                                (prev.currentIndex - 1 + prev.photos.length) %
                                prev.photos.length,
                            }
                          : null
                      )
                    }
                    aria-label="Photo précédente"
                    className="absolute left-2.5 top-1/2 -translate-y-1/2 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#0F2143]/85 border border-white/25 text-white hover:bg-kenenti-yellow hover:text-kenenti-navy transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxState((prev) =>
                        prev
                          ? {
                              ...prev,
                              currentIndex:
                                (prev.currentIndex + 1) % prev.photos.length,
                            }
                          : null
                      )
                    }
                    aria-label="Photo suivante"
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#0F2143]/85 border border-white/25 text-white hover:bg-kenenti-yellow hover:text-kenenti-navy transition-colors cursor-pointer"
                  >
                    <ChevronRight className="h-5 w-5" aria-hidden="true" />
                  </button>
                </>
              )}
            </div>

            {/* Miniatures de navigation rapide */}
            <div className="flex items-center justify-between gap-2 border-t border-white/15 px-4 py-2.5 bg-[#09152E]">
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
                {lightboxState.photos.map((thumb, idx) => (
                  <button
                    key={thumb.src}
                    type="button"
                    onClick={() =>
                      setLightboxState((prev) =>
                        prev ? { ...prev, currentIndex: idx } : null
                      )
                    }
                    className={cn(
                      "relative h-10 w-14 shrink-0 overflow-hidden rounded-lg border-2 transition-all cursor-pointer",
                      lightboxState.currentIndex === idx
                        ? "border-kenenti-yellow scale-105"
                        : "border-transparent opacity-60 hover:opacity-100"
                    )}
                  >
                    <Image
                      src={thumb.src}
                      alt={thumb.caption}
                      fill
                      sizes="60px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>

              <a
                href={`https://wa.me/${KENENTI_BRAND.whatsappGeneralNumber}?text=${encodeURIComponent(
                  `Bonjour KENENTI, j'ai vu votre réalisation "${lightboxState.photos[lightboxState.currentIndex]?.caption}" et je souhaite un devis similaire.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-8 sm:h-9 shrink-0 items-center gap-1.5 rounded-xl bg-kenenti-yellow px-3 font-heading text-[10.5px] sm:text-xs font-extrabold text-kenenti-navy"
              >
                <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Devis similaire</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
