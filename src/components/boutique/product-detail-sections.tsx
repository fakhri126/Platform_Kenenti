import Link from "next/link";
import {
  Check,
  ExternalLink,
  Instagram,
  Play,
  Plus,
  Sparkles,
} from "lucide-react";
import type {
  BoutiqueCatalogItem,
  ProductTutorialVideo,
} from "@/lib/boutique-catalog";
import { cn } from "@/lib/utils";

export function ProductComplementaryGrid({
  products,
  addedId,
  onAdd,
}: {
  products: BoutiqueCatalogItem[];
  addedId: string | null;
  onAdd: (item: BoutiqueCatalogItem) => void;
}) {
  if (products.length === 0) return null;

  return (
    <section className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-1.5">
        <div>
          <p className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-heading font-bold uppercase tracking-widest text-[#D98A1C]">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Complétez votre application</span>
          </p>
          <h2 className="mt-0.5 font-heading text-lg sm:text-2xl font-extrabold text-kenenti-navy tracking-tight">
            Produits complémentaires recommandés
          </h2>
        </div>
        <p className="text-xs text-kenenti-navy/60">
          Pinceaux, brosses et indispensables d&apos;atelier
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {products.map((comp) => {
          const isAdded = addedId === comp.id;
          return (
            <div
              key={comp.id}
              className="group flex flex-col justify-between rounded-2xl border border-kenenti-navy/10 bg-white p-3 sm:p-4 shadow-[0_8px_24px_-14px_rgba(26,50,99,0.1)] transition-all hover:border-kenenti-navy/25"
            >
              <div>
                <Link
                  href={`/boutique/${comp.id}`}
                  className="relative h-28 sm:h-36 w-full flex items-center justify-center rounded-xl bg-gradient-to-b from-[#FAF8F5] to-white border border-kenenti-navy/6 p-2.5 overflow-hidden"
                >
                  <img
                    src={comp.image}
                    alt={comp.name}
                    loading="lazy"
                    decoding="async"
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute top-1.5 left-1.5 rounded-md bg-white/95 border border-kenenti-navy/10 px-1.5 py-0.5 font-heading text-[9px] font-bold text-kenenti-navy/75">
                    {comp.volumeOrFormat}
                  </span>
                </Link>

                <Link href={`/boutique/${comp.id}`} className="block mt-2.5">
                  <h3 className="font-heading text-xs sm:text-sm font-extrabold text-kenenti-navy leading-snug line-clamp-2 group-hover:text-[#D98A1C] transition-colors">
                    {comp.name}
                  </h3>
                </Link>

                {comp.complementaryNote && (
                  <p className="mt-1 text-[10.5px] sm:text-xs text-kenenti-navy/60 line-clamp-2">
                    {comp.complementaryNote}
                  </p>
                )}
              </div>

              <div className="mt-3 pt-2.5 border-t border-kenenti-navy/8 flex items-center justify-between gap-1.5">
                <span className="font-heading text-[11px] sm:text-xs font-extrabold text-[#D98A1C] truncate">
                  {comp.priceDisplay}
                </span>

                <button
                  type="button"
                  onClick={() => onAdd(comp)}
                  className={cn(
                    "inline-flex h-8 items-center justify-center gap-1 rounded-lg px-2.5 font-heading text-[10.5px] font-extrabold transition-all cursor-pointer shrink-0",
                    isAdded
                      ? "bg-[#25D366] text-white"
                      : "bg-kenenti-navy text-kenenti-yellow hover:bg-kenenti-yellow hover:text-kenenti-navy"
                  )}
                >
                  {isAdded ? (
                    <>
                      <Check className="h-3 w-3" aria-hidden="true" />
                      <span>Ajouté</span>
                    </>
                  ) : (
                    <>
                      <Plus className="h-3 w-3" aria-hidden="true" />
                      <span>Ajouter</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function ProductTutorialSection({
  tutorial,
}: {
  tutorial?: ProductTutorialVideo;
}) {
  if (!tutorial) return null;

  return (
    <section className="rounded-2xl border border-kenenti-navy/10 bg-white p-4 sm:p-8 shadow-[0_14px_40px_-16px_rgba(26,50,99,0.12)]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-[330px] rounded-2xl border border-kenenti-navy/12 bg-[#FAF8F5] overflow-hidden shadow-sm">
            <iframe
              src={tutorial.embedUrl}
              title={tutorial.title}
              loading="lazy"
              width={330}
              height={560}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
              className="block w-full h-[520px] sm:h-[560px] border-0 bg-[#FAF8F5]"
            />
          </div>
        </div>

        <div className="lg:col-span-7 space-y-5">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FAF8F5] border border-kenenti-navy/12 px-3 py-1 font-heading text-[10.5px] sm:text-xs font-extrabold uppercase tracking-wider text-kenenti-navy">
              <Play
                className="h-3 w-3 text-[#D98A1C] fill-[#D98A1C]"
                aria-hidden="true"
              />
              <span>Tutoriel Vidéo • @kenenti_brand</span>
            </span>

            <h2 className="font-heading text-lg sm:text-2xl font-extrabold text-kenenti-navy tracking-tight">
              {tutorial.title}
            </h2>

            <p className="text-xs sm:text-sm text-kenenti-navy/75 leading-relaxed">
              {tutorial.subtitle}
            </p>
          </div>

          <ol className="space-y-3">
            {tutorial.steps.map((step) => (
              <li
                key={step.number}
                className="flex items-start gap-3 rounded-xl border border-kenenti-navy/8 bg-[#FAF8F5]/75 p-3 sm:p-3.5"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-kenenti-navy font-heading text-xs font-extrabold text-kenenti-yellow">
                  {step.number}
                </span>
                <div className="min-w-0">
                  <p className="font-heading text-xs sm:text-sm font-extrabold text-kenenti-navy">
                    {step.title}
                  </p>
                  <p className="mt-0.5 text-[11.5px] sm:text-xs text-kenenti-navy/70 leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="pt-1 flex flex-wrap items-center gap-3">
            <a
              href={tutorial.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-xl bg-kenenti-navy px-4 font-heading text-xs font-extrabold text-kenenti-yellow hover:bg-kenenti-navy/95 transition-colors"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
              <span>Voir le tutoriel sur Instagram</span>
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
            <span className="text-[11px] text-kenenti-navy/55">
              Vidéo officielle issue du compte @kenenti_brand
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function RelatedProductsGrid({
  products,
}: {
  products: BoutiqueCatalogItem[];
}) {
  if (products.length === 0) return null;

  return (
    <section className="space-y-4">
      <h2 className="font-heading text-base sm:text-xl font-extrabold text-kenenti-navy">
        Dans la même gamme
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
        {products.map((rel) => (
          <Link
            key={rel.id}
            href={`/boutique/${rel.id}`}
            className="group rounded-2xl border border-kenenti-navy/10 bg-white p-3.5 shadow-2xs transition-all hover:border-kenenti-navy/25"
          >
            <div className="h-28 sm:h-36 flex items-center justify-center rounded-xl bg-[#FAF8F5] p-2">
              <img
                src={rel.image}
                alt={rel.name}
                loading="lazy"
                decoding="async"
                className="max-h-full max-w-full object-contain transition-transform group-hover:scale-105"
              />
            </div>
            <p className="mt-2.5 font-heading text-xs sm:text-sm font-extrabold text-kenenti-navy truncate">
              {rel.name}
            </p>
            <p className="font-heading text-xs font-bold text-[#D98A1C] mt-0.5">
              {rel.priceDisplay}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
