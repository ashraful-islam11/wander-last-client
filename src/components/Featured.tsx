import FeaturedSection from "@/components/FeaturedSection";
import type { Destination } from "@/lib/destinations";

const Featured = async () => {
  let data: Destination[] = [];

  try {
    const res = await fetch("http://localhost:8000/featured-destination", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to load featured destinations (${res.status})`);
    }

    data = (await res.json()) as Destination[];
  } catch (error) {
    console.error("Could not fetch featured destinations:", error);
  }

  return <FeaturedSection destinations={data} />;
};

export default Featured;
