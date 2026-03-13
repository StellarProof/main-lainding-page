"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { ShieldCheck, Key, Repeat } from "lucide-react";

const cards = [
  {
    title: "Verify Once",
    description: "Complete KYC with any Stellar anchor. StellarProof stores your encrypted credential on-chain. One time. Done.",
    Icon: ShieldCheck,
    effect: (
      <CanvasRevealEffect
        animationSpeed={5.1}
        containerClassName="bg-[#020f18]"
        colors={[[6, 182, 212]]}
        dotSize={2}
      />
    ),
  },
  {
    title: "You Own It",
    description: "Your credential is encrypted with your key. No anchor — not even StellarProof — can read your data without your permission.",
    Icon: Key,
    effect: (
      <>
        <CanvasRevealEffect
          animationSpeed={3}
          containerClassName="bg-black"
          colors={[[6, 182, 212], [99, 102, 241]]}
          dotSize={2}
        />
        <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50" />
      </>
    ),
  },
  {
    title: "Reuse Everywhere",
    description: "Every Stellar anchor that integrates StellarProof can verify you instantly. No uploads. No waiting. One tap approval.",
    Icon: Repeat,
    effect: (
      <CanvasRevealEffect
        animationSpeed={3}
        containerClassName="bg-[#020f18]"
        colors={[[6, 182, 212]]}
        dotSize={3}
      />
    ),
  },
];

const PlusIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
  </svg>
);

function Card({ title, description, Icon, effect }: (typeof cards)[0]) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-white/10 group/canvas-card flex items-center justify-center max-w-sm w-full mx-auto p-4 relative h-[22rem] bg-[#0a0a0a] hover:border-[#06B6D4]/40 transition-colors"
    >
      <PlusIcon className="absolute h-5 w-5 -top-2.5 -left-2.5 text-white/30" />
      <PlusIcon className="absolute h-5 w-5 -bottom-2.5 -left-2.5 text-white/30" />
      <PlusIcon className="absolute h-5 w-5 -top-2.5 -right-2.5 text-white/30" />
      <PlusIcon className="absolute h-5 w-5 -bottom-2.5 -right-2.5 text-white/30" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0"
          >
            {effect}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 text-center px-4">
        <div className="flex justify-center mb-4 group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200">
          <Icon className="w-12 h-12 text-[#06B6D4]" />
        </div>
        <h3 className="text-white text-xl font-bold opacity-0 group-hover/canvas-card:opacity-100 group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h3>
        <p className="text-gray-400 text-sm mt-2 opacity-0 group-hover/canvas-card:opacity-100 group-hover/canvas-card:-translate-y-2 transition duration-300 delay-75">
          {description}
        </p>
      </div>
    </div>
  );
}

export function HowItWorksSection() {
  return (
    <section className="bg-[#171716] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="max-w-6xl mx-auto">
            {/* <span className="text-[#06B6D4] text-sm font-medium">How It Works</span> */}
            <p className="px-4 text-[#06B6D4] text-4xl font-bold text-center pointer-events-none z-10 mb-8">
              How It Works
            </p>
          </div>
          <h2 className="text-4xl md:text-3xl font-bold text-white mb-4">
            Verify once reuse everywhere in Stellar ecosystem.
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            StellarProof creates a reusable credential tied to your Stellar wallet. <br/>
            Anchors verify the credential, not your documents again.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 w-full">
          {cards.map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </div>

        <div className="border-t border-white/10 mt-16" />
      </div>
    </section>
  );
}
