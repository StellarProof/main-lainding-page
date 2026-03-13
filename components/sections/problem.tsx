"use client";
import { MagicText } from "@/components/ui/magic-text";

export function ProblemSection() {
  return (
    <section className="relative py-32 px-6" style={{ backgroundColor: '#171716' }}>
      <p className="top-1/2 left-1/2 w-fit mx-auto -translate-y-1/2 text-white/40 text-4xl font-bold text-center pointer-events-none z-10">
        Problem 
      </p>
      <div className="max-w-5xl mx-auto">
        
        <MagicText text="Maria finds three Stellar apps. She uploads her passport. Her ID. Her selfie. Waits. Approved. Then she does it again. And again. Same person. Same passport. Same face. Three times. 60 to 80 percent of users never make it through even once. Every anchor is an island. None know she already proved who she is." />
       
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 pb-12 border-b border-white/10">
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