import React from "react";
import { ShieldCheck,  Headphones } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="bg-[#EDFCFF] py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-slate-900 tracking-tight mb-2">
            Why Choose Wanderlust
          </h2>
          <p className="text-slate-500 text-sm md:text-base font-normal">
            Your trusted partner for exceptional travel experiences
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Safe & Secure */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 flex flex-col justify-start items-start">
            <div className="mb-6">
              <ShieldCheck className="w-10 h-10 text-[#00a8e8] stroke-[1.75]" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">
              Safe &amp; Secure
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Your safety is our priority with comprehensive travel insurance and 24/7 support.
            </p>
          </div>

          {/* Card 2: Expert Guides */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 flex flex-col justify-start items-start">
            <div className="mb-6">
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">
              Expert Guides
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Local experts who bring destinations to life with authentic cultural insights.
            </p>
          </div>

          {/* Card 3: 24/7 Support */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 flex flex-col justify-start items-start">
            <div className="mb-6">
              <Headphones className="w-10 h-10 text-[#00a8e8] stroke-[1.75]" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">
              24/7 Support
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Round-the-clock customer service to assist you wherever your journey takes you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}