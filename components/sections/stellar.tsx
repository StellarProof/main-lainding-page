"use client";
export function StellarSection() {
  const logos = ["Stellar", "Vibrant", "Bitso", "Coins.ph", "Bitnovo"];

  return (
    <section className="bg-[#0A0A12] py-20 px-6 border-y border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-gray-500 text-sm uppercase tracking-widest mb-3">Powered by</p>
        <h2 className="text-3xl font-bold text-white mb-12">
          The Stellar Ecosystem
        </h2>

        <div className="relative overflow-hidden py-4">
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#0A0A12] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#0A0A12] to-transparent z-10 pointer-events-none" />

          <div className="flex gap-16 items-center w-max"
            style={{ animation: "marquee 30s linear infinite" }}>
            {[...logos, ...logos, ...logos].map((name, i) => (
              <div key={i} className="flex items-center gap-2 text-gray-400 font-semibold text-lg whitespace-nowrap select-none">
                <div className="w-6 h-6 rounded-full bg-[#06B6D4]/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#06B6D4]" />
                </div>
                {name}
              </div>
            ))}
          </div>
        </div>

        <p className="text-gray-600 text-sm mt-8">
          Built to the SEP-12 standard · Protocol 25 ready · GDPR compliant
        </p>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
}