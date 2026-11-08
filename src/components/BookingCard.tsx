"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/destinations";

type BookingCardProps = {
  name: string;
  price: string | number;
  departureDate?: string;
};

const perks = [
  "Free cancellation up to 7 days",
  "Travel insurance included",
  "24/7 customer support",
];

export default function BookingCard({
  name,
  price,
  departureDate,
}: BookingCardProps) {
  // The API returns an ISO date, but the date input needs "yyyy-mm-dd".
  const [date, setDate] = useState(departureDate?.slice(0, 10) ?? "");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!date) {
      toast.error("Please choose a travel date.");
      return;
    }

    const readableDate = new Date(`${date}T00:00:00`).toLocaleDateString(
      "en-US"
    );
    toast.success(`Booking request sent for ${name} on ${readableDate}.`);
  };

  return (
    <aside className="h-fit rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-xs text-slate-500">Starting from</p>
      <p className="mt-1 text-3xl font-semibold tracking-tight text-slate-900">
        {formatPrice(price)}
      </p>
      <p className="text-xs text-slate-500">per person</p>

      <form onSubmit={handleSubmit} className="mt-5 space-y-3">
        <label htmlFor="travel-date" className="sr-only">
          Travel date
        </label>
        <input
          id="travel-date"
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
          required
          className="h-10 w-full rounded-md border border-slate-200 bg-slate-50 px-3 text-sm text-slate-700 outline-none transition-colors focus:border-[#15A1BF] focus:ring-2 focus:ring-[#15A1BF]/20"
        />

        <Button
          type="submit"
          className="h-10 w-full gap-2 bg-[#15A1BF] text-sm font-medium text-white hover:bg-[#128CA5]"
        >
          Book Now
          <ArrowRight className="size-4" />
        </Button>
      </form>

      <ul className="mt-5 space-y-2.5 border-t border-slate-200 pt-4">
        {perks.map((perk) => (
          <li
            key={perk}
            className="flex items-start gap-2 text-xs text-slate-600"
          >
            <Check
              className="mt-0.5 size-3.5 shrink-0 text-slate-500"
              aria-hidden="true"
            />
            {perk}
          </li>
        ))}
      </ul>
    </aside>
  );
}
