"use client";
import { useRef } from "react";
import { Navbar } from "@/app/(ui)/shareComponent/Navbar";
import { Footer } from "@/app/(ui)/shareComponent/Footer";
import { motion, useScroll, useSpring, useTransform, MotionValue } from "motion/react";
// import { cubicBezier } from "motion";

function useParallax(value: MotionValue<number>, distance: string) {
  return useTransform(value, [0, 1], ["0", `-${distance}%`]);
}

function Images({ id }: { id: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useParallax(scrollYProgress, "400");

  return (
    <section>
      <div ref={ref}>
        <div className="h-[500px] w-12 border-2 border-red-400" />
      </div>
      <motion.h2 style={{ x: x }}>{`#00${id}`}</motion.h2>
    </section>
  );
}

export default function Page() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef });
  // const xPosition = useTransform(scrollYProgress, [0, 1], ["0", "-400%"], { ease: cubicBezier(0.17, 0.67, 0.57, 0.95) });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="grid grid-rows-[8rem_1fr_6rem] min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="flex flex-col gap-4 row-start-2  justify-center items-center">
        {/* test start */}
        {[1, 2, 3, 4, 5].map((image) => (
          <Images id={image} key={image} />
        ))}
        <motion.div className="progress" style={{ scaleX }} />

        {/* <section ref={sectionRef} className="relative h-[500vh]">
          <ul className="flex sticky top-0">
            <motion.li style={{ x: xPosition }} className="flex w-full h-screen items-center justify-center flex-col">
              <div className="w-screen h-[400px] border" />
              <h3 className="text-5xl text-red-500">#1</h3>
            </motion.li>
            <motion.li style={{ x: xPosition }} className="flex w-full h-screen items-center justify-center flex-col">
              <div className="w-screen h-[400px] border" />
              <h3 className="text-5xl text-red-500">#2</h3>
            </motion.li>
            <motion.li style={{ x: xPosition }} className="flex w-full h-screen items-center justify-center flex-col">
              <div className="w-screen h-[400px] border" />
              <h3 className="text-5xl text-red-500">#3</h3>
            </motion.li>
            <motion.li style={{ x: xPosition }} className="flex w-full h-screen items-center justify-center flex-col">
              <div className="w-screen h-[400px] border" />
              <h3 className="text-5xl text-red-500">#4</h3>
            </motion.li>
            <motion.li style={{ x: xPosition }} className="flex w-full h-screen items-center justify-center flex-col">
              <div className="w-screen h-[400px] border" />
              <h3 className="text-5xl text-red-500">#5</h3>
            </motion.li>
          </ul>
        </section> */}
        {/* test end */}
      </main>
      <Footer />
    </div>
  );
}
