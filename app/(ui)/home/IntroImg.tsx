"use client";
import { useIntroContext } from "@/app/(data)/Provider";
import { motion } from "motion/react";

export const IntroImg = () => {
  const img = useIntroContext().img || undefined;

  return (
    <>
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
        <motion.img src={img} width={1920} height={1080} alt="test image" className="w-48 h-48 object-cover bg-blue-200"></motion.img>
      </motion.div>
      <div className="pb-5">
        <div className="bg-[#ffe3e0] rounded-r-full w-10 h-10"></div>
        <div className="bg-[#9c0606] rounded-tr-full w-16 h-12"></div>
      </div>
    </>
  );
};
