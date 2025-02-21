"use client";
import { motion } from "motion/react";
import Link from "next/link";

export const IntroText = ({ name, intro, resumeUrl }: { name: string; intro: string; resumeUrl: string }) => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}>
          {name}
        </motion.div>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}>
          {intro}
        </motion.div>
        <Link href={resumeUrl} target="_blank" className="mt-4 text-center">
          &#47;&#42; Resume &#42;&#47;
        </Link>
      </div>
    </>
  );
};
