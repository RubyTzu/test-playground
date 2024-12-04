"use client";
import { Intro } from "./(ui)/home/Intro";
import { motion } from "motion/react";

export default function Home() {
  return (
    <motion.main className="max-w-[1440px] mx-auto flex flex-col gap-4 row-start-2 items-center justify-center">
      <Intro />
    </motion.main>
  );
}
