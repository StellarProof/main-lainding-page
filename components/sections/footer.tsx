"use client";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

function FlickeringGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let cols = 0, rows = 0;
    let squares: Float32Array;

    const setup = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = container.clientWidth;
      const h = container.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      cols = Math.ceil(w / 6);
      rows = Math.ceil(h / 6);
      squares = new Float32Array(cols * rows);
      for (let i = 0; i < squares.length; i++) squares[i] = Math.random() * 0.15;
    };

    let last = 0;
    const animate = (t: number) => {
      const dt = (t - last) / 1000;
      last = t;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const dpr = window.devicePixelRatio || 1;
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          if (Math.random() < 0.08 * dt) squares[i * rows + j] = Math.random() * 0.15;
          ctx.fillStyle = `rgba(6,182,212,${squares[i * rows + j]})`;
          ctx.fillRect(i * 6 * dpr, j * 6 * dpr, 2 * dpr, 2 * dpr);
        }
      }
      animId = requestAnimationFrame(animate);
    };

    setup();
    animId = requestAnimationFrame(animate);
    const ro = new ResizeObserver(setup);
    ro.observe(container);
    return () => { cancelAnimationFrame(animId); ro.disconnect(); };
  }, []);

  return (
    <div ref={containerRef} className="h-full w-full">
      <canvas ref={canvasRef} className="pointer-events-none" />
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
    <footer className="w-full bg-[#0A0A12] pb-0 border-t border-white/5">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between p-10 gap-10">
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

        <div className="flex flex-col md:flex-row gap-10 md:gap-16">
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

      <div className="w-full h-40 relative mt-10 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-[#0A0A12] z-10 pointer-events-none" />
        <div className="absolute inset-0 mx-6">
          <FlickeringGrid />
        </div>
        <div className="absolute bottom-4 left-0 right-0 text-center z-20">
          <p className="text-gray-600 text-xs">© 2026 StellarProof. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}