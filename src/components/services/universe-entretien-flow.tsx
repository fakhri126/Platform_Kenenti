"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { KENENTI_BRAND, type UniverseItem } from "@/lib/kenenti-data";
import {
  LOGISTICS_MODES,
  type UniverseServiceConfig,
} from "@/lib/services-catalog";
import {
  createSubmission,
  fileToDataUrl,
  type ServiceQuoteSubmission,
} from "@/lib/orders-store";
import { PastWorksCarousel } from "@/components/services/past-works-carousel";
import {
  StepProgressBar,
  type StepItem,
} from "@/components/services/step-progress-bar";
import {
  CareSelectionStep,
  ClientFormStep,
  PhotosDescriptionStep,
  QuoteConfirmationCard,
  type UploadedPreview,
} from "@/components/services/quote-steps";

const STEPS: StepItem[] = [
  { num: 1, label: "Entretien" },
  { num: 2, label: "Photos & Description" },
  { num: 3, label: "Formulaire" },
];

interface UniverseEntretienFlowProps {
  universe: UniverseItem;
  config: UniverseServiceConfig;
}

export function UniverseEntretienFlow({
  universe,
  config,
}: UniverseEntretienFlowProps) {
  const [step, setStep] = React.useState<1 | 2 | 3>(1);
  const [selectedCare, setSelectedCare] = React.useState("");
  const [uploadedPhotos, setUploadedPhotos] = React.useState<UploadedPreview[]>(
    []
  );
  const [description, setDescription] = React.useState("");
  const [selectedMode, setSelectedMode] = React.useState(
    LOGISTICS_MODES[0].label
  );
  const [clientName, setClientName] = React.useState("");
  const [clientPhone, setClientPhone] = React.useState("");
  const [clientCity, setClientCity] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submittedQuote, setSubmittedQuote] =
    React.useState<ServiceQuoteSubmission | null>(null);

  const isStep1Complete = selectedCare.trim().length > 0;
  const isStep2Complete =
    uploadedPhotos.length >= 1 && description.trim().length > 0;
  const isStep3Complete =
    clientName.trim().length > 0 &&
    clientPhone.trim().length > 0 &&
    clientCity.trim().length > 0;

  React.useEffect(() => {
    return () => {
      uploadedPhotos.forEach((item) => URL.revokeObjectURL(item.url));
    };
  }, [uploadedPhotos]);

  const canAccessStep = (target: 1 | 2 | 3): boolean => {
    if (target === 1) return true;
    if (target === 2) return isStep1Complete;
    return isStep1Complete && isStep2Complete;
  };

  const goToStep = (target: 1 | 2 | 3) => {
    if (!canAccessStep(target)) return;
    setStep(target);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFilesSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    if (files.length === 0) return;

    setUploadedPhotos((prev) => {
      const remaining = Math.max(0, 4 - prev.length);
      const nextFiles = files.slice(0, remaining).map((file) => ({
        id: `${file.name}-${file.lastModified}-${Math.random().toString(36).slice(2, 6)}`,
        file,
        url: URL.createObjectURL(file),
      }));
      return [...prev, ...nextFiles];
    });
  };

  const handleRemovePhoto = (id: string) => {
    setUploadedPhotos((prev) => {
      const target = prev.find((p) => p.id === id);
      if (target) URL.revokeObjectURL(target.url);
      return prev.filter((p) => p.id !== id);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isStep1Complete || !isStep2Complete || !isStep3Complete) return;

    setIsSubmitting(true);
    try {
      const photos = await Promise.all(
        uploadedPhotos.map((item) => fileToDataUrl(item.file))
      );

      const newQuote: ServiceQuoteSubmission = {
        id: `DEV-${Date.now().toString().slice(-6)}`,
        type: "devis",
        createdAt: new Date().toISOString(),
        status: "En attente",
        universe: universe.title,
        careType: selectedCare,
        logisticsMode: selectedMode,
        description: description.trim(),
        photos,
        clientName: clientName.trim(),
        clientPhone: clientPhone.trim(),
        clientCity: clientCity.trim(),
      };

      await createSubmission(newQuote);
      setSubmittedQuote(newQuote);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmittedQuote(null);
    setStep(1);
    setSelectedCare("");
    setUploadedPhotos([]);
    setDescription("");
    setClientName("");
    setClientPhone("");
    setClientCity("");
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#FAF8F5] via-white to-[#F5F2EC] py-6 sm:py-10 lg:py-14">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(250,185,91,0.14),transparent_60%)]"
      />

      <div className="container relative z-10 max-w-4xl">
        <div className="mb-4 sm:mb-6 flex items-center justify-between gap-2">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 font-heading text-xs font-bold text-kenenti-navy/70 hover:text-kenenti-navy transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Changer d&apos;univers</span>
          </Link>

          <span className="rounded-full bg-white border border-kenenti-navy/12 px-3 py-1 font-heading text-[11px] font-extrabold text-kenenti-navy shadow-2xs">
            0{universe.id} • {universe.title}
          </span>
        </div>

        <div className="text-center mb-5 sm:mb-7">
          <p className="text-[10px] sm:text-xs font-heading font-bold uppercase tracking-widest text-[#D98A1C] mb-1">
            Nos Services • « {KENENTI_BRAND.slogan} »
          </p>
          <h1 className="font-heading text-lg sm:text-3xl font-extrabold text-kenenti-navy tracking-tight">
            {universe.title}
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-kenenti-navy/70 max-w-xl mx-auto">
            {universe.description}
          </p>
        </div>

        {submittedQuote ? (
          <QuoteConfirmationCard quote={submittedQuote} onReset={handleReset} />
        ) : (
          <>
            <StepProgressBar
              steps={STEPS}
              currentStep={step}
              canAccessStep={canAccessStep}
              onSelectStep={goToStep}
            />

            {step === 1 && (
              <div className="rounded-2xl border border-kenenti-navy/10 bg-white p-4 sm:p-7 shadow-[0_12px_34px_-12px_rgba(26,50,99,0.12)] space-y-6 sm:space-y-8">
                <PastWorksCarousel
                  universeTitle={universe.title}
                  examples={config.pastExamples}
                />
                <CareSelectionStep
                  universeTitle={universe.title}
                  careOptions={config.careOptions}
                  selectedCare={selectedCare}
                  onSelectCare={setSelectedCare}
                  onNext={() => goToStep(2)}
                />
              </div>
            )}

            {step === 2 && (
              <PhotosDescriptionStep
                universeTitle={universe.title}
                selectedCare={selectedCare}
                photos={uploadedPhotos}
                description={description}
                onFilesSelected={handleFilesSelected}
                onRemovePhoto={handleRemovePhoto}
                onDescriptionChange={setDescription}
                onBack={() => goToStep(1)}
                onNext={() => goToStep(3)}
              />
            )}

            {step === 3 && (
              <ClientFormStep
                universeTitle={universe.title}
                selectedCare={selectedCare}
                photoCount={uploadedPhotos.length}
                selectedMode={selectedMode}
                clientName={clientName}
                clientPhone={clientPhone}
                clientCity={clientCity}
                isSubmitting={isSubmitting}
                onSelectMode={setSelectedMode}
                onNameChange={setClientName}
                onPhoneChange={setClientPhone}
                onCityChange={setClientCity}
                onBack={() => goToStep(2)}
                onSubmit={handleSubmit}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}
