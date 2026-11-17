"use client";

import * as React from "react";
import { HelpCircle, ChevronsUpDown, MessageCircle } from "lucide-react";
import { FAQ_ITEMS, KENENTI_BRAND } from "@/lib/kenenti-data";

export function FaqSection() {
  const detailsRefs = React.useRef<(HTMLDetailsElement | null)[]>([]);
  const [allExpanded, setAllExpanded] = React.useState(false);

  const syncExpandedState = React.useCallback(() => {
    const elements = detailsRefs.current.filter(
      (el): el is HTMLDetailsElement => el !== null
    );
    if (elements.length === 0) return;
    const everyOpen = elements.every((el) => el.open);
    setAllExpanded(everyOpen);
  }, []);

  const handleToggleAll = () => {
    const nextState = !allExpanded;
    detailsRefs.current.forEach((el) => {
      if (el) {
        el.open = nextState;
      }
    });
    setAllExpanded(nextState);
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="kenenti-accordion bg-white py-6 sm:py-14 lg:py-20"
    >
      <div className="container max-w-4xl">
        {/* En-tête Mobile-First */}
        <div className="flex items-end justify-between gap-3 mb-4 sm:mb-8">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-kenenti-sand px-2.5 py-0.5 sm:px-3.5 sm:py-1 text-[10px] sm:text-xs font-heading font-bold uppercase tracking-wider text-kenenti-navy">
              <HelpCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-kenenti-red" aria-hidden="true" />
              <span>FAQ</span>
            </div>
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
            className="inline-flex items-center gap-1.5 shrink-0 rounded-lg sm:rounded-xl border border-kenenti-navy/20 bg-kenenti-sand/40 px-2.5 py-1.5 sm:px-3.5 sm:py-2 text-[11px] sm:text-xs font-heading font-bold text-kenenti-navy transition-colors hover:border-kenenti-navy hover:bg-kenenti-sand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kenenti-yellow"
          >
            <ChevronsUpDown className="h-3.5 w-3.5 text-kenenti-red" aria-hidden="true" />
            <span>{allExpanded ? "Tout replier" : "Tout déplier"}</span>
          </button>
        </div>

        {/* Accordéon natif <details> / <summary> sans balise de titre dans <summary> */}
        <div className="space-y-2.5 sm:space-y-3.5">
          {FAQ_ITEMS.map((item, index) => (
            <details
              key={item.id}
              ref={(el) => {
                detailsRefs.current[index] = el;
              }}
              open={index === 0}
              onToggle={syncExpandedState}
            >
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
