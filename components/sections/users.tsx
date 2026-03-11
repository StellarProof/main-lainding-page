import { Check } from "lucide-react";

const features = [
  { title: "Verify once", description: "One KYC. Works across every anchor on Stellar." },
  { title: "You own your data", description: "Encrypted. Only you hold the key." },
  { title: "Instant approvals", description: "Returning users skip the queue entirely." },
  { title: "Revoke anytime", description: "Pull access from any anchor in one tap." },
  { title: "No more document uploads", description: "Your passport stays in your wallet, not their server." },
  { title: "Works in 180 countries", description: "Every Stellar anchor, everywhere." },
];

export function UsersSection() {
  return (
    <section className="bg-[#000000] w-full py-20 lg:py-40 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex gap-4 py-10 flex-col items-start">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#06B6D4]/30 bg-[#06B6D4]/10">
            <span className="text-[#06B6D4] text-sm font-medium">For Users</span>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-white">
              Your identity.{" "}
              <span className="text-[#06B6D4]">Your control.</span>
            </h2>
            <p className="text-lg max-w-xl leading-relaxed tracking-tight text-gray-400">
              Verify once with any Stellar app. StellarProof does the rest.
            </p>
          </div>
          <div className="flex gap-6 pt-8 flex-col w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start gap-6 lg:gap-10">
              {features.map((feature) => (
                <div key={feature.title} className="flex flex-row gap-4 w-full items-start">
                  <Check className="w-4 h-4 mt-2 text-[#06B6D4] flex-shrink-0" />
                  <div className="flex flex-col gap-1">
                    <p className="text-white font-medium">{feature.title}</p>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
