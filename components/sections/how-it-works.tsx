"use client";
import { FeatureCarousel } from "@/components/ui/animated-feature-carousel";

const images = {
  alt: "Feature screenshot",
  step1img2:
    "https://images.ctfassets.net/9gcg9b05der6/5wjeRQ2gingWVOueht2DCr/eda87b8df1882468cf7416f1bb5d40ce/Mobile_KYC__How_will_it_transform_compliance",
  step2img1:
    "https://placehold.co/1661x934/000000/000000",
  step2img2:
    "https://placehold.co/1674x942/000000/000000",
  step3img:
    "https://placehold.co/1740x978/000000/000000",
  step4img:
    "https://placehold.co/1742x980/000000/000000",
};

export function HowItWorksSection() {
  return (
    <section className="bg-transparent py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <p className="text-[#06B6D4] text-xl sm:text-3xl md:text-4xl font-bold pointer-events-none z-10 mb-6 sm:mb-8">
              What is <span className="text-white">Stellar</span>Proof?
            </p>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg">
              StellarProof is a reusable KYC layer for the Stellar ecosystem.
              Users verify once, reuse everywhere.
            </p>
          </div>
          <div className="lg:w-1/2">
            <p className="text-[#06B6D4] text-xl sm:text-3xl md:text-4xl font-bold pointer-events-none z-10 mb-6 sm:mb-8">
              How does it work?
            </p>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg">
              StellarProof creates a reusable credential tied to your Stellar wallet.
              Anchors verify the credential, not your documents again.
            </p>
          </div>
        </div>

        <FeatureCarousel image={images} />
      </div>
    </section>
  );
}
