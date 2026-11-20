"use client";

import * as React from "react";
import Link from "next/link";
import {
  FileText,
  LayoutDashboard,
  RefreshCw,
  ShoppingBag,
} from "lucide-react";
import {
  deleteSubmission,
  fetchAllSubmissions,
  updateSubmissionStatus,
  type DashboardSubmission,
  type SubmissionStatus,
} from "@/lib/orders-store";
import { SubmissionCard } from "@/components/dashboard/submission-card";
import { cn } from "@/lib/utils";

type FilterType = "all" | "devis" | "commande";

export default function DashboardPage() {
  const [submissions, setSubmissions] = React.useState<DashboardSubmission[]>(
    []
  );
  const [filterType, setFilterType] = React.useState<FilterType>("all");
  const [isLoading, setIsLoading] = React.useState(true);
  const [previewPhoto, setPreviewPhoto] = React.useState<string | null>(null);

  const loadData = React.useCallback(async () => {
    setIsLoading(true);
    setSubmissions(await fetchAllSubmissions());
    setIsLoading(false);
  }, []);

  React.useEffect(() => {
    loadData();
  }, [loadData]);

  const handleStatusChange = async (id: string, status: SubmissionStatus) => {
    setSubmissions(await updateSubmissionStatus(id, status));
  };

  const handleDelete = async (id: string) => {
    setSubmissions(await deleteSubmission(id));
  };

  const filteredList = submissions.filter((item) =>
    filterType === "all" ? true : item.type === filterType
  );
  const totalDevis = submissions.filter((i) => i.type === "devis").length;
  const totalCommandes = submissions.filter(
    (i) => i.type === "commande"
  ).length;

  const filters: {
    id: FilterType;
    label: string;
    icon?: React.ComponentType<{ className?: string }>;
  }[] = [
    { id: "all", label: `Tout (${submissions.length})` },
    { id: "devis", label: `Demandes de Devis (${totalDevis})`, icon: FileText },
    {
      id: "commande",
      label: `Commandes Boutique (${totalCommandes})`,
      icon: ShoppingBag,
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#FAF8F5] py-6 sm:py-12">
      <div className="container max-w-6xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-kenenti-navy/10 bg-white p-4 sm:p-6 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-kenenti-navy text-kenenti-yellow">
              <LayoutDashboard className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-[10px] sm:text-xs font-heading font-bold uppercase tracking-widest text-[#D98A1C]">
                Administration KENENTI
              </p>
              <h1 className="font-heading text-lg sm:text-2xl font-extrabold text-kenenti-navy">
                Dashboard des Devis &amp; Commandes
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={loadData}
              className="inline-flex h-9 items-center gap-1.5 rounded-xl border border-kenenti-navy/12 bg-[#FAF8F5] px-3.5 font-heading text-xs font-bold text-kenenti-navy hover:bg-white cursor-pointer"
            >
              <RefreshCw
                className={cn("h-3.5 w-3.5", isLoading && "animate-spin")}
              />
              <span>Actualiser</span>
            </button>
            <Link
              href="/services"
              className="inline-flex h-9 items-center rounded-xl bg-kenenti-navy px-3.5 font-heading text-xs font-extrabold text-kenenti-yellow"
            >
              + Nouveau Devis
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {filters.map((f) => {
            const Icon = f.icon;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilterType(f.id)}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 font-heading text-xs font-extrabold transition-all cursor-pointer",
                  filterType === f.id
                    ? "bg-kenenti-navy text-kenenti-yellow"
                    : "bg-white text-kenenti-navy/75 border border-kenenti-navy/10"
                )}
              >
                {Icon && <Icon className="h-3.5 w-3.5" />}
                <span>{f.label}</span>
              </button>
            );
          })}
        </div>

        {filteredList.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-kenenti-navy/20 bg-white p-10 text-center space-y-2">
            <p className="font-heading text-sm sm:text-base font-extrabold text-kenenti-navy">
              Aucune demande ou commande enregistrée pour le moment
            </p>
            <p className="text-xs text-kenenti-navy/65">
              Les demandes de devis soumises depuis <strong>/services</strong>{" "}
              et les commandes passées depuis <strong>/panier</strong>{" "}
              s&apos;affichent ici automatiquement.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredList.map((item) => (
              <SubmissionCard
                key={item.id}
                item={item}
                onStatusChange={handleStatusChange}
                onDelete={handleDelete}
                onPreviewPhoto={setPreviewPhoto}
              />
            ))}
          </div>
        )}
      </div>

      {previewPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setPreviewPhoto(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 cursor-pointer"
        >
          <img
            src={previewPhoto}
            alt="Aperçu photo client"
            className="max-h-[85vh] max-w-[92vw] rounded-2xl object-contain shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}
