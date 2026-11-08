"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";


export function Banner() {
  return (
    <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden">
      <Image
        src="/images/Banner.png"
        alt="Wanderlust adventure travel destination"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/20" aria-hidden="true" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          Discover Your <br /> Next Adventure
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-white/90 sm:text-lg">
          Plan and book your next unforgettable adventure, all in one place.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button
            size="lg"
            className="h-12  bg-[#15A1BF]  px-8 text-base font-semibold text-primary-foreground hover:bg-primary/90"
          >
            EXPLORE NOW
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-12   border-white/70 bg-transparent px-8 text-base font-semibold text-white hover:bg-white/10 hover:text-white"
          >
            VIEW DESTINATION
          </Button>
        </div>
      </div>

      {/* Search bar */}
       <div className="absolute left-0 bottom-0 grid grid-cols-2 md:grid-cols-5 w-full bg-white/35 backdrop-blur-md text-white">
      {/* Location */}
      <div className="flex flex-col justify-center gap-1 px-4 py-3 border-r border-white/30">
        <label className="text-sm font-medium">Location</label>
        <input
          type="text"
          placeholder="Address, City Or Zip"
          className="w-full bg-transparent text-xs text-white placeholder:text-white/80 outline-none"
        />
      </div>

      {/* Date / Duration */}
      <div className="flex flex-col justify-center gap-1 px-4 py-3 border-r border-white/30">
        <label className="text-sm font-medium">Date/Duration</label>
        <input
          type="text"
          placeholder="Anytime/3 Days"
          className="w-full bg-transparent text-xs text-white placeholder:text-white/80 outline-none"
        />
      </div>

      {/* Budget */}
      <div className="flex flex-col justify-center gap-1 px-4 py-3 border-r border-white/30">
        <label className="text-sm font-medium">Budget</label>
        <input
          type="text"
          placeholder="$0-$3000"
          className="w-full bg-transparent text-xs text-white placeholder:text-white/80 outline-none"
        />
      </div>

      {/* People */}
      <div className="flex flex-col justify-center gap-1 px-4 py-3 md:border-r border-white/30">
        <label className="text-sm font-medium">People</label>
        <input
          type="text"
          placeholder="5-10"
          className="w-full bg-transparent text-xs text-white placeholder:text-white/80 outline-none"
        />
      </div>

      {/* Search Button */}
      <button
        type="button"
        className="col-span-2 md:col-span-1 bg-[#16A6C1] hover:bg-[#128CA5] transition-colors text-white text-sm font-semibold"
      >
        Search
      </button>
    </div>
    </section>
  );
}
