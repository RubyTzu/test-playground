"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { intro } from "@/app/(data)/dummyData";

export const Intro = () => {
  return (
    <>
      <div className="mt-16 mb-80 flex flex-col gap-8 items-center xl:mt-36">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          exit={{ opacity: 0, scale: 0.5 }}
          layout
          className="w-48 h-48 overflow-hidden border rounded-full">
          <motion.img src={intro.img} width={1920} height={1080} alt="test image" className="w-48 h-48 object-cover bg-blue-200"></motion.img>
        </motion.div>
        <div className="flex flex-col gap-2">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            }}>
            {intro.name}
          </motion.div>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            }}>
            {intro.intro}
          </motion.div>
          <Link href={intro.resumeUrl} target="_blank" className="mt-4 text-center">
            &#47;&#42; Resume &#42;&#47;
          </Link>
        </div>
      </div>
    </>
  );
};
