"use client"
import { Navbar } from "@/app/(ui)/shareComponent/Navbar";
import { Footer } from "@/app/(ui)/shareComponent/Footer";
import { motion } from "motion/react";

export default function Page() {

  

  return (
    <div className="grid grid-rows-[8rem_1fr_6rem] min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="bg-slate-400 flex flex-col gap-4 row-start-2 justify-center items-center">
        <motion.div className="h-5 w-5 bg-black" animate={{ x: 100 }} transition={{ duration: 0.3, ease: "linear" }} />
        <motion.div
          className="w-48 h-48 rounded-full bg-red-200"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        />
      </main>
      <Footer />
    </div>
  );
}