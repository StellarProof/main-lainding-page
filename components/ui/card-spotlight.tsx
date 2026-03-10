"use client";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React, { MouseEvent as ReactMouseEvent } from "react";
import { cn } from "@/lib/utils";

export const CardSpotlight = ({
  children, radius = 350, color = "#06B6D4", className, ...props
}: {
  radius?: number; color?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: ReactMouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn(
        "group/spotlight p-8 rounded-xl relative border border-[#06B6D4]/20 bg-[#0A0A12]",
        className
      )}
      onMouseMove={handleMouseMove}
      {...props}
    >
      <motion.div
        className="pointer-events-none absolute z-0 -inset-px rounded-xl opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
        style={{
          maskImage: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              white,
              transparent 80%
            )
          `,
          background: `radial-gradient(${radius}px circle at ${mouseX}px ${mouseY}px, rgba(6,182,212,0.08), transparent 80%)`,
        }}
      />
      {children}
    </div>
  );
};