"use client";
import { useEffect, useRef } from "react";
import { GLSLHills } from "@/components/ui/glsl-hills";

export function HeroSection() {
  const canvasRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <style>{`
        .halide-section {
          position: relative;
          background-color: #0a0a0a;
          color: #e0e0e0;
          overflow: hidden;
          height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          --accent: #06B6D4;
          --silver: #e0e0e0;
          --bg: #0a0a0a;
        }



        .halide-viewport {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .halide-canvas-3d {
          position: absolute;
          width: 100%;
          height: 100%;
          inset: 0;
          transition: opacity 2.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .halide-interface {
          position: absolute;
          inset: 0;
          padding: 1.5rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto 1fr auto;
          z-index: 10;
          pointer-events: none;
          font-family: 'Syncopate', 'Space Grotesk', ui-sans-serif, system-ui, sans-serif;
        }

        @media (min-width: 640px) {
          .halide-interface { padding: 3.5rem; }
        }

        @media (min-width: 640px) {
          .halide-bottom-bar {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-end;
          }
        }

 

        .halide-cta {
          pointer-events: auto;
          background: var(--accent);
          color: #000;
          padding: 1rem 2rem;
          text-decoration: none;
          font-weight: 700;
          font-size: 0.8rem;
          letter-spacing: 0.1em;
          clip-path: polygon(0 0, 100% 0, 100% 70%, 88% 100%, 0 100%);
          transition: 0.3s;
          display: inline-block;
        }
        .halide-cta:hover { background: #fff; transform: translateY(-4px); }

        .halide-cta-bottom {
          position: absolute;
          bottom: 2rem;
          right: 2rem;
          pointer-events: auto;
          z-index: 20;
        }

        .halide-scroll-hint {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          width: 1px; height: 60px;
          background: linear-gradient(to bottom, #e0e0e0, transparent);
          animation: halideFlow 2s infinite ease-in-out;
          z-index: 20;
        }

        @keyframes halideFlow {
          0%, 100% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          51% { transform: scaleY(1); transform-origin: bottom; }
        }
      `}</style>

      <section className="halide-section">
        {/* Interface overlay */}
        <div className="halide-interface">
          <div style={{ fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.12em" }}>
            STELLARPROOF
          </div>
        </div>

        {/* Hero text content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
          <div className="space-y-6 text-center">
            <h1 className="font-semibold text-6xl whitespace-pre-wrap">
              <span className="italic text-6xl font-thin">Verify Once, Accepted at every anchor# <br/> </span>
              Reuseable identity layer for stellar ecosystem
            </h1>
            <p className="text-sm text-primary/60">
              We craft stunning visuals and user - friendly experiences that <br/> help your brand stand out and connect with your audience.
            </p>
          </div>
        </div>

        {/* 3D terrain viewport */}
        <div className="halide-viewport">
          <div className="halide-canvas-3d" ref={canvasRef}>
            <GLSLHills width="100%" height="100%" cameraZ={125} planeSize={256} speed={0.5} />
          </div>
        </div>

        {/* CTA Button */}
        <a href="#waitlist" className="halide-cta halide-cta-bottom">JOIN WAITLIST</a>

        {/* Scroll hint */}
        <div className="halide-scroll-hint" />
      </section>
    </>
  );
}