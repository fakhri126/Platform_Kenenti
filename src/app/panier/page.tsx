"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Banknote,
  Check,
  CheckCircle2,
  LayoutDashboard,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
} from "lucide-react";
import { formatDinars, useCart } from "@/lib/cart-store";
import {
  createSubmission,
  type BoutiqueOrderSubmission,
} from "@/lib/orders-store";
import { cn } from "@/lib/utils";

const DELIVERY_FEE = 5;
const INPUT_CLASS =
  "h-10 w-full rounded-xl border border-kenenti-navy/12 bg-[#FAF8F5] px-3 text-xs sm:text-sm text-kenenti-navy placeholder:text-kenenti-navy/40 focus:border-kenenti-navy focus:bg-white focus:outline-none";

export default function PanierPage() {
  const {
    items,
    totalCount,
    subtotal,
    hasUnpricedItem,
    updateQty,
    removeItem,
    clearCart,
  } = useCart();

  const [customerName, setCustomerName] = React.useState("");
  const [customerPhone, setCustomerPhone] = React.useState("");
  const [customerCity, setCustomerCity] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submittedOrder, setSubmittedOrder] =
    React.useState<BoutiqueOrderSubmission | null>(null);

  const totalLabel =
    items.length === 0
      ? formatDinars(0)
      : hasUnpricedItem
      ? subtotal > 0
        ? `${formatDinars(subtotal + DELIVERY_FEE)} + articles sur confirmation`
        : "Sur confirmation"
      : formatDinars(subtotal + DELIVERY_FEE);

  const isOrderValid =
    items.length > 0 &&
    customerName.trim().length > 0 &&
    customerPhone.trim().length > 0 &&
    customerCity.trim().length > 0;

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isOrderValid) return;

    setIsSubmitting(true);
    try {
      const newOrder: BoutiqueOrderSubmission = {
        id: `CMD-${Date.now().toString().slice(-6)}`,
        type: "commande",
        createdAt: new Date().toISOString(),
        status: "En attente",
        items: items.map((entry) => ({
          productId: entry.product.id,
          name: entry.product.name,
          priceDisplay: entry.product.priceDisplay,
          quantity: entry.quantity,
          variant: entry.variant,
          image: entry.product.image,
        })),
        estimatedTotal: totalLabel,
        clientName: customerName.trim(),
        clientPhone: customerPhone.trim(),
        clientCity: customerCity.trim(),
      };

      await createSubmission(newOrder);
      setSubmittedOrder(newOrder);
      clearCart();
      setCustomerName("");
      setCustomerPhone("");
      setCustomerCity("");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#FAF8F5] via-white to-[#F6F3EE] py-6 sm:py-12 lg:py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(250,185,91,0.14),transparent_60%)]"
      />

      <div className="container relative z-10 max-w-3xl">
        <div className="mb-4 sm:mb-6">
          <Link
            href="/boutique"
            className="inline-flex items-center gap-1.5 font-heading text-xs font-bold text-kenenti-navy/70 hover:text-kenenti-navy transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Retour à la Boutique</span>
          </Link>
        </div>

        <div className="flex items-end justify-between gap-3 mb-5 sm:mb-8">
          <div>
            <p className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-heading font-bold uppercase tracking-widest text-[#D98A1C] mb-1">
              <Banknote className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Paiement à la livraison (COD)</span>
            </p>
            <h1 className="font-heading text-xl sm:text-3xl font-extrabold text-kenenti-navy tracking-tight">
              Mon Panier &amp; Commande
            </h1>
          </div>
          {!submittedOrder && (
            <span className="rounded-full bg-white border border-kenenti-navy/10 px-3 py-1 font-heading text-xs font-extrabold text-kenenti-navy shadow-2xs">
              {totalCount} article(s)
            </span>
          )}
        </div>

        {submittedOrder ? (
          <section className="rounded-2xl border border-kenenti-navy/10 bg-white p-6 sm:p-8 text-center shadow-[0_14px_40px_-14px_rgba(26,50,99,0.14)] space-y-5">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366]/15 text-[#199E48]">
              <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
            </div>
            <div className="space-y-1.5">
              <span className="inline-block rounded-full bg-kenenti-yellow/25 px-3 py-0.5 font-heading text-xs font-extrabold text-kenenti-navy">
                Commande {submittedOrder.id}
              </span>
              <h2 className="font-heading text-xl font-extrabold text-kenenti-navy">
                Merci ! Votre commande est enregistrée
              </h2>
              <p className="text-xs sm:text-sm text-kenenti-navy/70">
                Votre commande a été transmise directement sur notre tableau de
                bord.
              </p>
            </div>

            <div className="rounded-xl bg-[#FAF8F5] p-4 text-left text-xs space-y-1.5 border border-kenenti-navy/8">
              <p>
                <strong>Client :</strong> {submittedOrder.clientName} (
                {submittedOrder.clientPhone})
              </p>
              <p>
                <strong>Adresse :</strong> {submittedOrder.clientCity}
              </p>
              {submittedOrder.estimatedTotal && (
                <p>
                  <strong>Total :</strong> {submittedOrder.estimatedTotal}
                </p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 pt-1">
              <Link
                href="/boutique"
                className="inline-flex h-11 w-full sm:w-auto items-center justify-center rounded-xl border border-kenenti-navy/15 bg-white px-5 font-heading text-xs font-bold text-kenenti-navy hover:bg-[#FAF8F5]"
              >
                Retourner à la Boutique
              </Link>
              <Link
                href="/dashboard"
                className="inline-flex h-11 w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-kenenti-navy px-6 font-heading text-xs font-extrabold text-kenenti-yellow"
              >
                <LayoutDashboard className="h-4 w-4" aria-hidden="true" />
                <span>Voir sur le Dashboard</span>
              </Link>
            </div>
          </section>
        ) : items.length === 0 ? (
          <section className="rounded-2xl border border-dashed border-kenenti-navy/20 bg-white p-8 sm:p-12 text-center space-y-4">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FAF8F5] text-kenenti-navy/50">
              <ShoppingBag className="h-7 w-7" aria-hidden="true" />
            </div>
            <div className="space-y-1">
              <h2 className="font-heading text-base sm:text-xl font-extrabold text-kenenti-navy">
                Votre panier est vide
              </h2>
              <p className="text-xs sm:text-sm text-kenenti-navy/65">
                Parcourez nos peintures, kits de nettoyage et accessoires pour
                ajouter vos produits.
              </p>
            </div>
            <Link
              href="/boutique"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-kenenti-navy px-6 font-heading text-xs sm:text-sm font-extrabold text-kenenti-yellow shadow-sm"
            >
              <span>Découvrir la Boutique</span>
            </Link>
          </section>
        ) : (
          <form onSubmit={handleSubmitOrder} className="space-y-5">
            <section className="rounded-2xl border border-kenenti-navy/10 bg-white p-4 sm:p-6 shadow-[0_10px_30px_-14px_rgba(26,50,99,0.1)] space-y-3">
              <div className="flex items-center justify-between border-b border-kenenti-navy/8 pb-2.5">
                <h2 className="font-heading text-sm sm:text-base font-extrabold text-kenenti-navy">
                  1. Articles sélectionnés
                </h2>
                <button
                  type="button"
                  onClick={clearCart}
                  className="text-[11px] font-heading font-bold text-kenenti-red hover:underline cursor-pointer"
                >
                  Vider le panier
                </button>
              </div>

              <div className="space-y-2.5">
                {items.map((entry, idx) => (
                  <div
                    key={`${entry.product.id}-${entry.variant}`}
                    className="flex items-center justify-between gap-2.5 rounded-xl bg-[#FAF8F5] border border-kenenti-navy/8 p-2.5 sm:p-3"
                  >
                    <Link
                      href={`/boutique/${entry.product.id}`}
                      className="flex items-center gap-3 min-w-0 group"
                    >
                      <img
                        src={entry.product.image}
                        alt={entry.product.name}
                        className="h-12 w-12 sm:h-14 sm:w-14 shrink-0 rounded-lg bg-white object-contain p-1 border border-kenenti-navy/10"
                      />
                      <div className="min-w-0">
                        <p className="font-heading text-xs sm:text-sm font-extrabold text-kenenti-navy truncate group-hover:text-[#D98A1C] transition-colors">
                          {entry.product.name}
                        </p>
                        <p className="text-[11px] text-kenenti-navy/70">
                          <span className="font-heading font-bold text-[#D98A1C]">
                            {entry.product.priceDisplay}
                          </span>
                          {entry.variant ? ` • Teinte : ${entry.variant}` : ""}
                        </p>
                      </div>
                    </Link>

                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        type="button"
                        onClick={() => updateQty(idx, -1)}
                        aria-label="Diminuer la quantité"
                        className="flex h-7 w-7 items-center justify-center rounded-lg bg-white border border-kenenti-navy/12 text-kenenti-navy cursor-pointer"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-6 text-center font-heading text-xs font-extrabold text-kenenti-navy">
                        {entry.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQty(idx, 1)}
                        aria-label="Augmenter la quantité"
                        className="flex h-7 w-7 items-center justify-center rounded-lg bg-white border border-kenenti-navy/12 text-kenenti-navy cursor-pointer"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                      <button
                        type="button"
                        onClick={() => removeItem(idx)}
                        aria-label="Supprimer l'article"
                        className="ml-1 flex h-7 w-7 items-center justify-center rounded-lg text-kenenti-red hover:bg-kenenti-red/10 cursor-pointer"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-kenenti-navy/10 bg-white p-4 sm:p-6 shadow-[0_10px_30px_-14px_rgba(26,50,99,0.1)] space-y-5">
              <div className="space-y-3">
                <h2 className="font-heading text-sm sm:text-base font-extrabold text-kenenti-navy">
                  2. Vos coordonnées
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label
                      htmlFor="panier-name"
                      className="block font-heading text-[11px] font-bold text-kenenti-navy/80 mb-1"
                    >
                      Nom &amp; Prénom *
                    </label>
                    <input
                      id="panier-name"
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Votre nom complet"
                      className={INPUT_CLASS}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="panier-phone"
                      className="block font-heading text-[11px] font-bold text-kenenti-navy/80 mb-1"
                    >
                      Téléphone *
                    </label>
                    <input
                      id="panier-phone"
                      type="tel"
                      required
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="Ex. : 29 000 000"
                      className={INPUT_CLASS}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="panier-city"
                    className="block font-heading text-[11px] font-bold text-kenenti-navy/80 mb-1"
                  >
                    Ville &amp; Adresse de livraison *
                  </label>
                  <input
                    id="panier-city"
                    type="text"
                    required
                    value={customerCity}
                    onChange={(e) => setCustomerCity(e.target.value)}
                    placeholder="Ex. : La Marsa, Menzah 6, Lac 2, Sousse..."
                    className={INPUT_CLASS}
                  />
                </div>
              </div>

              <div className="rounded-xl bg-[#FAF8F5] border border-kenenti-navy/10 p-3.5 space-y-1.5 text-xs">
                <div className="flex items-center justify-between text-kenenti-navy/75">
                  <span>Livraison</span>
                  <span className="font-heading font-bold">
                    {formatDinars(DELIVERY_FEE)}
                  </span>
                </div>
                <div className="flex items-center justify-between border-t border-kenenti-navy/10 pt-2 font-heading text-sm font-extrabold text-kenenti-navy">
                  <span>Total</span>
                  <span className="text-[#D98A1C]">{totalLabel}</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={!isOrderValid || isSubmitting}
                className={cn(
                  "flex h-11 sm:h-12 w-full items-center justify-center gap-2 rounded-xl px-5 font-heading text-xs sm:text-sm font-extrabold transition-all",
                  isOrderValid && !isSubmitting
                    ? "bg-kenenti-navy text-kenenti-yellow shadow-sm hover:bg-kenenti-navy/95 cursor-pointer"
                    : "bg-kenenti-navy/10 text-kenenti-navy/40 cursor-not-allowed"
                )}
              >
                <Check className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>
                  {isSubmitting
                    ? "Enregistrement de la commande..."
                    : "Valider ma commande (Paiement à la livraison)"}
                </span>
              </button>
            </section>
          </form>
        )}
      </div>
    </div>
  );
}
