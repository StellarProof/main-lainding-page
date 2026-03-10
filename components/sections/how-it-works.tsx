import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { ShieldCheck, Key, Repeat } from "lucide-react";

export function HowItWorksSection() {
  return (
    <section className="bg-[#0A0A12] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#06B6D4]/30 bg-[#06B6D4]/10">
            <span className="text-[#06B6D4] text-sm font-medium">How It Works</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            One verification.<br />
            <span className="text-[#06B6D4]">Infinite anchors.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            StellarProof creates a reusable credential tied to your Stellar wallet.
            Anchors verify the credential — not your documents again.
          </p>
        </div>

        <BentoGrid className="grid-cols-1 md:grid-cols-3 auto-rows-auto">
          <BentoCard
            name="Verify Once"
            className="col-span-1"
            background={
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <ShieldCheck className="w-48 h-48 text-[#06B6D4]" />
              </div>
            }
            Icon={ShieldCheck}
            description="Complete KYC with any Stellar anchor. StellarProof stores your encrypted credential on-chain. One time. Done."
            href="#waitlist"
            cta="Get started"
          />
          <BentoCard
            name="You Own It"
            className="col-span-1"
            background={
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <Key className="w-48 h-48 text-[#06B6D4]" />
              </div>
            }
            Icon={Key}
            description="Your credential is encrypted with your key. No anchor — not even StellarProof — can read your data without your permission."
            href="#waitlist"
            cta="Learn more"
          />
          <BentoCard
            name="Reuse Everywhere"
            className="col-span-1"
            background={
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <Repeat className="w-48 h-48 text-[#06B6D4]" />
              </div>
            }
            Icon={Repeat}
            description="Every Stellar anchor that integrates StellarProof can verify you instantly. No uploads. No waiting. One tap approval."
            href="#waitlist"
            cta="See the pilot"
          />
        </BentoGrid>
      </div>
    </section>
  );
}