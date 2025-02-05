"use client";
import { motion } from "motion/react";
import Link from "next/link";

export const Intro = () => {
  return (
    <>
      <div className="mt-16 mb-80 flex flex-col gap-8 items-center xl:mt-36">
        <motion.div
          className="w-48 h-48 rounded-full bg-red-200"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          exit={{ opacity: 0, scale: 0.5 }}
          layout
        />
        <div className="flex flex-col gap-2">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            }}>
            Ruby Chen
          </motion.div>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            }}>
            This is a place to let me practice web skill.
          </motion.div>
          <Link href="/" target="_blank" className="mt-4 text-center">
            &#47;&#42; Resume &#42;&#47;
          </Link>
        </div>
      </div>
    </>
  );
};
