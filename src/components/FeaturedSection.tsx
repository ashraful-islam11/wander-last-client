"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, MapPin, Star } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { buttonVariants } from "@/components/ui/button";
import {
  cleanDescription,
  formatDuration,
  formatPrice,
  type Destination,
} from "@/lib/destinations";
import { cn } from "@/lib/utils";

type FeaturedSectionProps = {
  destinations: Destination[];
};

export default function FeaturedSection({ destinations }: FeaturedSectionProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
      setCount(api.scrollSnapList().length);
    };

    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  if (destinations.length === 0) return null;

  const total = count || destinations.length;
  const progress = count > 1 ? ((current + 1) / count) * 100 : 100;

  return (
    <section className="w-full py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-heading text-3xl font-light tracking-tight text-slate-900 sm:text-4xl">
              Featured Destinations
            </h2>
            <p className="mt-2 text-sm text-slate-500 sm:text-base">
              Handpicked travel experiences for the adventure seekers
            </p>
          </div>

          <Link
            href="/all-destination"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "h-10 gap-2 border-[#15A1BF]/40 px-4 text-[11px] font-semibold tracking-[0.15em] text-[#15A1BF] uppercase hover:bg-[#15A1BF]/5 hover:text-[#128CA5]"
            )}
          >
            All Destinations
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </Link>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{ align: "start" }}
          setApi={setApi}
          className="mt-10"
          aria-label="Featured destinations"
        >
          <CarouselContent>
            {destinations.map((destination) => (
              <CarouselItem
                key={destination._id}
                className="basis-full pl-4 sm:basis-1/2 lg:basis-1/3"
              >
                <article className="group flex h-full flex-col">
                  {/* Image */}
                  <div className="relative aspect-[3/2] w-full overflow-hidden rounded-md bg-slate-100">
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
                      <Star
                        className="size-3 fill-slate-900 text-slate-900"
                        aria-hidden="true"
                      />
                    </span>
                  </div>

                  {/* Details */}
                  <div className="flex flex-1 flex-col pt-4">
                    <p className="flex items-center gap-1.5 text-xs text-slate-500">
                      <MapPin className="size-3.5" aria-hidden="true" />
                      {destination.country}
                    </p>

                    <div className="mt-1.5 flex items-baseline justify-between gap-3">
                      <h3 className="min-w-0 truncate text-lg font-normal text-slate-900">
                        {destination.name}
                      </h3>
                      <p className="shrink-0 whitespace-nowrap text-sm text-slate-900">
                        <span className="font-semibold">
                          {formatPrice(destination.price)}
                        </span>
                        <span className="text-xs font-light text-slate-500">
                          /Person
                        </span>
                      </p>
                    </div>

                    <p className="mt-1.5 flex items-center gap-1.5 text-xs text-slate-500">
                      <CalendarDays className="size-3.5" aria-hidden="true" />
                      {formatDuration(destination.duration)}
                    </p>

                    <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-500">
                      {cleanDescription(destination.description)}
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
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Footer: counter, progress, arrows */}
          <div className="mt-8 flex items-center gap-4 sm:gap-6">
            <span className="shrink-0 text-sm text-slate-500 tabular-nums">
              {current + 1}/{total}
            </span>

            <div className="relative h-[2px] flex-1 overflow-hidden rounded-full bg-slate-200">
              <span
                className="absolute inset-y-0 left-0 rounded-full bg-[#15A1BF] transition-[width] duration-300"
                style={{ width: `${progress}%` }}
                aria-hidden="true"
              />
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <CarouselPrevious
                variant="outline"
                size="icon-lg"
                className="static h-10 w-10 translate-y-0 rounded-full border-slate-300 bg-white text-slate-500 hover:bg-slate-50 hover:text-slate-900 disabled:opacity-40"
              />
              <CarouselNext
                variant="outline"
                size="icon-lg"
                className="static h-10 w-10 translate-y-0 rounded-full border-slate-300 bg-white text-slate-500 hover:bg-slate-50 hover:text-slate-900 disabled:opacity-40"
              />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
