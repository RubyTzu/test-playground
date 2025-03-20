"use client";
import { useIntroContext } from "@/app/(data)/Provider";
import { motion } from "motion/react";

export const IntroImg = () => {
  const img = useIntroContext().img || undefined;

  return (
    <>
      <ShapeDrawing />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        exit={{ opacity: 0, scale: 0.5 }}
        layout
        className="hidden w-48 h-48 overflow-hidden border rounded-full">
        <motion.img src={img} width={1920} height={1080} alt="test image" className="w-48 h-48 object-cover bg-primary-200"></motion.img>
      </motion.div>
      <div className="pt-3 pl-5 pb-16">
        <div className="bg-primary-200 rounded-r-full w-10 h-10"></div>
        <div className="bg-primary-500 rounded-tr-full w-16 h-12"></div>
      </div>
    </>
  );
};

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

export default function ShapeDrawing() {
  return (
    <div className="absolute top-0">
    <motion.svg
      width="240"
      height="240"
      viewBox="0 0 240 240"
      initial="hidden"
      animate="visible"
      style={{
        maxWidth: "80vw",
      }}>
      <motion.circle
        className="circle-path"
        cx="120"
        cy="120"
        r="100"
        stroke="#ffe3e0"
        variants={draw}
        custom={1}
        style={{
          strokeWidth: 10,
          strokeLinecap: "round",
          fill: "transparent",
        }}
      />
    </motion.svg>
    </div>
  );
}