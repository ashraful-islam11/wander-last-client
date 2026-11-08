import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CalendarDays,
  Check,
  MapPin,

  Star,
  Trash2,
} from "lucide-react";

import BookingCard from "@/components/BookingCard";
import { buttonVariants } from "@/components/ui/button";
import {
  cleanDescription,
  formatDuration,
  getDestinationById,
} from "@/lib/destinations";
import { cn } from "@/lib/utils";
import UpdateDestinationDailogPage from "../EditeDestination/page";
import DeleteDestination from "@/components/DeleteDestination";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Destination Details | Wanderlust",
};

// The API does not store ratings or highlights yet, so we use defaults.
const RATING = "4.9";
const REVIEWS = 234;
const HIGHLIGHTS = [
  "Hand-picked accommodation",
  "Local guided experiences",
  "Daily breakfast included",
  "Airport transfers",
  "Flexible booking options",
  "Free time to explore",
];

type DestinationPageProps = {
  params: Promise<{ id: string }>;
};

export default async function DestinationDetailsPage({
  params,
}: DestinationPageProps) {
  const { id } = await params;

  const destination = await getDestinationById(id);

  if (!destination) {
    notFound();
  }

  const description =
    cleanDescription(destination.description) ||
    `Discover ${destination.name}, a beautiful destination in ${destination.country}.`;

  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 md:py-10 lg:px-8">
        {/* Top actions */}
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/all-destination"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 transition-colors hover:text-slate-900 sm:text-sm"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to Destinations
          </Link>

          <div className="flex items-center gap-2">
            {/* <Link
              href="/all-destination/EditeDestination"
              className={buttonVariants({
                variant: "outline",
                size: "sm",
                className: "h-8 gap-2 px-3",
              })}
            >
              <Pencil className="size-3.5" aria-hidden="true" />
              Edit
            </Link> */}
            <UpdateDestinationDailogPage destination ={destination} />
            
            
            <DeleteDestination id = {id} />
          </div>
        </div>

        {/* Hero image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-slate-100 sm:aspect-[2.4/1]">
          <Image
            src={destination.imageUrl}
            alt={destination.name}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1152px"
            className="object-cover"
          />
        </div>

        {/* Details and booking card */}
        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-12">
          <div>
            <p className="flex items-center gap-1.5 text-xs text-slate-500">
              <MapPin className="size-3.5" aria-hidden="true" />
              {destination.country}
            </p>

            <h1 className="mt-2 font-heading text-3xl font-light tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              {destination.name}
            </h1>

            <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <Star
                  className="size-4 fill-emerald-500 text-emerald-500"
                  aria-hidden="true"
                />
                <span className="font-semibold text-emerald-600">
                  {RATING}
                </span>
                <span>({REVIEWS} reviews)</span>
              </span>

              <span className="h-3 w-px bg-slate-300" aria-hidden="true" />

              <span className="flex items-center gap-1.5">
                <CalendarDays className="size-3.5" aria-hidden="true" />
                {formatDuration(destination.duration)}
              </span>
            </div>

            <div className="mt-8">
              <h2 className="text-lg font-semibold text-slate-900">Overview</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {description}
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-lg font-semibold text-slate-900">
                Highlights
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Make the most of your trip to {destination.name} with these
                included experiences.
              </p>

              <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
                {HIGHLIGHTS.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2 text-sm text-slate-600"
                  >
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-slate-500"
                      aria-hidden="true"
                    />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <BookingCard
            name={destination.name}
            price={destination.price}
            departureDate={destination.departureDate}
          />
        </div>
      </div>
    </section>
  );
}
