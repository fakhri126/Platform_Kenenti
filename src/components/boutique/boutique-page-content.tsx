"use client";

import * as React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  ArrowRight,
  Check,
  Plus,
  Search,
  ShoppingBag,
} from "lucide-react";
import {
  BOUTIQUE_CATALOG,
  BOUTIQUE_FAMILIES,
  SWATCH_COLORS,
  type BoutiqueCatalogItem,
  type BoutiqueFamilyId,
} from "@/lib/boutique-catalog";
import { useCart } from "@/lib/cart-store";
import { cn } from "@/lib/utils";

export function BoutiquePageContent() {
  const searchParams = useSearchParams();
  const { totalCount, subtotal, addItem } = useCart();

  const [activeFamily, setActiveFamily] = React.useState<BoutiqueFamilyId>("all");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedVariants, setSelectedVariants] = React.useState<Record<string, string>>(
    () => {
      const initial: Record<string, string> = {};
      BOUTIQUE_CATALOG.forEach((item) => {
        if (item.variantOptions?.[0]) {
          initial[item.id] = item.variantOptions[0];
        }
      });
      return initial;
    }
  );
  const [justAddedId, setJustAddedId] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fam = searchParams.get("famille");
    if (fam === "peintures") setActiveFamily("peintures");
    else if (fam === "soin-et-entretien" || fam === "reblanchissant")
      setActiveFamily("soin-et-entretien");
    else if (fam === "accessoires") setActiveFamily("accessoires");
  }, [searchParams]);

  const filteredProducts = React.useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return BOUTIQUE_CATALOG.filter((item) => {
      const matchesFamily = activeFamily === "all" || item.familyId === activeFamily;
      const matchesSearch = !q || item.name.toLowerCase().includes(q);
      return matchesFamily && matchesSearch;
    });
  }, [activeFamily, searchQuery]);

  const handleQuickAdd = (product: BoutiqueCatalogItem) => {
    const variant = selectedVariants[product.id] ?? "";
    const activeImage =
      product.variantGallery?.find((v) => v.label === variant)?.image ??
      product.image;
    addItem({ ...product, image: activeImage }, variant, 1);
    setJustAddedId(product.id);
    window.setTimeout(() => {
      setJustAddedId((curr) => (curr === product.id ? null : curr));
    }, 1200);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#FAF8F5] via-white to-[#F6F3EE] py-6 sm:py-12 lg:py-16 pb-28 lg:pb-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(250,185,91,0.14),transparent_60%)]"
      />

      <div className="container relative z-10 max-w-5xl">
        {/* En-tête minimaliste & luxe */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-5 sm:mb-8">
          <div>
            <p className="text-[10px] sm:text-xs font-heading font-bold uppercase tracking-widest text-[#D98A1C] mb-1">
              La Boutique KENENTI • Paiement à la livraison (COD)
            </p>
            <h1 className="font-heading text-xl sm:text-3xl font-extrabold text-kenenti-navy tracking-tight">
              Peintures, Kits &amp; Accessoires
            </h1>
          </div>

          <Link
            href="/panier"
            className="inline-flex h-10 self-start sm:self-auto items-center gap-2 rounded-full bg-kenenti-navy px-4 font-heading text-xs font-extrabold text-kenenti-yellow shadow-sm transition-transform hover:-translate-y-0.5"
          >
            <ShoppingBag className="h-3.5 w-3.5" aria-hidden="true" />
            <span>
              Mon panier ({totalCount})
              {totalCount > 0 && subtotal > 0 ? ` • ${subtotal} DT` : ""}
            </span>
          </Link>
        </div>

        {/* Barre de filtres épurée + Recherche */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 mb-6">
          <div
            role="tablist"
            aria-label="Catégories de la boutique"
            className="grid grid-cols-4 sm:flex items-center gap-1.5"
          >
            {BOUTIQUE_FAMILIES.map((fam) => {
              const isSelected = activeFamily === fam.id;
              return (
                <button
                  key={fam.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveFamily(fam.id)}
                  className={cn(
                    "truncate rounded-full px-2.5 sm:px-4 py-1.5 font-heading text-[11px] sm:text-xs font-extrabold transition-all cursor-pointer",
                    isSelected
                      ? "bg-kenenti-navy text-kenenti-yellow shadow-xs"
                      : "bg-white text-kenenti-navy/75 border border-kenenti-navy/10 hover:text-kenenti-navy"
                  )}
                >
                  {fam.label}
                </button>
              );
            })}
          </div>

          <div className="relative w-full sm:w-64">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-kenenti-navy/45"
              aria-hidden="true"
            />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher un produit..."
              aria-label="Rechercher un produit"
              className="h-9 w-full rounded-full border border-kenenti-navy/12 bg-white pl-8 pr-3 text-xs text-kenenti-navy placeholder:text-kenenti-navy/45 focus:border-kenenti-navy focus:outline-none"
            />
          </div>
        </div>

        {/* Grille de produits cliquables vers la Fiche Produit (/boutique/[id]) */}
        {filteredProducts.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-kenenti-navy/20 bg-white p-8 text-center">
            <p className="font-heading text-sm font-bold text-kenenti-navy">
              Aucun produit trouvé pour « {searchQuery} »
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-5">
            {filteredProducts.map((product) => {
              const currentVariant = selectedVariants[product.id] ?? "";
              const isJustAdded = justAddedId === product.id;
              const activeImage =
                product.variantGallery?.find((v) => v.label === currentVariant)
                  ?.image ?? product.image;

              return (
                <article
                  key={product.id}
                  className="group flex flex-col justify-between rounded-2xl border border-kenenti-navy/10 bg-white p-3 sm:p-4 shadow-[0_8px_24px_-14px_rgba(26,50,99,0.1)] transition-all hover:border-kenenti-navy/25 hover:shadow-[0_14px_30px_-14px_rgba(26,50,99,0.16)]"
                >
                  <div>
                    {/* Cadre photo cliquable -> ouvre la Fiche Produit */}
                    <Link
                      href={`/boutique/${product.id}`}
                      className="relative h-32 sm:h-48 w-full flex items-center justify-center bg-gradient-to-b from-[#FAF8F5] to-white rounded-xl p-3 border border-kenenti-navy/6 overflow-hidden"
                    >
                      <img
                        src={activeImage}
                        alt={
                          currentVariant
                            ? `${product.name} — ${currentVariant}`
                            : product.name
                        }
                        loading="lazy"
                        decoding="async"
                        className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                      <span className="absolute top-2 left-2 rounded-md bg-white/95 border border-kenenti-navy/10 px-2 py-0.5 font-heading text-[9px] sm:text-[10px] font-bold text-kenenti-navy/80 shadow-2xs">
                        {product.volumeOrFormat}
                      </span>
                    </Link>

                    {/* Titre cliquable + Pastilles de teintes */}
                    <div className="mt-3 space-y-1.5">
                      <Link href={`/boutique/${product.id}`}>
                        <h2 className="font-heading text-xs sm:text-[15px] font-extrabold text-kenenti-navy leading-snug line-clamp-1 group-hover:text-[#D98A1C] transition-colors">
                          {product.name}
                        </h2>
                      </Link>

                      {product.variantOptions ? (
                        <div className="flex items-center justify-between gap-1.5">
                          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-0.5">
                            {product.variantOptions.map((opt) => {
                              const isSelectedVar = currentVariant === opt;
                              const hex = SWATCH_COLORS[opt];

                              if (hex) {
                                return (
                                  <button
                                    key={opt}
                                    type="button"
                                    title={opt}
                                    aria-label={`Couleur ${opt}`}
                                    onClick={() =>
                                      setSelectedVariants((prev) => ({
                                        ...prev,
                                        [product.id]: opt,
                                      }))
                                    }
                                    className={cn(
                                      "h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 rounded-full border cursor-pointer transition-transform",
                                      hex === "#FFFFFF"
                                        ? "border-kenenti-navy/35"
                                        : "border-black/15",
                                      isSelectedVar
                                        ? "ring-2 ring-kenenti-yellow ring-offset-1 scale-110"
                                        : "opacity-75 hover:opacity-100"
                                    )}
                                    style={{ backgroundColor: hex }}
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
                                    "shrink-0 rounded px-1.5 py-0.5 font-heading text-[9px] font-bold cursor-pointer",
                                    isSelectedVar
                                      ? "bg-kenenti-navy text-kenenti-yellow"
                                      : "bg-[#FAF8F5] text-kenenti-navy/70"
                                  )}
                                >
                                  {opt}
                                </button>
                              );
                            })}
                          </div>
                          <span className="text-[9.5px] sm:text-[10.5px] font-heading font-bold text-[#D98A1C] shrink-0">
                            {currentVariant}
                          </span>
                        </div>
                      ) : (
                        <p className="text-[10px] sm:text-[11px] font-medium text-kenenti-navy/55">
                          Voir la fiche produit
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Prix & Bouton Ajouter */}
                  <div className="mt-3 pt-2.5 border-t border-kenenti-navy/8 flex items-center justify-between gap-2">
                    <span className="font-heading text-xs sm:text-base font-extrabold text-kenenti-navy truncate">
                      {product.priceDisplay}
                    </span>

                    <button
                      type="button"
                      onClick={() => handleQuickAdd(product)}
                      className={cn(
                        "inline-flex h-8 sm:h-9 items-center justify-center gap-1 rounded-xl px-2.5 sm:px-3.5 font-heading text-[10.5px] sm:text-xs font-extrabold transition-all cursor-pointer shrink-0",
                        isJustAdded
                          ? "bg-[#25D366] text-white"
                          : "bg-kenenti-navy text-kenenti-yellow hover:bg-kenenti-yellow hover:text-kenenti-navy"
                      )}
                    >
                      {isJustAdded ? (
                        <>
                          <Check className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>Ajouté</span>
                        </>
                      ) : (
                        <>
                          <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>Ajouter</span>
                        </>
                      )}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>

      {/* Barre flottante Mobile -> ouvre la page indépendante /panier */}
      {totalCount > 0 && (
        <div className="fixed bottom-16 inset-x-3 z-40 lg:hidden">
          <Link
            href="/panier"
            className="flex items-center justify-between gap-2 rounded-2xl bg-kenenti-navy/95 backdrop-blur-md border border-kenenti-yellow/40 p-2.5 text-white shadow-lg"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-kenenti-yellow font-heading text-xs font-extrabold text-kenenti-navy">
                {totalCount}
              </span>
              <div className="min-w-0">
                <p className="font-heading text-xs font-extrabold text-white truncate">
                  Voir mon panier
                </p>
                <p className="text-[10px] text-kenenti-yellow font-heading font-bold truncate">
                  {subtotal > 0 ? `${subtotal} DT` : "Finaliser la commande"}
                </p>
              </div>
            </div>

            <span className="inline-flex h-8 shrink-0 items-center gap-1 rounded-xl bg-kenenti-yellow px-3 font-heading text-[11px] font-extrabold text-kenenti-navy">
              <span>Panier</span>
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
          </Link>
        </div>
      )}
    </div>
  );
}
