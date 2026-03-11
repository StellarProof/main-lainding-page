"use client";
import { useEffect, useRef } from "react";

export function HeroSection() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const layersRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = (window.innerWidth / 2 - e.pageX) / 25;
      const y = (window.innerHeight / 2 - e.pageY) / 25;
      canvas.style.transform = `rotateX(${55 + y / 2}deg) rotateZ(${-25 + x / 2}deg)`;
      layersRef.current.forEach((layer, index) => {
        if (!layer) return;
        const depth = (index + 1) * 15;
        const moveX = x * (index + 1) * 0.2;
        const moveY = y * (index + 1) * 0.2;
        layer.style.transform = `translateZ(${depth}px) translate(${moveX}px, ${moveY}px)`;
      });
    };

    canvas.style.opacity = "0";
    canvas.style.transform = "rotateX(90deg) rotateZ(0deg) scale(0.8)";
    const timeout = setTimeout(() => {
      canvas.style.transition = "all 2.5s cubic-bezier(0.16, 1, 0.3, 1)";
      canvas.style.opacity = "1";
      canvas.style.transform = "rotateX(55deg) rotateZ(-25deg) scale(1)";
    }, 300);

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeout);
    };
  }, []);

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

        .halide-grain {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          pointer-events: none;
          z-index: 100;
          opacity: 0.12;
        }

        .halide-viewport {
          perspective: 2000px;
          width: 100%; height: 100%;
          display: flex; align-items: center; justify-content: center;
          overflow: hidden;
          position: absolute;
          inset: 0;
        }

        .halide-canvas-3d {
          position: relative;
          width: min(800px, 90vw);
          height: min(500px, 56vw);
          transform-style: preserve-3d;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .halide-layer {
          position: absolute;
          inset: 0;
          border: 1px solid rgba(224, 224, 224, 0.1);
          background-size: cover;
          background-position: center;
          transition: transform 0.5s ease;
        }

        .halide-layer-1 {
          background-image: url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200');
          filter: grayscale(1) contrast(1.2) brightness(0.5);
        }
        .halide-layer-2 {
          background-image: url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1200');
          filter: grayscale(1) contrast(1.1) brightness(0.7);
          opacity: 0.6;
          mix-blend-mode: screen;
        }
        .halide-layer-3 {
          background-image: url('https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=1200');
          filter: grayscale(1) contrast(1.3) brightness(0.8);
          opacity: 0.4;
          mix-blend-mode: overlay;
        }

        .halide-contours {
          position: absolute;
          width: 200%; height: 200%;
          top: -50%; left: -50%;
          background-image: repeating-radial-gradient(
            circle at 50% 50%,
            transparent 0, transparent 40px,
            rgba(255,255,255,0.05) 41px, transparent 42px
          );
          transform: translateZ(120px);
          pointer-events: none;
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

        .halide-bottom-bar {
          grid-column: 1 / -1;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: flex-start;
        }

        @media (min-width: 640px) {
          .halide-bottom-bar {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-end;
          }
        }

        .halide-hero-title {
          grid-column: 1 / -1;
          align-self: center;
          font-size: clamp(3rem, 10vw, 10rem);
          line-height: 0.85;
          letter-spacing: -0.04em;
          mix-blend-mode: difference;
          color: #e0e0e0;
          margin: 0;
          font-weight: 700;
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
        {/* SVG Grain Filter */}
        <svg style={{ position: "absolute", width: 0, height: 0 }}>
          <filter id="sp-grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
        </svg>
        <div className="halide-grain" style={{ filter: "url(#sp-grain)" }} />

        {/* Interface overlay */}
        <div className="halide-interface">
          <div style={{ fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.12em" }}>
            STELLARPROOF
          </div>
          <div style={{ textAlign: "right", fontFamily: "monospace", color: "var(--accent)", fontSize: "0.65rem", lineHeight: 1.8 }}>
            <div>SEP-12 COMPLIANT</div>
            <div>STELLAR NETWORK · MAINNET</div>
          </div>

          <h1 className="halide-hero-title">
            VERIFY<br />ONCE.
          </h1>

          <div className="halide-bottom-bar">
            <div style={{ fontFamily: "monospace", fontSize: "0.7rem", lineHeight: 1.8, color: "#a1a1aa" }}>
              <p>[ PILOT 2026 ]</p>
              <p>REUSABLE IDENTITY FOR THE STELLAR ECOSYSTEM</p>
            </div>
            <a href="#waitlist" className="halide-cta">JOIN WAITLIST</a>
          </div>
        </div>

        {/* 3D terrain viewport */}
        <div className="halide-viewport">
          <div className="halide-canvas-3d" ref={canvasRef}>
            <div className="halide-layer halide-layer-1" ref={(el) => { if (el) layersRef.current[0] = el; }} />
            <div className="halide-layer halide-layer-2" ref={(el) => { if (el) layersRef.current[1] = el; }} />
            <div className="halide-layer halide-layer-3" ref={(el) => { if (el) layersRef.current[2] = el; }} />
            <div className="halide-contours" />
          </div>
        </div>

        {/* Scroll hint */}
        <div className="halide-scroll-hint" />
      </section>
    </>
  );
}
