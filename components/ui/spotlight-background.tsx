"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SpotlightProps = React.ComponentProps<typeof motion.div> & {
  className?: string;
};

const Spotlight = ({ className, ...props }: SpotlightProps) => {
  return <motion.div className={cn("absolute rounded-full blur-3xl", className)} {...props} />;
};

type SpotlightBackgroundProps = {
  children: React.ReactNode;
  className?: string;
};

const SpotlightBackground = ({ children, className }: SpotlightBackgroundProps) => {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="pointer-events-none absolute inset-0">
        <Spotlight
          initial={{ x: "-50%", y: "-50%", rotate: "0deg" }}
          animate={{
            x: ["-50%", "-30%", "-70%", "-50%"],
            y: ["-50%", "-70%", "-30%", "-50%"],
            rotate: ["0deg", "15deg", "-15deg", "0deg"],
          }}
          transition={{
            duration: 12,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className="left-[10%] top-[15%] h-96 w-96 bg-cyan-500/20"
        />

        <Spotlight
          initial={{ x: "0%", y: "0%", rotate: "0deg" }}
          animate={{
            x: ["0%", "20%", "-20%", "0%"],
            y: ["0%", "30%", "10%", "0%"],
            rotate: ["-20deg", "0deg", "20deg", "-20deg"],
          }}
          transition={{
            duration: 15,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
            delay: 3,
          }}
          className="left-[45%] top-[30%] h-[28rem] w-[28rem] bg-sky-500/15"
        />

        <Spotlight
          initial={{ x: "0%", y: "0%", rotate: "10deg" }}
          animate={{
            x: ["0%", "-30%", "10%", "0%"],
            y: ["0%", "-20%", "20%", "0%"],
            rotate: ["10deg", "-10deg", "25deg", "10deg"],
          }}
          transition={{
            duration: 18,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
            delay: 5,
          }}
          className="right-[5%] top-[45%] h-96 w-96 bg-cyan-400/20"
        />

        <Spotlight
          initial={{ x: "0%", y: "0%", rotate: "6deg" }}
          animate={{
            x: ["0%", "-18%", "14%", "0%"],
            y: ["0%", "-8%", "12%", "0%"],
            rotate: ["6deg", "-6deg", "12deg", "6deg"],
          }}
          transition={{
            duration: 16,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
            delay: 1,
          }}
          className="left-[5%] bottom-[10%] h-80 w-80 bg-cyan-300/15"
        />

        <Spotlight
          initial={{ x: "0%", y: "0%", rotate: "-8deg" }}
          animate={{
            x: ["0%", "22%", "-8%", "0%"],
            y: ["0%", "-14%", "18%", "0%"],
            rotate: ["-8deg", "10deg", "-14deg", "-8deg"],
          }}
          transition={{
            duration: 19,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
            delay: 4,
          }}
          className="right-[15%] top-[8%] h-96 w-96 bg-sky-400/14"
        />

        <Spotlight
          initial={{ x: "0%", y: "0%", rotate: "0deg" }}
          animate={{
            x: ["0%", "15%", "-10%", "0%"],
            y: ["0%", "-10%", "15%", "0%"],
            rotate: ["0deg", "8deg", "-8deg", "0deg"],
          }}
          transition={{
            duration: 14,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
            delay: 2,
          }}
          className="left-[30%] top-[10%] h-80 w-80 bg-cyan-200/10"
        />

        <Spotlight
          initial={{ x: "0%", y: "0%", rotate: "0deg" }}
          animate={{
            x: ["0%", "-20%", "10%", "0%"],
            y: ["0%", "20%", "-10%", "0%"],
            rotate: ["0deg", "-12deg", "10deg", "0deg"],
          }}
          transition={{
            duration: 20,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
            delay: 6,
          }}
          className="right-[25%] bottom-[5%] h-[30rem] w-[30rem] bg-sky-300/10"
        />

        <Spotlight
          initial={{ x: "0%", y: "0%", rotate: "0deg" }}
          animate={{
            x: ["0%", "12%", "-16%", "0%"],
            y: ["0%", "10%", "-12%", "0%"],
            rotate: ["0deg", "6deg", "-10deg", "0deg"],
          }}
          transition={{
            duration: 17,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
            delay: 2.5,
          }}
          className="left-[55%] bottom-[12%] h-80 w-80 bg-cyan-400/9"
        />

        <Spotlight
          initial={{ x: "0%", y: "0%", rotate: "0deg" }}
          animate={{
            x: ["0%", "-14%", "18%", "0%"],
            y: ["0%", "-18%", "12%", "0%"],
            rotate: ["0deg", "-8deg", "10deg", "0deg"],
          }}
          transition={{
            duration: 22,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
            delay: 7,
          }}
          className="right-[40%] top-[55%] h-72 w-72 bg-sky-200/10"
        />
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default SpotlightBackground;