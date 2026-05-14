"use client";
import { FeatureCarousel } from "@/components/ui/animated-feature-carousel";

const images = {
  alt: "Feature screenshot",
  step1img2:
    "https://placehold.co/1661x934/000000/000000",
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
        <div className="mb-16 flex justify-center">
          <div className="w-full max-w-3xl text-center">
            <p className="text-[#06B6D4] text-xl sm:text-3xl md:text-4xl font-bold pointer-events-none z-10 mb-6 sm:mb-8">
              How we solve it
            </p>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg">
              StellarProof is the missing layer that creates a reusable credential tied to your Stellar wallet <br/>
              Anchors verify the credential, not your documents again.
            </p>
          </div>
        </div>

        <FeatureCarousel image={images} />
      </div>
    </section>
  );
}
