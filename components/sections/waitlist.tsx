"use client";
import { useState } from "react";

export function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [isAnchor, setIsAnchor] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section id="waitlist" className="bg-[#0A0A12] py-32 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#06B6D4]/30 bg-[#06B6D4]/10">
          <span className="text-[#06B6D4] text-sm font-medium">Early Access</span>
        </div>

        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Join the Waitlist
        </h2>
        <p className="text-gray-400 text-lg mb-10 leading-relaxed">
          Be the first anchor to go live.<br />
          Early partners get 3 months free on any plan.
        </p>

        {submitted ? (
          <div className="bg-[#06B6D4]/10 border border-[#06B6D4]/30 rounded-xl p-8">
            <div className="text-[#06B6D4] text-2xl font-bold mb-2">You&apos;re on the list ✓</div>
            <p className="text-gray-400">We&apos;ll be in touch at <span className="text-white">{email}</span></p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#06B6D4]/50 text-lg"
            />
            <label className="flex items-center gap-3 text-left cursor-pointer">
              <div
                onClick={() => setIsAnchor(!isAnchor)}
                className={`w-5 h-5 rounded border flex items-center justify-center flex-shrink-0 transition-colors cursor-pointer ${
                  isAnchor ? "bg-[#06B6D4] border-[#06B6D4]" : "border-white/20"
                }`}
              >
                {isAnchor && (
                  <svg className="w-3 h-3 text-[#0A0A12]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <span className="text-gray-400 text-sm">
                I represent a Stellar anchor and want to apply for the pilot program
              </span>
            </label>
            <button
              type="submit"
              className="w-full py-4 bg-[#06B6D4] text-[#0A0A12] font-bold text-lg rounded-xl hover:bg-[#06B6D4]/90 transition-colors"
            >
              Get Early Access →
            </button>
          </form>
        )}

        <p className="text-gray-600 text-sm mt-6">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}