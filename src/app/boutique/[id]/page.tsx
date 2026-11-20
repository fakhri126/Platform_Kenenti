"use client";

import * as React from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Banknote,
  Check,
  Minus,
  Plus,
  ShoppingBag,
  Truck,
} from "lucide-react";
import {
  BOUTIQUE_CATALOG,
  SWATCH_COLORS,
  getComplementaryProducts,
  getProductById,
  type BoutiqueCatalogItem,
} from "@/lib/boutique-catalog";
import { useCart } from "@/lib/cart-store";
import {
  ProductComplementaryGrid,
  ProductTutorialSection,
  RelatedProductsGrid,
} from "@/components/boutique/product-detail-sections";
import { cn } from "@/lib/utils";

export default function ProductDetailPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const { addItem, totalCount } = useCart();

  const product = getProductById(params.id);

  const [selectedVariant, setSelectedVariant] = React.useState(
    product?.variantOptions?.[0] ?? ""
  );
  const [quantity, setQuantity] = React.useState(1);
  const [justAdded, setJustAdded] = React.useState(false);
  const [addedCompId, setAddedCompId] = React.useState<string | null>(null);

  React.useEffect(() => {
    setSelectedVariant(product?.variantOptions?.[0] ?? "");
    setQuantity(1);
  }, [product?.id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#FAF8F5] py-16">
        <div className="container max-w-xl text-center space-y-4">
          <h1 className="font-heading text-2xl font-extrabold text-kenenti-navy">
            Produit introuvable
          </h1>
          <Link
            href="/boutique"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-kenenti-navy px-6 font-heading text-xs font-extrabold text-kenenti-yellow"
          >
            Retour à la Boutique
          </Link>
        </div>
      </div>
    );
  }

  const variantGallery = product.variantGallery ?? [];
  const displayedImage =
    variantGallery.find((v) => v.label === selectedVariant)?.image ??
    product.image;

  const complementaryProducts = getComplementaryProducts(product);
  const relatedProducts = BOUTIQUE_CATALOG.filter(
    (item) =>
      item.familyId === product.familyId &&
      item.id !== product.id &&
      !complementaryProducts.some((comp) => comp.id === item.id)
  ).slice(0, 3);

  const handleAdd = () => {
    addItem({ ...product, image: displayedImage }, selectedVariant, quantity);
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 1400);
  };

  const handleBuyNow = () => {
    addItem({ ...product, image: displayedImage }, selectedVariant, quantity);
    router.push("/panier");
  };

  const handleAddComplementary = (comp: BoutiqueCatalogItem) => {
    addItem(comp, comp.variantOptions?.[0] ?? "", 1);
    setAddedCompId(comp.id);
    window.setTimeout(() => {
      setAddedCompId((curr) => (curr === comp.id ? null : curr));
    }, 1300);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#FAF8F5] via-white to-[#F6F3EE] py-6 sm:py-12 pb-20">
      <div className="container max-w-5xl space-y-10 sm:space-y-14">
        <div className="flex items-center justify-between gap-2">
          <Link
            href="/boutique"
            className="inline-flex items-center gap-1.5 font-heading text-xs font-bold text-kenenti-navy/70 hover:text-kenenti-navy transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Retour à la Boutique</span>
          </Link>

          <Link
            href="/panier"
            className="inline-flex h-9 items-center gap-1.5 rounded-full bg-kenenti-navy px-3.5 font-heading text-xs font-extrabold text-kenenti-yellow shadow-xs"
          >
            <ShoppingBag className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Panier ({totalCount})</span>
          </Link>
        </div>

        {/* FICHE PRODUIT */}
        <article className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 rounded-2xl border border-kenenti-navy/10 bg-white p-4 sm:p-8 shadow-[0_14px_40px_-16px_rgba(26,50,99,0.12)]">
          {/* Colonne Gauche : Image studio + variété de couleurs en petites images */}
          <div className="lg:col-span-6 space-y-3.5">
            <div className="relative h-72 sm:h-96 w-full flex items-center justify-center rounded-2xl bg-gradient-to-b from-[#FAF8F5] to-white border border-kenenti-navy/8 p-6">
              <img
                src={displayedImage}
                alt={
                  selectedVariant
                    ? `${product.name} — Teinte ${selectedVariant}`
                    : product.name
                }
                fetchPriority="high"
                className="max-h-full max-w-full object-contain transition-opacity duration-200"
              />
              <span className="absolute top-3 left-3 rounded-lg bg-white border border-kenenti-navy/10 px-3 py-1 font-heading text-xs font-bold text-kenenti-navy shadow-2xs">
                {product.volumeOrFormat}
              </span>
              {selectedVariant && variantGallery.length > 0 && (
                <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 border border-kenenti-navy/12 px-2.5 py-1 font-heading text-[11px] font-bold text-kenenti-navy shadow-2xs">
                  {SWATCH_COLORS[selectedVariant] && (
                    <span
                      className="h-2.5 w-2.5 rounded-full border border-black/20"
                      style={{ backgroundColor: SWATCH_COLORS[selectedVariant] }}
                    />
                  )}
                  <span>{selectedVariant}</span>
                </span>
              )}
            </div>

            {variantGallery.length > 0 && (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="font-heading text-[11px] font-extrabold uppercase tracking-wider text-kenenti-navy/65">
                    Variété de couleurs ({variantGallery.length} teintes)
                  </p>
                  <span className="text-[11px] font-medium text-kenenti-navy/50">
                    Touchez un flacon
                  </span>
                </div>

                <div
                  role="group"
                  aria-label="Aperçu visuel des teintes disponibles"
                  className="grid grid-cols-5 gap-2"
                >
                  {variantGallery.map((variant) => {
                    const isSelected = selectedVariant === variant.label;
                    return (
                      <button
                        key={variant.label}
                        type="button"
                        aria-pressed={isSelected}
                        onClick={() => setSelectedVariant(variant.label)}
                        className={cn(
                          "group flex flex-col items-center rounded-xl border p-1.5 transition-all cursor-pointer",
                          isSelected
                            ? "border-kenenti-navy bg-white ring-2 ring-kenenti-yellow shadow-xs"
                            : "border-kenenti-navy/10 bg-[#FAF8F5]/80 hover:border-kenenti-navy/30 hover:bg-white"
                        )}
                      >
                        <div className="h-12 sm:h-14 w-full flex items-center justify-center rounded-lg bg-white p-1">
                          <img
                            src={variant.image}
                            alt={`${product.name} ${variant.label}`}
                            className="max-h-full max-w-full object-contain transition-transform duration-200 group-hover:scale-105"
                          />
                        </div>
                        <span
                          className={cn(
                            "mt-1 w-full truncate text-center font-heading text-[9.5px] sm:text-[10px] font-bold",
                            isSelected
                              ? "text-kenenti-navy"
                              : "text-kenenti-navy/65"
                          )}
                        >
                          {variant.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Colonne Droite : Détails, choix de couleur, quantité & actions */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div>
                <p className="text-[10px] sm:text-xs font-heading font-bold uppercase tracking-widest text-[#D98A1C]">
                  {product.familyLabel}
                </p>
                <h1 className="mt-1 font-heading text-xl sm:text-3xl font-extrabold text-kenenti-navy tracking-tight">
                  {product.name}
                </h1>
                <p className="mt-2 font-heading text-xl sm:text-2xl font-extrabold text-[#D98A1C]">
                  {product.priceDisplay}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-kenenti-navy/80 leading-relaxed">
                {product.description}
              </p>

              <ul className="space-y-1.5 border-y border-kenenti-navy/8 py-3.5">
                {product.usagePoints.map((pt) => (
                  <li
                    key={pt}
                    className="flex items-center gap-2 text-xs sm:text-sm text-kenenti-navy/85"
                  >
                    <Check
                      className="h-4 w-4 text-[#D98A1C] shrink-0"
                      aria-hidden="true"
                    />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              {product.variantOptions && (
                <div className="space-y-2.5">
                  <p className="font-heading text-xs font-bold text-kenenti-navy">
                    Choix de la couleur :{" "}
                    <span className="text-[#D98A1C]">{selectedVariant}</span>
                  </p>
                  <div className="flex flex-wrap items-center gap-2">
                    {product.variantOptions.map((opt) => {
                      const isSelected = selectedVariant === opt;
                      const hex = SWATCH_COLORS[opt];
                      return (
                        <button
                          key={opt}
                          type="button"
                          aria-pressed={isSelected}
                          onClick={() => setSelectedVariant(opt)}
                          className={cn(
                            "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-heading text-xs font-bold transition-all cursor-pointer",
                            isSelected
                              ? "bg-kenenti-navy text-kenenti-yellow border-kenenti-navy shadow-2xs"
                              : "bg-[#FAF8F5] text-kenenti-navy border-kenenti-navy/12 hover:bg-white"
                          )}
                        >
                          {hex && (
                            <span
                              className="h-3.5 w-3.5 rounded-full border border-black/20 shrink-0"
                              style={{ backgroundColor: hex }}
                            />
                          )}
                          <span>{opt}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className="flex items-center gap-3">
                <span className="font-heading text-xs font-bold text-kenenti-navy">
                  Quantité :
                </span>
                <div className="inline-flex items-center rounded-xl border border-kenenti-navy/12 bg-[#FAF8F5] p-1">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    aria-label="Diminuer la quantité"
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-kenenti-navy cursor-pointer"
                  >
                    <Minus className="h-3.5 w-3.5" />
                  </button>
                  <span className="w-9 text-center font-heading text-sm font-extrabold text-kenenti-navy">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    aria-label="Augmenter la quantité"
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-kenenti-navy cursor-pointer"
                  >
                    <Plus className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={handleAdd}
                  className={cn(
                    "flex h-11 sm:h-12 items-center justify-center gap-2 rounded-xl px-5 font-heading text-xs sm:text-sm font-extrabold transition-all cursor-pointer",
                    justAdded
                      ? "bg-[#25D366] text-white"
                      : "bg-kenenti-yellow text-kenenti-navy hover:bg-[#f2aa40]"
                  )}
                >
                  {justAdded ? (
                    <>
                      <Check className="h-4 w-4" aria-hidden="true" />
                      <span>Ajouté au panier</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="h-4 w-4" aria-hidden="true" />
                      <span>Ajouter au panier</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleBuyNow}
                  className="flex h-11 sm:h-12 items-center justify-center gap-2 rounded-xl bg-kenenti-navy px-5 font-heading text-xs sm:text-sm font-extrabold text-kenenti-yellow hover:bg-kenenti-navy/95 transition-colors cursor-pointer"
                >
                  <span>Commander maintenant</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-kenenti-navy/65 pt-1">
                <span className="inline-flex items-center gap-1.5">
                  <Banknote className="h-3.5 w-3.5 text-[#D98A1C]" />
                  Paiement à la livraison (COD)
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Truck className="h-3.5 w-3.5 text-[#D98A1C]" />
                  Livraison 5 DT
                </span>
              </div>
            </div>
          </div>
        </article>

        <ProductComplementaryGrid
          products={complementaryProducts}
          addedId={addedCompId}
          onAdd={handleAddComplementary}
        />

        <ProductTutorialSection tutorial={product.tutorialVideo} />

        <RelatedProductsGrid products={relatedProducts} />
      </div>
    </div>
  );
}
