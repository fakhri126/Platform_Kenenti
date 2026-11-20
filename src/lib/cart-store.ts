"use client";

import * as React from "react";
import type { BoutiqueCatalogItem } from "@/lib/boutique-catalog";

export interface CartEntry {
  product: BoutiqueCatalogItem;
  quantity: number;
  variant: string;
}

const CART_KEY = "kenenti_cart_v1";
const CART_EVENT = "kenenti-cart-updated";

export function formatDinars(amount: number): string {
  return `${amount.toFixed(2).replace(".", ",")} DT`;
}

export function readCart(): CartEntry[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(CART_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    return parsed.filter(
      (entry): entry is CartEntry =>
        Boolean(
          entry &&
            typeof entry === "object" &&
            entry.product &&
            typeof entry.product.id === "string" &&
            typeof entry.quantity === "number" &&
            entry.quantity > 0
        )
    );
  } catch {
    return [];
  }
}

export function writeCart(items: CartEntry[]) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(CART_KEY, JSON.stringify(items));
    window.dispatchEvent(new Event(CART_EVENT));
  } catch {
    // Ignore storage quota errors
  }
}

export function addToCartStore(
  product: BoutiqueCatalogItem,
  variant = "",
  qty = 1
) {
  const current = readCart();
  const idx = current.findIndex(
    (entry) => entry.product.id === product.id && entry.variant === variant
  );

  if (idx !== -1) {
    current[idx] = { ...current[idx], quantity: current[idx].quantity + qty };
  } else {
    current.push({ product, quantity: qty, variant });
  }
  writeCart(current);
}

export function updateCartQtyStore(index: number, delta: number) {
  const current = readCart();
  if (!current[index]) return;

  const nextQty = current[index].quantity + delta;
  const updated =
    nextQty <= 0
      ? current.filter((_, i) => i !== index)
      : current.map((item, i) =>
          i === index ? { ...item, quantity: nextQty } : item
        );
  writeCart(updated);
}

export function removeCartItemStore(index: number) {
  writeCart(readCart().filter((_, i) => i !== index));
}

export function clearCartStore() {
  writeCart([]);
}

export function useCart() {
  const [items, setItems] = React.useState<CartEntry[]>([]);

  React.useEffect(() => {
    const sync = () => setItems(readCart());
    sync();
    window.addEventListener(CART_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(CART_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const totalCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = items.reduce(
    (acc, entry) =>
      acc + (entry?.product?.numericPrice ?? 0) * (entry?.quantity ?? 0),
    0
  );
  const hasUnpricedItem = items.some((entry) => !entry?.product?.numericPrice);

  return {
    items,
    totalCount,
    subtotal,
    hasUnpricedItem,
    addItem: addToCartStore,
    updateQty: updateCartQtyStore,
    removeItem: removeCartItemStore,
    clearCart: clearCartStore,
  };
}
