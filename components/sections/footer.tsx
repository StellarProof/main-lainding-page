"use client";
import Link from "next/link";
import { useRef, useEffect } from "react";

function FlickeringText({ text }: { text: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const dpr = window.devicePixelRatio || 1;

    const setup = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.scale(dpr, dpr);
    };

    let last = 0;
    const animate = (t: number) => {
      const dt = t - last;
      last = t;
      const w = container.clientWidth;
      const h = container.clientHeight;

      ctx.clearRect(0, 0, w, h);

      const fontSize = Math.min(w / text.length * 1.45, h * 0.72);
      ctx.font = `900 ${fontSize}px Inter, system-ui, sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      // Base text
      ctx.fillStyle = "rgba(255,255,255,0.06)";
      ctx.fillText(text, w / 2, h / 2);

      // Flickering overlay chars
      const metrics = ctx.measureText(text);
      const charWidth = metrics.width / text.length;
      for (let i = 0; i < text.length; i++) {
        if (Math.random() < 0.003 * (dt / 16)) {
          const alpha = 0.04 + Math.random() * 0.08;
          ctx.fillStyle = `rgba(6,182,212,${alpha})`;
          const x = w / 2 - metrics.width / 2 + charWidth * i + charWidth / 2;
          ctx.fillText(text[i], x, h / 2);
        }
      }

      animId = requestAnimationFrame(animate);
    };

    setup();
    animId = requestAnimationFrame(animate);
    const ro = new ResizeObserver(() => { setup(); });
    ro.observe(container);
    return () => { cancelAnimationFrame(animId); ro.disconnect(); };
  }, [text]);

  return (
    <div ref={containerRef} className="w-full h-full">
      <canvas ref={canvasRef} className="pointer-events-none w-full h-full" />
    </div>
  );
}

const footerLinks = [
  {
    title: "Company",
    links: [
      { title: "About", url: "#" },
      { title: "Contact", url: "mailto:hello@stellarproof.org" },
      { title: "Blog", url: "#" },
      { title: "Story", url: "#" },
    ],
  },
  {
    title: "Developers",
    links: [
      { title: "Docs", url: "#" },
      { title: "GitHub", url: "https://github.com/stellarproof" },
      { title: "SDK", url: "#" },
      { title: "SEP-12", url: "https://github.com/stellar/stellar-protocol/blob/master/ecosystem/sep-0012.md" },
    ],
  },
  {
    title: "Connect",
    links: [
      { title: "X @StellarProofOrg", url: "https://x.com/StellarProofOrg" },
      { title: "hello@stellarproof.org", url: "mailto:hello@stellarproof.org" },
      { title: "Stellar Discord", url: "https://discord.gg/stellardev" },
    ],
  },
];

export function FooterSection() {
  return (
    <footer className="w-full bg-[#0a0a0a] border-t border-white/5">
      {/* Links */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between p-6 md:p-10 gap-8 md:gap-10">
        <div className="flex flex-col items-start gap-5 max-w-xs">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold">
              <span className="text-white">Stellar</span>
              <span className="text-[#06B6D4]">Proof</span>
            </span>
          </Link>
          <p className="text-gray-500 text-sm leading-relaxed">
            Reusable identity layer for the Stellar ecosystem.
            Verify once. Accepted at every anchor.
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            {["GDPR Ready", "SEP-12", "Built on Stellar"].map((badge) => (
              <span key={badge} className="px-2.5 py-1 text-xs rounded-full border border-[#06B6D4]/30 text-[#06B6D4] bg-[#06B6D4]/10">
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-16">
          {footerLinks.map((col) => (
            <ul key={col.title} className="flex flex-col gap-3">
              <li className="text-white text-sm font-semibold mb-1">{col.title}</li>
              {col.links.map((link) => (
                <li key={link.title}>
                  <Link href={link.url} className="text-gray-500 text-sm hover:text-[#06B6D4] transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      {/* Large flickering brand name */}
      <div className="relative w-full h-36 md:h-48 overflow-hidden">
        <FlickeringText text="StellarProof" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-3 left-0 right-0 text-center z-10">
          <p className="text-gray-700 text-xs">© 2026 StellarProof. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
