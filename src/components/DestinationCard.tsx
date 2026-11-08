import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, MapPin, Star } from "lucide-react";
import {
  formatDuration,
  formatPrice,
  type Destination,
} from "@/lib/destinations";

type DestinationCardProps = {
  destination: Destination;
};

export default function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
      {/* Image */}
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <Image
          src={destination.imageUrl}
          alt={destination.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span
          className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-md bg-white/95 px-2 py-1 text-xs font-semibold text-slate-900 shadow-sm"
          aria-label="Rated 4.5 out of 5"
        >
          4.5
          <Star className="size-3 fill-slate-900 text-slate-900" aria-hidden="true" />
        </span>
      </div>

      {/* Details */}
      <div className="flex flex-1 flex-col p-4">
        <p className="flex items-center gap-1.5 text-xs text-slate-500">
          <MapPin className="size-3.5" aria-hidden="true" />
          {destination.country}
        </p>

        <div className="mt-2 flex items-start justify-between gap-3">
          <h3 className="min-w-0 truncate text-lg font-medium text-slate-900">
            {destination.name}
          </h3>
          <p className="shrink-0 text-sm whitespace-nowrap text-slate-900">
            <span className="font-semibold">{formatPrice(destination.price)}</span>
            <span className="text-xs font-light text-slate-500">/Person</span>
          </p>
        </div>

        <p className="mt-2 flex items-center gap-1.5 text-xs text-slate-500">
          <CalendarDays className="size-3.5" aria-hidden="true" />
          {formatDuration(destination.duration)}
        </p>

        <div className="mt-auto pt-4">
          <div className="border-t border-slate-200 pt-3">
            <Link
              href={`/all-destination/${destination._id}`}
              className="inline-flex items-center gap-1 text-xs font-semibold tracking-wide text-[#15A1BF] transition-colors hover:text-[#128CA5]"
            >
              BOOK NOW
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
