"use client";

const firstRow = ["Stellar", "Vibrant", "Bitso", "Coins.ph", "Bitnovo", "MoneyGram", "Circle"];
const secondRow = ["Anchorage", "Wyre", "Cowrie", "StellarX", "Lobstr", "Ultra Stellar", "Tempo"];

function LogoItem({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-3 px-6 py-3 rounded-xl border border-white/10 bg-white/5 text-gray-400 font-semibold text-sm whitespace-nowrap select-none hover:border-[#06B6D4]/30 hover:text-white transition-colors">
      <div className="w-5 h-5 rounded-full bg-[#171716]/20 flex items-center justify-center flex-shrink-0">
        <div className="w-1.5 h-1.5 rounded-full bg-[#171716]" />
      </div>
      {name}
    </div>
  );
}

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const repeated = [...items, ...items, ...items];
  return (
    <div className="relative overflow-hidden py-2">
      <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#000000] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#000000] to-transparent z-10 pointer-events-none" />
      <div
        className="flex gap-4 w-max"
        style={{
          animation: `marquee${reverse ? "Reverse" : ""} 40s linear infinite`,
        }}
      >
        {repeated.map((name, i) => (
          <LogoItem key={i} name={name} />
        ))}
      </div>
      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-33.333%); } }
        @keyframes marqueeReverse { from { transform: translateX(-33.333%); } to { transform: translateX(0); } }
      `}</style>
    </div>
  );
}

export function StellarSection() {
  return (
    <section className="bg-[#0a0a0a] py-20 px-6 border-y border-white/5 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <p className="text-gray-500 text-sm uppercase tracking-widest mb-3">Trusted by</p>
        <h2 className="text-3xl font-bold text-white">
          The Stellar Ecosystem
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        <MarqueeRow items={firstRow} />
        <MarqueeRow items={secondRow} reverse />
      </div>

      <p className="text-gray-600 text-sm text-center mt-12">
        Built to the SEP-12 standard · Protocol 25 ready · GDPR compliant
      </p>
    </section>
  );
}
