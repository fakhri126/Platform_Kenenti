"use client";

import * as React from "react";
import { ChevronsUpDown, MessageCircle } from "lucide-react";
import { FAQ_ITEMS, KENENTI_BRAND } from "@/lib/kenenti-data";

export function FaqSection() {
  const listRef = React.useRef<HTMLDivElement>(null);
  const [allExpanded, setAllExpanded] = React.useState(false);

  const handleToggleAll = () => {
    const nextState = !allExpanded;
    listRef.current?.querySelectorAll("details").forEach((el) => {
      el.open = nextState;
    });
    setAllExpanded(nextState);
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="kenenti-accordion bg-white py-6 sm:py-12 lg:py-16"
    >
      <div className="container max-w-4xl">
        {/* En-tête Mobile-First */}
        <div className="flex items-end justify-between gap-3 mb-4 sm:mb-7">
          <div>
            <p className="text-[10px] sm:text-xs font-heading font-bold uppercase tracking-widest text-[#D98A1C] mb-0.5">
              FAQ
            </p>
            <h2
              id="faq-heading"
              className="text-base sm:text-2xl lg:text-3xl font-heading font-extrabold text-kenenti-navy tracking-tight"
            >
              Questions Fréquentes
            </h2>
          </div>

          <button
            type="button"
            aria-expanded={allExpanded}
            onClick={handleToggleAll}
            className="inline-flex items-center gap-1.5 shrink-0 rounded-xl border border-kenenti-navy/10 bg-[#FAF8F5] px-3 py-1.5 sm:px-3.5 sm:py-2 text-[11px] sm:text-xs font-heading font-bold text-kenenti-navy transition-colors hover:bg-kenenti-sand/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kenenti-yellow cursor-pointer"
          >
            <ChevronsUpDown className="h-3.5 w-3.5 text-kenenti-red" aria-hidden="true" />
            <span>{allExpanded ? "Tout replier" : "Tout déplier"}</span>
          </button>
        </div>

        {/* Accordéon natif <details> / <summary> sans balise de titre dans <summary> */}
        <div ref={listRef} className="space-y-2.5 sm:space-y-3.5">
          {FAQ_ITEMS.map((item, index) => (
            <details key={item.id} open={index === 0}>
              <summary className="text-xs sm:text-base leading-snug">
                <span className="flex-1">{item.question}</span>
              </summary>

              <div className="px-4 pb-4 sm:px-6 sm:pb-5 pt-1 text-[11.5px] sm:text-sm text-kenenti-navy/80 leading-relaxed border-t border-kenenti-navy/10">
                <p className="pt-2.5">{item.answer}</p>
              </div>
            </details>
          ))}
        </div>

        {/* Appel à l'action compact vers WhatsApp */}
        <div className="mt-5 sm:mt-8 rounded-2xl bg-kenenti-navy p-4 sm:p-6 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-5 shadow-sm">
          <div className="space-y-0.5">
            <p className="font-heading font-extrabold text-white text-xs sm:text-base">
              Une question spécifique sur l&apos;un de vos articles ?
            </p>
            <p className="text-[11px] sm:text-xs text-white/75">
              Envoyez vos photos sur WhatsApp pour une étude manuelle par nos artisans.
            </p>
          </div>
          <a
            href={KENENTI_BRAND.whatsappGeneralUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 sm:h-11 w-full sm:w-auto shrink-0 items-center justify-center gap-2 rounded-xl bg-kenenti-yellow px-4 font-heading text-xs sm:text-sm font-extrabold text-kenenti-navy shadow-sm"
          >
            <MessageCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
            <span>Demander un avis WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
