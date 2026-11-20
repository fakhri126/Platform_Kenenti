"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  ImagePlus,
  LayoutDashboard,
  Trash2,
} from "lucide-react";
import {
  LOGISTICS_MODES,
  type UniverseCareOption,
} from "@/lib/services-catalog";
import type { ServiceQuoteSubmission } from "@/lib/orders-store";
import { cn } from "@/lib/utils";

export interface UploadedPreview {
  id: string;
  file: File;
  url: string;
}

const INPUT_CLASS =
  "h-10 w-full rounded-xl border border-kenenti-navy/12 bg-[#FAF8F5] px-3 text-xs sm:text-sm text-kenenti-navy placeholder:text-kenenti-navy/40 focus:border-kenenti-navy focus:bg-white focus:outline-none";

/* -------------------------------------------------------------------------- */
/* Étape 1 : Sélection du type d'entretien                                    */
/* -------------------------------------------------------------------------- */
export function CareSelectionStep({
  universeTitle,
  careOptions,
  selectedCare,
  onSelectCare,
  onNext,
}: {
  universeTitle: string;
  careOptions: UniverseCareOption[];
  selectedCare: string;
  onSelectCare: (title: string) => void;
  onNext: () => void;
}) {
  const isComplete = selectedCare.trim().length > 0;

  return (
    <section
      aria-labelledby="step1-care-heading"
      className="pt-5 border-t border-kenenti-navy/10 space-y-4"
    >
      <div>
        <span className="text-[10px] sm:text-xs font-heading font-bold uppercase tracking-widest text-[#D98A1C]">
          Étape 1 sur 3 (Obligatoire)
        </span>
        <h2
          id="step1-care-heading"
          className="font-heading text-base sm:text-xl font-extrabold text-kenenti-navy"
        >
          Choisissez votre type d&apos;entretien
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
        {careOptions.map((care) => {
          const isSelected = selectedCare === care.title;
          return (
            <button
              key={care.id}
              type="button"
              aria-pressed={isSelected}
              onClick={() => onSelectCare(care.title)}
              className={cn(
                "flex flex-col justify-between rounded-xl border p-3.5 sm:p-4 text-left transition-all cursor-pointer",
                isSelected
                  ? "bg-kenenti-navy text-white border-kenenti-navy ring-2 ring-kenenti-yellow shadow-sm"
                  : "bg-[#FAF8F5] text-kenenti-navy border-kenenti-navy/10 hover:bg-white hover:border-kenenti-navy/30"
              )}
            >
              <div className="flex items-start justify-between gap-2">
                <span
                  className={cn(
                    "font-heading text-xs sm:text-sm font-extrabold leading-snug",
                    isSelected ? "text-kenenti-yellow" : "text-kenenti-navy"
                  )}
                >
                  {care.title}
                </span>
                <span
                  className={cn(
                    "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border",
                    isSelected
                      ? "bg-kenenti-yellow border-kenenti-yellow text-kenenti-navy"
                      : "border-kenenti-navy/25 bg-white"
                  )}
                >
                  {isSelected && <Check className="h-3 w-3 stroke-[3]" />}
                </span>
              </div>
              <p
                className={cn(
                  "mt-1.5 text-[11px] sm:text-xs leading-snug",
                  isSelected ? "text-white/80" : "text-kenenti-navy/65"
                )}
              >
                {care.shortDesc}
              </p>
            </button>
          );
        })}
      </div>

      <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        {isComplete ? (
          <p className="text-xs font-heading font-bold text-[#199E48]">
            ✓ {universeTitle} — {selectedCare}
          </p>
        ) : (
          <p className="text-xs font-heading font-semibold text-kenenti-red">
            Veuillez sélectionner un type d&apos;entretien pour passer à
            l&apos;étape 2.
          </p>
        )}

        <button
          type="button"
          disabled={!isComplete}
          onClick={onNext}
          className={cn(
            "inline-flex h-11 sm:h-12 items-center justify-center gap-2 rounded-xl px-7 font-heading text-xs sm:text-sm font-extrabold transition-all",
            isComplete
              ? "bg-kenenti-yellow text-kenenti-navy shadow-sm hover:bg-[#f2aa40] cursor-pointer"
              : "bg-kenenti-navy/10 text-kenenti-navy/40 cursor-not-allowed"
          )}
        >
          <span>Suivant : Photos &amp; Description (Étape 2)</span>
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Étape 2 : Upload 1 à 4 photos + Petite description                         */
/* -------------------------------------------------------------------------- */
export function PhotosDescriptionStep({
  universeTitle,
  selectedCare,
  photos,
  description,
  onFilesSelected,
  onRemovePhoto,
  onDescriptionChange,
  onBack,
  onNext,
}: {
  universeTitle: string;
  selectedCare: string;
  photos: UploadedPreview[];
  description: string;
  onFilesSelected: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemovePhoto: (id: string) => void;
  onDescriptionChange: (value: string) => void;
  onBack: () => void;
  onNext: () => void;
}) {
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);
  const isComplete = photos.length >= 1 && description.trim().length > 0;

  return (
    <section
      aria-labelledby="step2-upload-heading"
      className="mx-auto max-w-xl rounded-2xl border border-kenenti-navy/10 bg-white p-5 sm:p-7 shadow-[0_10px_32px_-12px_rgba(26,50,99,0.12)] space-y-5"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl bg-[#FAF8F5] px-3.5 py-2.5 border border-kenenti-navy/8 text-xs">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="font-heading font-extrabold text-kenenti-navy">
            {universeTitle}
          </span>
          <span className="text-kenenti-navy/35">•</span>
          <span className="font-heading font-bold text-[#D98A1C]">
            {selectedCare}
          </span>
        </div>
        <button
          type="button"
          onClick={onBack}
          className="font-heading text-[11px] font-bold text-kenenti-navy/70 underline hover:text-kenenti-navy cursor-pointer"
        >
          Modifier
        </button>
      </div>

      <div className="flex items-center justify-between gap-2">
        <div>
          <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-[#D98A1C]">
            Étape 2 sur 3 (Obligatoire)
          </span>
          <h2
            id="step2-upload-heading"
            className="font-heading text-base sm:text-xl font-extrabold text-kenenti-navy"
          >
            Photos (1 à 4) &amp; Petite Description
          </h2>
        </div>
        <span className="rounded-full bg-[#FAF8F5] border border-kenenti-navy/10 px-2.5 py-0.5 font-heading text-[11px] font-bold text-kenenti-navy">
          {photos.length} / 4
        </span>
      </div>

      <input
        ref={fileInputRef}
        id="service-photo-upload"
        type="file"
        accept="image/*"
        multiple
        onChange={(e) => {
          onFilesSelected(e);
          if (fileInputRef.current) fileInputRef.current.value = "";
        }}
        className="sr-only"
      />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {photos.map((item, idx) => (
          <div
            key={item.id}
            className="relative h-28 overflow-hidden rounded-xl border border-kenenti-yellow bg-kenenti-navy"
          >
            <img
              src={item.url}
              alt={`Image ${idx + 1}`}
              className="h-full w-full object-cover"
            />
            <button
              type="button"
              onClick={() => onRemovePhoto(item.id)}
              aria-label={`Supprimer l'image ${idx + 1}`}
              className="absolute top-1.5 right-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-black/65 text-white hover:bg-kenenti-red transition-colors cursor-pointer"
            >
              <Trash2 className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          </div>
        ))}

        {photos.length < 4 && (
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className={cn(
              "group flex h-28 flex-col items-center justify-center gap-1.5 rounded-xl border border-dashed border-kenenti-navy/25 bg-[#FAF8F5] p-3 text-center transition-all hover:border-kenenti-navy/50 hover:bg-white cursor-pointer",
              photos.length === 0 && "col-span-2 sm:col-span-4"
            )}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white border border-kenenti-navy/10 text-kenenti-navy group-hover:bg-kenenti-navy group-hover:text-kenenti-yellow transition-colors">
              <ImagePlus className="h-4 w-4" aria-hidden="true" />
            </span>
            <span className="font-heading text-xs font-extrabold text-kenenti-navy">
              Ajouter des photos (1 à 4 images)
            </span>
          </button>
        )}
      </div>

      <div>
        <label
          htmlFor="service-description"
          className="block font-heading text-xs font-bold text-kenenti-navy mb-1.5"
        >
          Petite description *
        </label>
        <textarea
          id="service-description"
          rows={3}
          required
          value={description}
          onChange={(e) => onDescriptionChange(e.target.value)}
          placeholder="Décrivez brièvement votre article et le besoin..."
          className="w-full rounded-xl border border-kenenti-navy/12 bg-[#FAF8F5] p-3 text-xs sm:text-sm text-kenenti-navy placeholder:text-kenenti-navy/45 focus:border-kenenti-navy focus:bg-white focus:outline-none transition-colors resize-none"
        />
      </div>

      {!isComplete && (
        <p className="text-[11px] font-heading font-semibold text-kenenti-red">
          Veuillez ajouter au moins 1 photo et une petite description pour
          passer à l&apos;étape 3.
        </p>
      )}

      <div className="pt-2 flex items-center justify-between gap-2.5">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex h-11 items-center justify-center gap-1.5 rounded-xl border border-kenenti-navy/15 bg-white px-4 font-heading text-xs font-bold text-kenenti-navy hover:bg-[#FAF8F5] cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          <span>Retour</span>
        </button>

        <button
          type="button"
          disabled={!isComplete}
          onClick={onNext}
          className={cn(
            "inline-flex h-11 flex-1 sm:flex-initial items-center justify-center gap-2 rounded-xl px-6 font-heading text-xs sm:text-sm font-extrabold transition-all",
            isComplete
              ? "bg-kenenti-yellow text-kenenti-navy shadow-sm hover:bg-[#f2aa40] cursor-pointer"
              : "bg-kenenti-navy/10 text-kenenti-navy/40 cursor-not-allowed"
          )}
        >
          <span>Suivant : Formulaire (Étape 3)</span>
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Étape 3 : Coordonnées & Prise en charge -> Dashboard                       */
/* -------------------------------------------------------------------------- */
export function ClientFormStep({
  universeTitle,
  selectedCare,
  photoCount,
  selectedMode,
  clientName,
  clientPhone,
  clientCity,
  isSubmitting,
  onSelectMode,
  onNameChange,
  onPhoneChange,
  onCityChange,
  onBack,
  onSubmit,
}: {
  universeTitle: string;
  selectedCare: string;
  photoCount: number;
  selectedMode: string;
  clientName: string;
  clientPhone: string;
  clientCity: string;
  isSubmitting: boolean;
  onSelectMode: (mode: string) => void;
  onNameChange: (v: string) => void;
  onPhoneChange: (v: string) => void;
  onCityChange: (v: string) => void;
  onBack: () => void;
  onSubmit: (e: React.FormEvent) => void;
}) {
  const isComplete =
    clientName.trim().length > 0 &&
    clientPhone.trim().length > 0 &&
    clientCity.trim().length > 0;

  return (
    <form
      onSubmit={onSubmit}
      aria-labelledby="step3-form-heading"
      className="mx-auto max-w-xl rounded-2xl border border-kenenti-navy/10 bg-white p-5 sm:p-7 shadow-[0_10px_32px_-12px_rgba(26,50,99,0.12)] space-y-5"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl bg-[#FAF8F5] px-3.5 py-2.5 border border-kenenti-navy/8 text-xs">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="font-heading font-extrabold text-kenenti-navy">
            {universeTitle}
          </span>
          <span className="text-kenenti-navy/35">•</span>
          <span className="font-heading font-bold text-[#D98A1C]">
            {selectedCare}
          </span>
          <span className="text-kenenti-navy/35">•</span>
          <span className="text-kenenti-navy/70 font-medium">
            {photoCount} photo(s)
          </span>
        </div>
        <button
          type="button"
          onClick={onBack}
          className="font-heading text-[11px] font-bold text-kenenti-navy/70 underline hover:text-kenenti-navy cursor-pointer"
        >
          Modifier
        </button>
      </div>

      <div>
        <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-[#D98A1C]">
          Étape 3 sur 3 (Obligatoire)
        </span>
        <h2
          id="step3-form-heading"
          className="font-heading text-base sm:text-xl font-extrabold text-kenenti-navy"
        >
          Vos Coordonnées &amp; Collecte
        </h2>
      </div>

      <div className="space-y-1.5">
        <label className="block font-heading text-xs font-bold text-kenenti-navy">
          Mode de prise en charge *
        </label>
        <div className="grid grid-cols-1 gap-2">
          {LOGISTICS_MODES.map((mode) => {
            const Icon = mode.icon;
            const isSelected = selectedMode === mode.label;
            return (
              <button
                key={mode.id}
                type="button"
                onClick={() => onSelectMode(mode.label)}
                className={cn(
                  "flex items-center justify-between gap-2 rounded-xl border px-3.5 py-2.5 text-left font-heading text-xs font-bold transition-all cursor-pointer",
                  isSelected
                    ? "bg-kenenti-navy text-white border-kenenti-navy"
                    : "bg-[#FAF8F5] border-kenenti-navy/10 text-kenenti-navy/85 hover:bg-white"
                )}
              >
                <span className="flex items-center gap-2 truncate">
                  <Icon
                    className={cn(
                      "h-4 w-4 shrink-0",
                      isSelected ? "text-kenenti-yellow" : "text-[#D98A1C]"
                    )}
                  />
                  <span className="truncate">{mode.label}</span>
                </span>
                {isSelected && (
                  <Check className="h-4 w-4 text-kenenti-yellow shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label
              htmlFor="quote-client-name"
              className="block font-heading text-xs font-bold text-kenenti-navy mb-1"
            >
              Nom &amp; Prénom *
            </label>
            <input
              id="quote-client-name"
              type="text"
              required
              value={clientName}
              onChange={(e) => onNameChange(e.target.value)}
              placeholder="Votre nom complet"
              className={INPUT_CLASS}
            />
          </div>

          <div>
            <label
              htmlFor="quote-client-phone"
              className="block font-heading text-xs font-bold text-kenenti-navy mb-1"
            >
              Téléphone *
            </label>
            <input
              id="quote-client-phone"
              type="tel"
              required
              value={clientPhone}
              onChange={(e) => onPhoneChange(e.target.value)}
              placeholder="Ex. : 29 000 000"
              className={INPUT_CLASS}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="quote-client-city"
            className="block font-heading text-xs font-bold text-kenenti-navy mb-1"
          >
            Ville / Adresse *
          </label>
          <input
            id="quote-client-city"
            type="text"
            required
            value={clientCity}
            onChange={(e) => onCityChange(e.target.value)}
            placeholder="Ex. : La Marsa, Menzah 6, Lac 2, Sousse..."
            className={INPUT_CLASS}
          />
        </div>
      </div>

      {!isComplete && (
        <p className="text-[11px] font-heading font-semibold text-kenenti-red">
          Veuillez renseigner votre nom, votre téléphone et votre adresse pour
          valider la demande.
        </p>
      )}

      <div className="pt-2 flex items-center justify-between gap-2.5">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex h-11 items-center justify-center gap-1.5 rounded-xl border border-kenenti-navy/15 bg-white px-4 font-heading text-xs font-bold text-kenenti-navy hover:bg-[#FAF8F5] cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          <span>Retour</span>
        </button>

        <button
          type="submit"
          disabled={!isComplete || isSubmitting}
          className={cn(
            "inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-xl px-5 font-heading text-xs sm:text-sm font-extrabold transition-all",
            isComplete && !isSubmitting
              ? "bg-kenenti-navy text-kenenti-yellow shadow-sm hover:bg-kenenti-navy/95 cursor-pointer"
              : "bg-kenenti-navy/10 text-kenenti-navy/40 cursor-not-allowed"
          )}
        >
          <Check className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>
            {isSubmitting ? "Enregistrement..." : "Valider ma demande de devis"}
          </span>
        </button>
      </div>
    </form>
  );
}

/* -------------------------------------------------------------------------- */
/* Confirmation après soumission                                              */
/* -------------------------------------------------------------------------- */
export function QuoteConfirmationCard({
  quote,
  onReset,
}: {
  quote: ServiceQuoteSubmission;
  onReset: () => void;
}) {
  return (
    <section className="mx-auto max-w-xl rounded-2xl border border-kenenti-navy/10 bg-white p-6 sm:p-8 text-center shadow-[0_12px_36px_-12px_rgba(26,50,99,0.14)] space-y-5">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366]/15 text-[#199E48]">
        <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
      </div>

      <div className="space-y-1.5">
        <span className="inline-block rounded-full bg-kenenti-yellow/25 px-3 py-0.5 font-heading text-xs font-extrabold text-kenenti-navy">
          Référence : {quote.id}
        </span>
        <h2 className="font-heading text-xl sm:text-2xl font-extrabold text-kenenti-navy">
          Votre demande de devis est enregistrée !
        </h2>
        <p className="text-xs sm:text-sm text-kenenti-navy/70">
          Votre dossier ({quote.universe} • {quote.careType}) a été transmis
          directement sur le tableau de bord de nos artisans.
        </p>
      </div>

      <div className="rounded-xl bg-[#FAF8F5] p-4 text-left text-xs space-y-1.5 border border-kenenti-navy/8">
        <p>
          <strong>Client :</strong> {quote.clientName} ({quote.clientPhone})
        </p>
        <p>
          <strong>Ville / Adresse :</strong> {quote.clientCity}
        </p>
        <p>
          <strong>Prise en charge :</strong> {quote.logisticsMode}
        </p>
        <p>
          <strong>Photos jointes :</strong> {quote.photos.length} photo(s)
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 pt-2">
        <button
          type="button"
          onClick={onReset}
          className="inline-flex h-11 w-full sm:w-auto items-center justify-center rounded-xl border border-kenenti-navy/15 bg-white px-5 font-heading text-xs font-bold text-kenenti-navy hover:bg-[#FAF8F5] cursor-pointer"
        >
          Nouvelle demande
        </button>
        <Link
          href="/dashboard"
          className="inline-flex h-11 w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-kenenti-navy px-6 font-heading text-xs font-extrabold text-kenenti-yellow shadow-sm"
        >
          <LayoutDashboard className="h-4 w-4" aria-hidden="true" />
          <span>Voir sur le Dashboard</span>
        </Link>
      </div>
    </section>
  );
}
