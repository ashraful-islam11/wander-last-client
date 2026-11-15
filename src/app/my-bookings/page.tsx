import type { Metadata } from "next";
import MyBookingRow, { type Booking } from "@/components/MyBookingRow";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const metadata: Metadata = {
  title: "My Bookings | Wanderlast",
  description: "Manage and view your upcoming travel plans.",
};

// const bookings: Booking[] = [
//   {
//     id: "b1",
//     title: "Bali Paradise",
//     departure: "May 15, 2026",
//     price: 1299,
//     status: "confirmed",
//     imageUrl:
//       "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: "b2",
//     title: "Bali Paradise",
//     departure: "May 15, 2026",
//     price: 1299,
//     status: "confirmed",
//     imageUrl:
//       "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: "b3",
//     title: "Venice & Italian Riviera",
//     departure: "May 15, 2026",
//     price: 1299,
//     status: "pending",
//     imageUrl:
//       "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?auto=format&fit=crop&w=800&q=80",
//   },
// ];

export default  async function MyBookingsPage() {

    const session = await auth.api.getSession({
        headers : await headers() 
    }) 

    const user  =  session?.user 
    console.log(user);

    const res = await fetch(`http://localhost:8000/my-booking/${user?.email}`) ;
    const userBookings = await res.json() ;
    console.log(userBookings);



  return (
    <section className="w-full">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 md:py-14">
        {/* Page heading */}
        <header className="mb-6">
          <h1 className="font-heading text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
            My Bookings
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Manage and view your upcoming travel plans
          </p>
        </header>

        <div className="flex flex-col gap-4">
          {userBookings.map((booking) => (
            <MyBookingRow key={booking._id} booking={booking} />
          ))}

        </div>
      </div>
    </section>
  );
}
