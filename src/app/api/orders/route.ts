import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import type {
  DashboardSubmission,
  SubmissionStatus,
} from "@/lib/orders-store";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "submissions.json");

async function readSubmissions(): Promise<DashboardSubmission[]> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf8");
    return JSON.parse(raw) as DashboardSubmission[];
  } catch {
    return [];
  }
}

async function writeSubmissions(items: DashboardSubmission[]): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(items, null, 2), "utf8");
}

export async function GET() {
  const items = await readSubmissions();
  return NextResponse.json(items);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as DashboardSubmission;
    const items = await readSubmissions();
    const updated = [body, ...items.filter((i) => i.id !== body.id)];
    await writeSubmissions(updated);
    return NextResponse.json(updated);
  } catch {
    return NextResponse.json(
      { error: "Erreur lors de l'enregistrement" },
      { status: 400 }
    );
  }
}

export async function PATCH(request: Request) {
  try {
    const { id, status } = (await request.json()) as {
      id: string;
      status: SubmissionStatus;
    };
    const items = await readSubmissions();
    const updated = items.map((item) =>
      item.id === id ? { ...item, status } : item
    );
    await writeSubmissions(updated);
    return NextResponse.json(updated);
  } catch {
    return NextResponse.json(
      { error: "Erreur lors de la mise à jour" },
      { status: 400 }
    );
  }
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const items = await readSubmissions();
  const updated = id ? items.filter((item) => item.id !== id) : items;
  await writeSubmissions(updated);
  return NextResponse.json(updated);
}
