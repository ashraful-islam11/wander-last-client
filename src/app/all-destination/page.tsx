import Link from "next/link";
import DestinationCard from "@/components/DestinationCard";
import { getDestinations } from "@/lib/destinations";

export const dynamic = "force-dynamic";

const AllDestinationPage = async () => {
  const destinations = await getDestinations();

  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-14 lg:px-8">
        {/* Page heading */}
        <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h1 className="font-heading text-2xl font-light tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
              Explore All Destinations
            </h1>
            <p className="mt-2 text-sm text-slate-500 sm:text-base">
              Discover your next adventure from our hand-picked travel packages.
            </p>
          </div>
          <p className="text-sm text-slate-500">
            {destinations.length}{" "}
            {destinations.length === 1 ? "destination" : "destinations"}
          </p>
        </div>

        {destinations.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 px-6 py-16 text-center">
            <h2 className="text-lg font-medium text-slate-900">
              No destinations available
            </h2>
            <p className="mt-2 max-w-md text-sm text-slate-500">
              We couldn&apos;t load any travel packages right now. Please try
              again later or add a new destination.
            </p>
            <Link
              href="/add-destination"
              className="mt-6 inline-flex h-10 items-center justify-center rounded-md bg-[#15A1BF] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#128CA5]"
            >
              Add Destination
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {destinations.map((destination ,index) => (
              <DestinationCard
                key={index}
                destination={destination}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AllDestinationPage;
