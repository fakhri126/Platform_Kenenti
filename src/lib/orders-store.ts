export type SubmissionStatus = "En attente" | "En cours" | "Terminé";

export interface ServiceQuoteSubmission {
  id: string;
  type: "devis";
  createdAt: string;
  status: SubmissionStatus;
  universe: string;
  careType: string;
  logisticsMode: string;
  description: string;
  photos: string[];
  clientName: string;
  clientPhone: string;
  clientCity: string;
}

export interface BoutiqueOrderSubmission {
  id: string;
  type: "commande";
  createdAt: string;
  status: SubmissionStatus;
  items: {
    productId: string;
    name: string;
    priceDisplay: string;
    quantity: number;
    variant: string;
    image: string;
  }[];
  deliveryMode?: string;
  estimatedTotal?: string;
  notes?: string;
  clientName: string;
  clientPhone: string;
  clientCity: string;
}

export type DashboardSubmission =
  | ServiceQuoteSubmission
  | BoutiqueOrderSubmission;

const STORAGE_KEY = "kenenti_dashboard_submissions_v1";

function readLocalSubmissions(): DashboardSubmission[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as DashboardSubmission[]) : [];
  } catch {
    return [];
  }
}

function saveLocalSubmissions(items: DashboardSubmission[]) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // Ignore storage quota errors
  }
}

async function syncWithApi(
  url: string,
  init: RequestInit | undefined,
  fallback: DashboardSubmission[]
): Promise<DashboardSubmission[]> {
  try {
    const res = await fetch(url, init);
    if (res.ok) {
      const serverList = (await res.json()) as DashboardSubmission[];
      saveLocalSubmissions(serverList);
      return serverList;
    }
  } catch {
    // Fallback to localStorage copy
  }
  return fallback;
}

export async function fetchAllSubmissions(): Promise<DashboardSubmission[]> {
  return syncWithApi("/api/orders", { cache: "no-store" }, readLocalSubmissions());
}

export async function createSubmission(
  submission: DashboardSubmission
): Promise<DashboardSubmission[]> {
  const next = [submission, ...readLocalSubmissions()];
  saveLocalSubmissions(next);

  return syncWithApi(
    "/api/orders",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(submission),
    },
    next
  );
}

export async function updateSubmissionStatus(
  id: string,
  status: SubmissionStatus
): Promise<DashboardSubmission[]> {
  const next = readLocalSubmissions().map((item) =>
    item.id === id ? { ...item, status } : item
  );
  saveLocalSubmissions(next);

  return syncWithApi(
    "/api/orders",
    {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    },
    next
  );
}

export async function deleteSubmission(
  id: string
): Promise<DashboardSubmission[]> {
  const next = readLocalSubmissions().filter((item) => item.id !== id);
  saveLocalSubmissions(next);

  return syncWithApi(
    `/api/orders?id=${encodeURIComponent(id)}`,
    { method: "DELETE" },
    next
  );
}

export function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result ?? ""));
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}
