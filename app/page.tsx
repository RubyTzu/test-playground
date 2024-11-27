"use client";
import { Navbar } from "./(ui)/shareComponent/Navbar";
import { Footer } from "./(ui)/shareComponent/Footer";
import { Intro } from "./(ui)/home/Intro";
import { motion } from "motion/react";
import { BackToTopButton } from "./(ui)/shareComponent/BackToTopBtn";

export default function Home() {
  return (
    <div className="grid grid-rows-[8rem_1fr_6rem] min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <motion.main className="max-w-[1440px] mx-auto flex flex-col gap-4 row-start-2 items-center justify-center">
        <Intro />
        <BackToTopButton />
      </motion.main>
      <Footer />
    </div>
  );
}
