
 'use client'
import Image from "next/image";
import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  Eye,
  Tag,
  Trash2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/destinations";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { getTokenFromClient } from "@/lib/getTokenFormClient";

export type BookingStatus = "confirmed" | "pending";

export type Booking = {
  id: string;
   name: string, 
   title: string, 
   _id: string , 
  desparateDate: string,
  departure: string;
  price: number;
  status: BookingStatus;
  imageUrl: string;
};

const statusStyles: Record<BookingStatus, string> = {
  confirmed: "bg-emerald-50 text-emerald-700",
  pending: "bg-amber-50 text-amber-700",
};

export default function MyBookingRow({ booking }: { booking: Booking }) {
  const isConfirmed = booking.status === "confirmed";
   const router = useRouter()


  const handleBookingCancel = async ()=> {
    console.log(booking._id);

    const token = await getTokenFromClient()

    const res = await fetch(`http://localhost:8000/my-booking-cancel/${booking?._id}`, {
      method: 'DELETE',
      headers : {
        authorization : `Dearer ${token}`
      }
    });
    const result = await res.json() ;
    toast.success('successfully cancel booking destination')
    router.refresh()

  }

  return (
    <Card className="flex flex-col gap-0 rounded-lg p-3 shadow-sm ring-slate-200 sm:flex-row sm:items-stretch">
      {/* Image */}
      <div className="w-full shrink-0 sm:w-[220px]">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md sm:h-full sm:min-h-[124px]">
          <Image
            src={booking.imageUrl}
            alt={booking.name as string}
            fill
            sizes="(max-width: 640px) 100vw, 220px"
            className="object-cover"
          />
        </div>
      </div>

      {/* Details */}
      <div className="flex min-w-0 flex-1 flex-col px-0 pt-3 sm:px-5 sm:pt-0">
        <Badge
          variant="outline"
          className={cn(
            "gap-1 rounded-full border-transparent px-2 text-xs font-medium",
            statusStyles[booking.status]
          )}
        >
          {isConfirmed ? <CheckCircle2 /> : <Clock3 />}
          {isConfirmed ? "Confirmed" : "Pending"}
        </Badge>

        <h2 className="mt-2 truncate text-lg font-medium text-slate-900">
          {booking.name}
        </h2>

        <ul className="mt-1 space-y-1 text-xs text-slate-500">
          <li className="flex items-center gap-1.5">
            <CalendarDays className="size-3.5 shrink-0" aria-hidden="true" />
            Departure: {booking.desparateDate}
          </li>
          <li className="flex items-center gap-1.5">
            <Tag className="size-3.5 shrink-0" aria-hidden="true" />
            Booking ID: {booking._id}
          </li>
        </ul>

        <p className="mt-2 text-xl font-semibold text-[#15A1BF]">
          {formatPrice(booking.price)}
        </p>
      </div>

      {/* Actions */}
      <div className="mt-3 flex items-center justify-end gap-2 sm:mt-0 sm:self-end">
        <Button onClick={handleBookingCancel}
          type="button"
          variant="outline"
          className="h-8 cursor-pointer gap-1.5 border-red-200 px-3 text-red-600 hover:bg-red-50 hover:text-red-700"
        >
          <Trash2 className="size-4" aria-hidden="true" />
          Cancel
        </Button>
        <Link href ={`/all-destination/${booking._id}`}>
            <Button
          type="button"
          className="h-8 cursor-pointer gap-1.5 bg-[#15A1BF] px-3 text-white hover:bg-[#128CA5]"
        >
          <Eye className="size-4" aria-hidden="true" />
          View
        </Button>
        </Link>
       
      </div>
    </Card>
  );
}
