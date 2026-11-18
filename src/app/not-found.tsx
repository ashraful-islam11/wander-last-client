

import Link from "next/link";
import {
  ArrowLeft,
  Home,
  MapPin,
  Search,
  Compass,
} from "lucide-react";

export default function notFound() {
  return (
    <main className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-white px-6 py-16">

      {/* Background Decorations */}
      <div className="absolute -left-32 top-20 size-80 rounded-full bg-blue-100/60 blur-3xl" />
      <div className="absolute -right-32 bottom-10 size-96 rounded-full bg-sky-100/60 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">

        {/* Left Illustration */}
        <div className="relative flex flex-col items-center justify-center">

          <div className="relative flex size-72 items-center justify-center rounded-full bg-blue-50 sm:size-96">

            <div className="absolute inset-8 rounded-full border border-blue-200" />

            <div className="absolute left-8 top-10 text-blue-300">
              <Compass size={48} />
            </div>

            <div className="absolute right-10 top-20 text-blue-400">
              <Search size={35} />
            </div>

            <div className="relative flex flex-col items-center">
              <MapPin
                size={100}
                strokeWidth={1.2}
                className="text-blue-600"
              />

              <span className="mt-3 text-7xl font-black tracking-tight text-blue-900">
                404
              </span>

              <span className="mt-2 text-sm font-medium text-slate-500">
                Lost Your Way?
              </span>
            </div>

            <div className="absolute bottom-8 left-12 size-5 rounded-full bg-blue-300" />
            <div className="absolute right-12 bottom-14 size-3 rounded-full bg-sky-400" />
          </div>

          <p className="mt-6 text-sm font-medium text-slate-400">
            Every journey has an unexpected turn!
          </p>
        </div>

        {/* Right Content */}
        <div className="text-center md:text-left">

          <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
            <Compass size={16} />
            Oops! Destination Not Found
          </span>

          <h1 className="mt-6 text-7xl font-extrabold tracking-tight text-slate-900 sm:text-8xl">
            404
          </h1>

          <h2 className="mt-3 text-3xl font-bold text-slate-800 sm:text-4xl">
            Page Not Found
          </h2>

          <p className="mx-auto mt-5 max-w-md text-base leading-7 text-slate-500 md:mx-0">
            Looks like you have taken a wrong turn!
            The page you are looking for might have
            been removed, renamed, or is temporarily
            unavailable.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">

            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700"
            >
              <Home size={18} />
              Go Back Home
            </Link>

            <Link
              href="/all-destination"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-7 py-3.5 font-semibold text-slate-700 transition hover:border-blue-500 hover:text-blue-600"
            >
              <ArrowLeft size={18} />
              Explore Destinations
            </Link>

          </div>

          <p className="mt-8 text-sm text-slate-400">
            Need help? We are here to help you find your way.
          </p>
        </div>

      </div>
    </main>
  );
}
