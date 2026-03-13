"use client";
import { CardSpotlight } from "@/components/ui/card-spotlight";

export function AnchorsSection() {
  return (
    <section id="anchors" className="bg-[#171716] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#06B6D4]/30 bg-[#06B6D4]/10">
            <span className="text-[#06B6D4] text-sm font-medium">For Anchors</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Cut KYC costs by{" "}
            <span className="text-[#06B6D4]">68%.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Stop paying for the same user twice. StellarProof reuses verified credentials —
            you only pay for new verifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <CardSpotlight className="border-red-500/20">
            <div className="text-red-400 text-sm font-semibold uppercase tracking-widest mb-6">
              ✗ Without StellarProof
            </div>
            <div className="space-y-5">
              {[
                ["Per verification", "$1.35"],
                ["Returning user", "$1.35 again"],
                ["Drop-off rate", "60–80%"],
                ["1,000 users/month", "$1,350"],
                ["Integration effort", "Full KYC per anchor"],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between border-b border-white/5 pb-4">
                  <span className="text-gray-400 text-sm">{label}</span>
                  <span className="text-red-400 font-semibold">{value}</span>
                </div>
              ))}
            </div>
          </CardSpotlight>

          <CardSpotlight className="border-[#06B6D4]/30">
            <div className="text-[#06B6D4] text-sm font-semibold uppercase tracking-widest mb-6">
              ✓ With StellarProof
            </div>
            <div className="space-y-5">
              {[
                ["First verification", "$1.20"],
                ["Returning user", "$0.10 reuse fee"],
                ["Drop-off rate", "<5%"],
                ["1,000 users/month", "$430 + $299 plan"],
                ["Integration", "@stellarproof/sdk"],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between border-b border-white/5 pb-4">
                  <span className="text-gray-400 text-sm">{label}</span>
                  <span className="text-[#06B6D4] font-semibold">{value}</span>
                </div>
              ))}
            </div>
          </CardSpotlight>
        </div>

        <div className="text-center bg-[#06B6D4]/10 border border-[#06B6D4]/20 rounded-xl p-8">
          <div className="text-5xl font-bold text-[#06B6D4] mb-2">$621</div>
          <div className="text-white text-lg font-medium mb-1">saved per month at 1,000 users</div>
          <div className="text-gray-400 text-sm">Payback period: less than 2 weeks</div>
        </div>

        
      </div>
    </section>
  );
}
