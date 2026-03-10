import { Check } from "lucide-react";

export function UsersSection() {
  const features = [
    { title: "Verify once", description: "One KYC. Works across every anchor on Stellar." },
    { title: "You own your data", description: "Encrypted. Only you hold the key." },
    { title: "Instant approvals", description: "Returning users skip the queue entirely." },
    { title: "Revoke anytime", description: "Pull access from any anchor in one tap." },
    { title: "No more document uploads", description: "Your passport stays in your wallet, not their server." },
    { title: "Works in 180 countries", description: "Every Stellar anchor, everywhere." },
  ];

  return (
    <section className="bg-[#0A0A12] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex gap-4 flex-col items-start">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#06B6D4]/30 bg-[#06B6D4]/10">
            <span className="text-[#06B6D4] text-sm font-medium">For Users</span>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-4xl md:text-5xl font-bold text-white lg:max-w-xl">
              Your identity.{" "}
              <span className="text-[#06B6D4]">Your control.</span>
            </h2>
            <p className="text-lg max-w-xl leading-relaxed text-gray-400">
              Verify once with any Stellar app. StellarProof does the rest.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex flex-row gap-4 w-full items-start">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#06B6D4]/20 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-[#06B6D4]" />
                  </div>
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