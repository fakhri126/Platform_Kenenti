"use client";

import * as React from "react";
<<<<<<< HEAD
import {
  HelpCircle,
  ChevronsUpDown,
  MessageCircle,
  Sparkles,
  Camera,
  Layers,
  Banknote,
  MapPin,
  Clock,
  Plus,
  Minus,
  Phone,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
=======
import { ChevronsUpDown, MessageCircle } from "lucide-react";
>>>>>>> 618d79988cf4c51ba91292fb955ec3f3f2a99e1b
import { FAQ_ITEMS, KENENTI_BRAND } from "@/lib/kenenti-data";
import { cn } from "@/lib/utils";

const FAQ_ENRICHED_META: Record<
  string,
  {
    shortTag: string;
    badge: string;
    icon: React.ComponentType<{ className?: string }>;
    highlights: string[];
    actionLabel?: string;
    actionHref?: string;
  }
> = {
  "faq-devis": {
    shortTag: "Devis",
    badge: "Étude sur photos",
    icon: Camera,
    highlights: ["2 à 4 photos WhatsApp", "Ou dépôt en atelier", "Diagnostic artisanal"],
    actionLabel: "Envoyer mes photos sur WhatsApp",
    actionHref: KENENTI_BRAND.whatsappGeneralUrl,
  },
  "faq-univers": {
    shortTag: "5 Univers",
    badge: "Savoir-faire complet",
    icon: Layers,
    highlights: [
      "Sneakers & Chaussures",
      "Maroquinerie",
      "Vêtements Cuir",
      "Mobilier",
      "Auto",
    ],
    actionLabel: "Explorer nos 5 univers",
    actionHref: "#nos-5-univers",
  },
  "faq-paiement-boutique": {
    shortTag: "Paiement",
    badge: "100% à la livraison",
    icon: Banknote,
    highlights: [
      "Cash on Delivery (COD)",
      "Aucune carte bancaire requise",
      "Sans création de compte",
    ],
    actionLabel: "Découvrir la boutique",
    actionHref: "#notre-boutique",
  },
  "faq-ateliers": {
    shortTag: "Ateliers",
    badge: "2 adresses à Tunis",
    icon: MapPin,
    highlights: [
      "La Goulette : 29 286 445",
      "Menzah 6 : 28 877 074",
      "Collecte & retour à domicile",
    ],
    actionLabel: "Voir nos ateliers",
    actionHref: "#notre-atelier",
  },
  "faq-delais-tarifs": {
    shortTag: "Tarifs & Délais",
    badge: "Sur-mesure",
    icon: Clock,
    highlights: [
      "Évaluation selon matière & usure",
      "Validation avant intervention",
      "Zéro mauvaise surprise",
    ],
    actionLabel: "Demander une estimation",
    actionHref: KENENTI_BRAND.whatsappGeneralUrl,
  },
};

export function FaqSection() {
<<<<<<< HEAD
  const [openIds, setOpenIds] = React.useState<string[]>([FAQ_ITEMS[0]?.id ?? "faq-devis"]);
  const [selectedFilter, setSelectedFilter] = React.useState<string>("all");

  const allExpanded = openIds.length === FAQ_ITEMS.length;

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleToggleAll = () => {
    if (allExpanded) {
      setOpenIds([]);
    } else {
      setOpenIds(FAQ_ITEMS.map((item) => item.id));
    }
    setSelectedFilter("all");
=======
  const listRef = React.useRef<HTMLDivElement>(null);
  const [allExpanded, setAllExpanded] = React.useState(false);

  const handleToggleAll = () => {
    const nextState = !allExpanded;
    listRef.current?.querySelectorAll("details").forEach((el) => {
      el.open = nextState;
    });
    setAllExpanded(nextState);
>>>>>>> 618d79988cf4c51ba91292fb955ec3f3f2a99e1b
  };

  const handleSelectChip = (id: string) => {
    if (selectedFilter === id) {
      setSelectedFilter("all");
      return;
    }
    setSelectedFilter(id);
    setOpenIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  const visibleItems =
    selectedFilter === "all"
      ? FAQ_ITEMS
      : FAQ_ITEMS.filter((item) => item.id === selectedFilter);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
<<<<<<< HEAD
      className="relative overflow-hidden bg-gradient-to-b from-white via-[#FAF8F5] to-[#F3EFE8] py-7 sm:py-14 lg:py-20"
    >
      {/* Décor lumineux subtil */}
      <div
        className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-kenenti-yellow/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 -left-20 h-64 w-64 rounded-full bg-kenenti-navy/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="container relative max-w-6xl">
        {/* En-tête Chic & Mobile-First */}
        <div className="flex items-end justify-between gap-3 mb-4 sm:mb-7">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#0F2143] px-2.5 py-0.5 sm:px-3.5 sm:py-1 text-[10px] sm:text-xs font-heading font-extrabold uppercase tracking-wider text-kenenti-yellow shadow-sm">
              <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden="true" />
              <span>Centre d&apos;Aide &amp; Réponses</span>
            </div>
=======
      className="kenenti-accordion bg-white py-6 sm:py-12 lg:py-16"
    >
      <div className="container max-w-4xl">
        {/* En-tête Mobile-First */}
        <div className="flex items-end justify-between gap-3 mb-4 sm:mb-7">
          <div>
            <p className="text-[10px] sm:text-xs font-heading font-bold uppercase tracking-widest text-[#D98A1C] mb-0.5">
              FAQ
            </p>
>>>>>>> 618d79988cf4c51ba91292fb955ec3f3f2a99e1b
            <h2
              id="faq-heading"
              className="text-lg sm:text-2xl lg:text-3xl font-heading font-extrabold text-kenenti-navy tracking-tight"
            >
              Questions Fréquentes
            </h2>
          </div>

          <button
            type="button"
            aria-expanded={allExpanded}
            onClick={handleToggleAll}
<<<<<<< HEAD
            className="inline-flex items-center gap-1.5 shrink-0 rounded-full border border-kenenti-navy/15 bg-white px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-heading font-extrabold text-kenenti-navy shadow-sm transition-all hover:border-kenenti-yellow hover:bg-[#0F2143] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kenenti-yellow cursor-pointer"
=======
            className="inline-flex items-center gap-1.5 shrink-0 rounded-xl border border-kenenti-navy/10 bg-[#FAF8F5] px-3 py-1.5 sm:px-3.5 sm:py-2 text-[11px] sm:text-xs font-heading font-bold text-kenenti-navy transition-colors hover:bg-kenenti-sand/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kenenti-yellow cursor-pointer"
>>>>>>> 618d79988cf4c51ba91292fb955ec3f3f2a99e1b
          >
            <ChevronsUpDown className="h-3.5 w-3.5 text-[#D98A1C]" aria-hidden="true" />
            <span>{allExpanded ? "Tout replier" : "Tout déplier"}</span>
          </button>
        </div>

<<<<<<< HEAD
        {/* Barre de filtres rapides Mobile & Tablette (Pills tactiles horizontales) */}
        <div
          role="tablist"
          aria-label="Filtrer les questions par thème"
          className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar pb-2 mb-4 sm:mb-6 -mx-1 px-1"
        >
          <button
            type="button"
            role="tab"
            aria-selected={selectedFilter === "all"}
            onClick={() => setSelectedFilter("all")}
            className={cn(
              "inline-flex items-center gap-1.5 shrink-0 rounded-full px-3 py-1.5 font-heading text-[11px] sm:text-xs font-extrabold transition-all border cursor-pointer",
              selectedFilter === "all"
                ? "bg-[#0F2143] text-kenenti-yellow border-[#0F2143] shadow-sm"
                : "bg-white text-kenenti-navy/80 border-kenenti-navy/15 hover:border-kenenti-navy/35"
            )}
          >
            <HelpCircle className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Toutes ({FAQ_ITEMS.length})</span>
          </button>
=======
        {/* Accordéon natif <details> / <summary> sans balise de titre dans <summary> */}
        <div ref={listRef} className="space-y-2.5 sm:space-y-3.5">
          {FAQ_ITEMS.map((item, index) => (
            <details key={item.id} open={index === 0}>
              <summary className="text-xs sm:text-base leading-snug">
                <span className="flex-1">{item.question}</span>
              </summary>
>>>>>>> 618d79988cf4c51ba91292fb955ec3f3f2a99e1b

          {FAQ_ITEMS.map((item, idx) => {
            const meta = FAQ_ENRICHED_META[item.id];
            const Icon = meta?.icon ?? HelpCircle;
            const isSelected = selectedFilter === item.id;

            return (
              <button
                key={`chip-${item.id}`}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => handleSelectChip(item.id)}
                className={cn(
                  "inline-flex items-center gap-1.5 shrink-0 rounded-full px-3 py-1.5 font-heading text-[11px] sm:text-xs font-bold transition-all border cursor-pointer",
                  isSelected
                    ? "bg-kenenti-yellow text-kenenti-navy border-kenenti-yellow font-extrabold shadow-sm"
                    : "bg-white text-kenenti-navy/80 border-kenenti-navy/15 hover:border-kenenti-yellow"
                )}
              >
                <Icon className="h-3.5 w-3.5 text-[#D98A1C]" aria-hidden="true" />
                <span>
                  0{idx + 1}. {meta?.shortTag ?? `Question ${idx + 1}`}
                </span>
              </button>
            );
          })}
        </div>

        {/* Grille Principale : Accordéon Moderne + Carte Assistance Interactive */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-start">
          {/* Colonne Questions (8 col sur Desktop, Pleine largeur optimisée sur Mobile) */}
          <div className="lg:col-span-8 space-y-2.5 sm:space-y-3">
            {visibleItems.map((item) => {
              const originalIndex = FAQ_ITEMS.findIndex((f) => f.id === item.id);
              const isOpen = openIds.includes(item.id);
              const meta = FAQ_ENRICHED_META[item.id];
              const Icon = meta?.icon ?? HelpCircle;
              const isExternalAction = meta?.actionHref?.startsWith("http");

              return (
                <article
                  key={item.id}
                  className={cn(
                    "group overflow-hidden rounded-2xl border transition-all duration-300",
                    isOpen
                      ? "bg-white border-kenenti-yellow shadow-[0_12px_30px_-10px_rgba(15,33,67,0.14)] ring-1 ring-kenenti-yellow/40"
                      : "bg-white/90 border-kenenti-navy/12 shadow-sm hover:border-kenenti-navy/30 hover:bg-white"
                  )}
                >
                  {/* En-tête de question cliquable */}
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => toggleItem(item.id)}
                    className="flex w-full items-start sm:items-center justify-between gap-3 p-3.5 sm:p-5 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kenenti-yellow"
                  >
                    <div className="flex items-start sm:items-center gap-2.5 sm:gap-3.5 min-w-0 flex-1">
                      {/* Badge icône + numéro */}
                      <div
                        className={cn(
                          "relative flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl transition-colors",
                          isOpen
                            ? "bg-[#0F2143] text-kenenti-yellow shadow-sm"
                            : "bg-[#F4F1EA] text-kenenti-navy group-hover:bg-[#0F2143]/10"
                        )}
                      >
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                        <span
                          className={cn(
                            "absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full font-heading text-[8.5px] font-extrabold shadow-xs",
                            isOpen
                              ? "bg-kenenti-yellow text-kenenti-navy"
                              : "bg-[#0F2143] text-white"
                          )}
                        >
                          {originalIndex + 1}
                        </span>
                      </div>

                      {/* Tag + Question */}
                      <div className="space-y-0.5 min-w-0 flex-1">
                        {meta && (
                          <div className="flex items-center gap-1.5">
                            <span className="font-heading text-[9.5px] sm:text-[10.5px] font-extrabold uppercase tracking-wider text-[#B86E08]">
                              {meta.shortTag}
                            </span>
                            <span className="text-kenenti-navy/25">•</span>
                            <span className="text-[9.5px] sm:text-[10.5px] font-medium text-kenenti-navy/60">
                              {meta.badge}
                            </span>
                          </div>
                        )}
                        <h3 className="font-heading text-xs sm:text-base font-extrabold text-kenenti-navy leading-snug">
                          {item.question}
                        </h3>
                      </div>
                    </div>

                    {/* Bouton + / - moderne */}
                    <span
                      className={cn(
                        "mt-0.5 sm:mt-0 flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                        isOpen
                          ? "bg-kenenti-yellow border-kenenti-yellow text-kenenti-navy rotate-180"
                          : "bg-white border-kenenti-navy/15 text-kenenti-navy group-hover:border-kenenti-navy"
                      )}
                      aria-hidden="true"
                    >
                      {isOpen ? (
                        <Minus className="h-3.5 w-3.5 stroke-[2.5]" />
                      ) : (
                        <Plus className="h-3.5 w-3.5 stroke-[2.5]" />
                      )}
                    </span>
                  </button>

                  {/* Contenu déplié avec points clés & action rapide */}
                  {isOpen && (
                    <div className="px-3.5 pb-4 sm:px-5 sm:pb-5 pt-1 border-t border-kenenti-navy/10 bg-gradient-to-b from-[#FAF8F5]/60 to-white space-y-3">
                      <p className="pt-2 text-xs sm:text-sm text-kenenti-navy/85 leading-relaxed">
                        {item.answer}
                      </p>

                      {meta && (
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pt-1">
                          {/* Points clés en puces compactes */}
                          <div className="flex flex-wrap items-center gap-1.5">
                            {meta.highlights.map((tag) => (
                              <span
                                key={tag}
                                className="inline-flex items-center gap-1 rounded-lg bg-[#0F2143]/5 border border-kenenti-navy/10 px-2 py-0.5 text-[10px] sm:text-[11px] font-semibold text-kenenti-navy"
                              >
                                <CheckCircle2
                                  className="h-3 w-3 text-[#B86E08] shrink-0"
                                  aria-hidden="true"
                                />
                                <span>{tag}</span>
                              </span>
                            ))}
                          </div>

                          {/* Lien d'action contextuel */}
                          {meta.actionLabel && meta.actionHref && (
                            <a
                              href={meta.actionHref}
                              target={isExternalAction ? "_blank" : undefined}
                              rel={isExternalAction ? "noopener noreferrer" : undefined}
                              className="inline-flex items-center justify-center gap-1 self-start sm:self-auto shrink-0 rounded-xl bg-[#0F2143] px-3 py-1.5 font-heading text-[10.5px] sm:text-xs font-extrabold text-kenenti-yellow shadow-xs transition-colors hover:bg-kenenti-yellow hover:text-kenenti-navy"
                            >
                              <span>{meta.actionLabel}</span>
                              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </article>
              );
            })}
          </div>

          {/* Colonne Assistance Directe (4 col sur Desktop, Bandeau Bento Chic sur Mobile) */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#0B1933] via-[#0F2143] to-[#1A3263] p-4 sm:p-6 text-white shadow-[0_14px_34px_-12px_rgba(15,33,67,0.45)] border border-kenenti-yellow/35">
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-kenenti-yellow/20 blur-2xl"
                aria-hidden="true"
              />

              <div className="relative space-y-3.5 sm:space-y-4">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-kenenti-yellow/20 border border-kenenti-yellow/40 px-2.5 py-0.5 font-heading text-[10px] sm:text-xs font-extrabold text-kenenti-yellow">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#25D366] animate-pulse" />
                  <span>Réponse Artisanale Rapide</span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-heading text-sm sm:text-lg font-extrabold text-white leading-snug">
                    Une question spécifique sur l&apos;un de vos articles ?
                  </h3>
                  <p className="text-[11px] sm:text-xs text-white/80 leading-relaxed">
                    Envoyez 2 à 4 photos sur WhatsApp : nos artisans examinent votre pièce
                    et vous répondent avec un diagnostic personnalisé.
                  </p>
                </div>

                {/* Grille 2 colonnes ultra-compacte des 2 ateliers sur mobile & desktop */}
                <div className="grid grid-cols-2 gap-2 pt-0.5">
                  <a
                    href="tel:+21629286445"
                    className="flex flex-col rounded-xl bg-white/10 border border-white/15 p-2.5 transition-colors hover:border-kenenti-yellow"
                  >
                    <span className="text-[9.5px] font-heading font-bold uppercase tracking-wider text-kenenti-yellow">
                      La Goulette
                    </span>
                    <span className="mt-0.5 flex items-center gap-1 font-heading text-[11px] sm:text-xs font-extrabold text-white">
                      <Phone className="h-3 w-3 text-kenenti-yellow shrink-0" aria-hidden="true" />
                      <span>29 286 445</span>
                    </span>
                  </a>

                  <a
                    href="tel:+21628877074"
                    className="flex flex-col rounded-xl bg-white/10 border border-white/15 p-2.5 transition-colors hover:border-kenenti-yellow"
                  >
                    <span className="text-[9.5px] font-heading font-bold uppercase tracking-wider text-kenenti-yellow">
                      Menzah 6
                    </span>
                    <span className="mt-0.5 flex items-center gap-1 font-heading text-[11px] sm:text-xs font-extrabold text-white">
                      <Phone className="h-3 w-3 text-kenenti-yellow shrink-0" aria-hidden="true" />
                      <span>28 877 074</span>
                    </span>
                  </a>
                </div>

                <a
                  href={KENENTI_BRAND.whatsappGeneralUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 sm:h-11 w-full items-center justify-center gap-2 rounded-xl bg-kenenti-yellow px-4 font-heading text-xs sm:text-sm font-extrabold text-kenenti-navy shadow-md transition-transform active:scale-[0.99] hover:bg-[#f2aa40]"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Demander un avis WhatsApp</span>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
