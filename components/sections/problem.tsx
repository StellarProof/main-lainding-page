"use client";
import { MagicText } from "@/components/ui/magic-text";

export function ProblemSection() {
  return (
    <section className="relative py-16 px-6" style={{ backgroundColor: '#171716' }}>
      <div className="max-w-6xl mx-auto">
        <p className="px-4 text-[#06B6D4] text-2xl sm:text-4xl font-bold text-center pointer-events-none z-10 mb-8">
          Problem
        </p>
        
        <MagicText
          text={`Maria lives in the Philippines. She sends money to her family every month.
      She finds three Stellar apps that offer better rates than Western Union and she picks up her phone and starts with the first one.

      Coins.ph: Upload passport. Upload ID card. Upload selfie. Wait. Approved. Finally.
      Vibrant: Upload passport. Upload ID card. Upload selfie. Wait. Approved. Again.
      Bitso: Upload passport. Upload ID card. Upload selfie. Wait. Approved. Third time.

      Same person. Same passport. Same face. Three times.
      Maria did everything right. She is patient and determined.
      But users like her never make it through even once.
      They see the form, close the app, and never come back.`}
        />
       
        <div className="mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 pt-8 md:pt-12 pb-8 border-b border-white/10">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-red-400 mb-2">60–80%</div>
            <div className="text-gray-400 text-sm">of users drop off during KYC</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-red-400 mb-2">3×</div>
            <div className="text-gray-400 text-sm">average re-verifications per user</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-red-400 mb-2">$1.35</div>
            <div className="text-gray-400 text-sm">cost per verification — paid every time</div>
          </div>
        </div>
        
      </div>
    </section>
  );
}