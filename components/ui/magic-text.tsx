"use client";
import * as React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface WordProps {
  children: string;
  progress: any;
  range: number[];
}

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mt-[12px] mr-1 text-2xl sm:text-3xl lg:text-3xl font-semibold">
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};

export const MagicText: React.FC<{ text: string }> = ({ text }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });
  const normalizedText = text.replace(/\\n/g, "\n");
  const words = normalizedText.split(/(\n|\s)/);
  return (
    <p ref={container} className="flex flex-wrap leading-[1.4] p-4">
      {words.map((word, i) => {
        if (word === "\n") {
          return <span key={i} className="basis-full h-3" aria-hidden="true" />;
        }

        if (word.trim() === "") {
          return " ";
        }

        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};