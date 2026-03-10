"use client";
import { GLSLHills } from "@/components/ui/glsl-hills";

export function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#0A0A12]">
      <div className="absolute inset-0 z-0 opacity-60">
        <GLSLHills width="100vw" height="100vh" speed={0.3} />
      </div>

      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-[#0A0A12]" />

      <div className="relative z-20 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#06B6D4]/30 bg-[#06B6D4]/10">
          <div className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] animate-pulse" />
          <span className="text-[#06B6D4] text-sm font-medium tracking-wide">
            Built on Stellar · SEP-12 Compliant
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
          Verify Once.{" "}
          <span className="text-[#06B6D4]">Accepted Everywhere.</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
          The reusable identity layer for the Stellar ecosystem.
          <br />
          No more repeat KYC. Ever.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <a href="#waitlist" className="px-8 py-4 bg-[#06B6D4] text-[#0A0A12] font-semibold rounded-lg text-lg hover:bg-[#06B6D4]/90 transition-colors">
            Join the Waitlist
          </a>
          <a href="#anchors" className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg text-lg hover:border-[#06B6D4]/50 hover:text-[#06B6D4] transition-colors">
            Apply for Anchor Pilot
          </a>
        </div>
      </div>
    </section>
  );
}