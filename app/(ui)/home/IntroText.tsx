"use client";
import { useIntroContext } from "@/app/(data)/Provider";
import { motion } from "motion/react";
import Link from "next/link";

export const IntroText = () => {
const { name = "", intro = "", resumeUrl = "" } = useIntroContext() || {};

  return (
    <>
      <div className="flex flex-col gap-2 items-center">
        <motion.div
          className="text-center text-xl font-medium uppercase"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}>
          {name}
        </motion.div>
        <motion.div
          className="text-center md:w-[70%] mb-6"
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
