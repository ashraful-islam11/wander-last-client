export type Destination = {
  _id: string;
  name: string;
  country: string;
  category?: string;
  price: string | number;
  duration: string;
  departureDate?: string;
  imageUrl: string;
  description?: string;
};

const API_BASE_URL = process.env.API_URL ?? "http://localhost:8000";

export async function getDestinations(): Promise<Destination[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/destination`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to load destinations (${res.status})`);
    }

    return (await res.json()) as Destination[];
  } catch (error) {
    console.error("Could not fetch destinations:", error);
    return [];
  }
}

export async function getDestinationById(id: string) {
  const destinations = await getDestinations();
  return destinations.find((destination) => destination._id === id) ?? null;
}

/** Turns values like "7days" or "10 days" into "7 Days / 6 Nights". */
export function formatDuration(duration: string) {
  const value = duration?.trim() ?? "";
  const match = value.match(/(\d+)\s*day/i);

  if (!match) return value || "Flexible duration";

  const days = Number(match[1]);
  const nights = Math.max(days - 1, 0);
  return `${days} Days / ${nights} Nights`;
}

export function formatPrice(price: string | number) {
  const value = typeof price === "number" ? price : Number(price);
  return Number.isFinite(value) ? `$${value}` : `$${price}`;
}

/** Removes stray quotation marks that may come from the API data. */
export function cleanDescription(description?: string) {
  return description?.replace(/^"+|"+$/g, "").trim() ?? "";
}
