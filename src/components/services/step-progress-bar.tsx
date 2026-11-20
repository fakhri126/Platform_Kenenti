import * as React from "react";
import { Check, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

export interface StepItem {
  num: 1 | 2 | 3;
  label: string;
}

interface StepProgressBarProps {
  steps: StepItem[];
  currentStep: 1 | 2 | 3;
  canAccessStep?: (step: 1 | 2 | 3) => boolean;
  onSelectStep?: (step: 1 | 2 | 3) => void;
}

export function StepProgressBar({
  steps,
  currentStep,
  canAccessStep,
  onSelectStep,
}: StepProgressBarProps) {
  return (
    <nav
      aria-label="Étapes de votre demande de devis"
      className="mx-auto max-w-lg mb-6 sm:mb-8"
    >
      <div className="flex items-center justify-between">
        {steps.map((s, idx) => {
          const isCurrent = currentStep === s.num;
          const isCompleted = currentStep > s.num;
          const unlocked = canAccessStep ? canAccessStep(s.num) : isCurrent;
          const isInteractive = Boolean(onSelectStep);

          const circleClass = cn(
            "flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full font-heading text-xs sm:text-sm font-extrabold transition-all",
            isCurrent
              ? "bg-kenenti-navy text-kenenti-yellow ring-4 ring-kenenti-yellow/30 shadow-sm scale-105"
              : isCompleted
              ? "bg-kenenti-yellow text-kenenti-navy"
              : "bg-white text-kenenti-navy/45 border border-kenenti-navy/15"
          );

          const labelClass = cn(
            "font-heading text-[10px] sm:text-xs font-extrabold whitespace-nowrap transition-colors",
            isCurrent
              ? "text-kenenti-navy"
              : isCompleted
              ? "text-[#D98A1C]"
              : "text-kenenti-navy/45"
          );

          const content = (
            <>
              <span className={circleClass}>
                {isCompleted ? (
                  <Check className="h-4 w-4 stroke-[3]" aria-hidden="true" />
                ) : unlocked ? (
                  s.num
                ) : (
                  <Lock className="h-3.5 w-3.5" aria-hidden="true" />
                )}
              </span>
              <span className={labelClass}>{s.label}</span>
            </>
          );

          return (
            <React.Fragment key={s.num}>
              {isInteractive ? (
                <button
                  type="button"
                  disabled={!unlocked}
                  onClick={() => onSelectStep?.(s.num)}
                  aria-current={isCurrent ? "step" : undefined}
                  className={cn(
                    "flex flex-col items-center gap-1.5 focus-visible:outline-none",
                    unlocked
                      ? "cursor-pointer"
                      : "cursor-not-allowed opacity-60"
                  )}
                >
                  {content}
                </button>
              ) : (
                <div
                  aria-current={isCurrent ? "step" : undefined}
                  className={cn(
                    "flex flex-col items-center gap-1.5",
                    !isCurrent && "opacity-60"
                  )}
                >
                  {content}
                </div>
              )}

              {idx < steps.length - 1 && (
                <div
                  aria-hidden="true"
                  className={cn(
                    "flex-1 h-[2px] mx-2 sm:mx-4 mb-5 rounded-full transition-colors",
                    currentStep > s.num
                      ? "bg-kenenti-yellow"
                      : "bg-kenenti-navy/12"
                  )}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
}
