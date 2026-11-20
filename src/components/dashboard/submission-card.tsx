import { MapPin, Phone, Trash2, User } from "lucide-react";
import type {
  DashboardSubmission,
  SubmissionStatus,
} from "@/lib/orders-store";
import { cn } from "@/lib/utils";

const STATUS_OPTIONS: SubmissionStatus[] = [
  "En attente",
  "En cours",
  "Terminé",
];

interface SubmissionCardProps {
  item: DashboardSubmission;
  onStatusChange: (id: string, status: SubmissionStatus) => void;
  onDelete: (id: string) => void;
  onPreviewPhoto: (src: string) => void;
}

export function SubmissionCard({
  item,
  onStatusChange,
  onDelete,
  onPreviewPhoto,
}: SubmissionCardProps) {
  const dateDisplay = new Date(item.createdAt).toLocaleString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <article className="rounded-2xl border border-kenenti-navy/10 bg-white p-4 sm:p-6 shadow-xs space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-kenenti-navy/8 pb-3">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={cn(
              "rounded-lg px-2.5 py-1 font-heading text-xs font-extrabold",
              item.type === "devis"
                ? "bg-kenenti-navy text-kenenti-yellow"
                : "bg-kenenti-yellow text-kenenti-navy"
            )}
          >
            {item.type === "devis" ? "DEVIS SERVICE" : "COMMANDE BOUTIQUE"} •{" "}
            {item.id}
          </span>
          <span className="text-xs text-kenenti-navy/55 font-medium">
            {dateDisplay}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <select
            value={item.status}
            onChange={(e) =>
              onStatusChange(item.id, e.target.value as SubmissionStatus)
            }
            aria-label={`Statut de ${item.id}`}
            className={cn(
              "h-8 rounded-lg border px-2.5 font-heading text-xs font-bold cursor-pointer focus:outline-none",
              item.status === "Terminé"
                ? "bg-[#25D366]/15 border-[#25D366]/40 text-[#199E48]"
                : item.status === "En cours"
                ? "bg-kenenti-yellow/25 border-kenenti-yellow text-kenenti-navy"
                : "bg-[#FAF8F5] border-kenenti-navy/15 text-kenenti-navy"
            )}
          >
            {STATUS_OPTIONS.map((st) => (
              <option key={st} value={st}>
                {st}
              </option>
            ))}
          </select>

          <button
            type="button"
            onClick={() => onDelete(item.id)}
            aria-label={`Supprimer ${item.id}`}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-kenenti-red hover:bg-kenenti-red/10 cursor-pointer"
          >
            <Trash2 className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 rounded-xl bg-[#FAF8F5] p-3 text-xs">
        <div className="flex items-center gap-2">
          <User className="h-3.5 w-3.5 text-[#D98A1C] shrink-0" />
          <span className="font-heading font-extrabold text-kenenti-navy">
            {item.clientName}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="h-3.5 w-3.5 text-[#D98A1C] shrink-0" />
          <a
            href={`tel:${item.clientPhone}`}
            className="font-heading font-bold text-kenenti-navy hover:underline"
          >
            {item.clientPhone}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-3.5 w-3.5 text-[#D98A1C] shrink-0" />
          <span className="text-kenenti-navy/80">{item.clientCity}</span>
        </div>
      </div>

      {item.type === "devis" ? (
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="rounded-full bg-kenenti-navy/8 px-3 py-1 font-heading font-extrabold text-kenenti-navy">
              Univers : {item.universe}
            </span>
            <span className="rounded-full bg-kenenti-yellow/25 px-3 py-1 font-heading font-extrabold text-kenenti-navy">
              Entretien : {item.careType}
            </span>
            <span className="rounded-full bg-[#FAF8F5] border border-kenenti-navy/10 px-3 py-1 font-heading font-semibold text-kenenti-navy/80">
              {item.logisticsMode}
            </span>
          </div>

          <div className="rounded-xl border border-kenenti-navy/10 bg-white p-3">
            <p className="text-[11px] font-heading font-bold uppercase tracking-wider text-kenenti-navy/50 mb-1">
              Description du client
            </p>
            <p className="text-xs sm:text-sm text-kenenti-navy">
              {item.description}
            </p>
          </div>

          {item.photos.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {item.photos.map((photoSrc, pIdx) => (
                <button
                  key={`${item.id}-photo-${pIdx}`}
                  type="button"
                  onClick={() => onPreviewPhoto(photoSrc)}
                  className="relative h-28 overflow-hidden rounded-xl border border-kenenti-navy/15 bg-kenenti-navy cursor-pointer group"
                >
                  <img
                    src={photoSrc}
                    alt={`Photo ${pIdx + 1}`}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-3">
          {(item.deliveryMode || item.estimatedTotal) && (
            <div className="flex flex-wrap items-center gap-2 text-xs">
              {item.deliveryMode && (
                <span className="rounded-full bg-kenenti-navy/8 px-3 py-1 font-heading font-extrabold text-kenenti-navy">
                  {item.deliveryMode}
                </span>
              )}
              {item.estimatedTotal && (
                <span className="rounded-full bg-kenenti-yellow/25 px-3 py-1 font-heading font-extrabold text-kenenti-navy">
                  Total : {item.estimatedTotal}
                </span>
              )}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {item.items.map((prod, idx) => (
              <div
                key={`${item.id}-prod-${idx}`}
                className="flex items-center gap-3 rounded-xl border border-kenenti-navy/10 bg-[#FAF8F5] p-2.5"
              >
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="h-12 w-12 shrink-0 rounded-lg bg-white object-contain p-1 border border-kenenti-navy/8"
                />
                <div className="min-w-0">
                  <p className="font-heading text-xs font-extrabold text-kenenti-navy truncate">
                    {prod.name} × {prod.quantity}
                  </p>
                  {prod.variant && (
                    <p className="text-[11px] text-kenenti-navy/70">
                      Teinte : {prod.variant}
                    </p>
                  )}
                  <p className="text-[11px] font-heading font-bold text-[#D98A1C]">
                    {prod.priceDisplay}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {item.notes && (
            <div className="rounded-xl border border-kenenti-navy/10 bg-white p-3">
              <p className="text-[11px] font-heading font-bold uppercase tracking-wider text-kenenti-navy/50 mb-0.5">
                Note client
              </p>
              <p className="text-xs text-kenenti-navy">{item.notes}</p>
            </div>
          )}
        </div>
      )}
    </article>
  );
}
