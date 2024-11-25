"use client";
import { useRef } from "react";
import { Navbar } from "@/app/(ui)/shareComponent/Navbar";
import { Footer } from "@/app/(ui)/shareComponent/Footer";
import { motion, useScroll, useTransform } from "motion/react";

export default function Page() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef });
  const xPosition = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <div className="grid grid-rows-[8rem_1fr_6rem] min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="flex flex-col gap-4 row-start-2  justify-center items-center">
        {/* test start */}
              <section ref={sectionRef} className="relative h-[500vh]">
                <ul className="flex sticky top-0">
                  <motion.li style={{ x: xPosition }} initial={{ opacity: 0, x: 200 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 * 0.2, duration: 0.8 }} className="flex w-full h-screen items-center justify-center flex-col">
                    <div className="w-[300px] h-[400px] bg-slate-200" />
                    <h3 className="text-5xl text-red-500">#1</h3>
                  </motion.li>
                  <motion.li style={{ x: xPosition }} initial={{ opacity: 0, x: 200 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 2 * 0.2, duration: 0.8 }} className="flex w-full h-screen items-center justify-center flex-col">
                    <div className="w-[300px] h-[400px] bg-slate-300" />
                    <h3 className="text-5xl text-red-500">#2</h3>
                  </motion.li>
                  <motion.li style={{ x: xPosition }} initial={{ opacity: 0, x: 200 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 3 * 0.2, duration: 0.8 }} className="flex w-full h-screen items-center justify-center flex-col">
                    <div className="w-[300px] h-[400px] bg-slate-400" />
                    <h3 className="text-5xl text-red-500">#3</h3>
                  </motion.li>
                  <motion.li style={{ x: xPosition }} initial={{ opacity: 0, x: 200 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 4 * 0.2, duration: 0.8 }} className="flex w-full h-screen items-center justify-center flex-col">
                    <div className="w-[300px] h-[400px] bg-slate-500" />
                    <h3 className="text-5xl text-red-500">#4</h3>
                  </motion.li>
                  <motion.li style={{ x: xPosition }} initial={{ opacity: 0, x: 200 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 5 * 0.2, duration: 0.8 }} className="flex w-full h-screen items-center justify-center flex-col">
                    <div className="w-[300px] h-[400px] bg-slate-600" />
                    <h3 className="text-5xl text-red-500">#5</h3>
                  </motion.li>
                </ul>
              </section>
        {/* test end */}
      </main>
      <Footer />
    </div>
  );
}
