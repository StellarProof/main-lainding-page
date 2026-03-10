"use client";
import { MagicText } from "@/components/ui/magic-text";

export function ProblemSection() {
  return (
    <section className="bg-[#0A0A12] py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10">
          <span className="text-red-400 text-sm font-medium">The Problem</span>
        </div>

        <MagicText text="Maria finds three Stellar apps. She uploads her passport. Her ID. Her selfie. Waits. Approved. Then she does it again. And again. Same person. Same passport. Same face. Three times. 60 to 80 percent of users never make it through even once. Every anchor is an island. None know she already proved who she is." />

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-red-400 mb-2">60–80%</div>
            <div className="text-gray-400 text-sm">of users drop off during KYC</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-400 mb-2">3×</div>
            <div className="text-gray-400 text-sm">average re-verifications per user</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-400 mb-2">$1.35</div>
            <div className="text-gray-400 text-sm">cost per verification — paid every time</div>
          </div>
        </div>
      </div>
    </section>
  );
}