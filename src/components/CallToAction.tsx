
import Image from "next/image";
import { ArrowRight } from "lucide-react";


export default function CallToAction() {
  return (
    <section className="relative w-full h-[420px] md:h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image with public path */}
      <Image
        src="/images/CTA.png"
        alt="Ready To Start Your Journey"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content Container */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight mb-3">
          Ready To Start Your Journey?
        </h2>
        <p className="text-slate-200 text-sm md:text-base mb-8 font-light">
          Join thousands of travelers who have discovered the world with us
        </p>

        {/* Action Button */}
        <button className="bg-white hover:bg-slate-100 text-slate-900 font-medium text-sm px-8 py-4 rounded-none shadow-md transition-all duration-300 flex items-center gap-2 group">
          BOOK YOUR TRIP TODAY
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
}