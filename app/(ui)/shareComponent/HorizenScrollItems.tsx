"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue, cubicBezier } from "motion/react";
import { Item } from "@/app/(data)/types";

function useParallax(value: MotionValue<number>, distance: string) {
  return useTransform(value, [0, 1], ["0", `-${distance}%`], { ease: cubicBezier(0.17, 0.67, 0.57, 0.95) });
}

function Card({ title, description, id, xPosition }: { title:string;description:string; id: number; xPosition: MotionValue<string> }) {
  return (
    <motion.li style={{ x: xPosition }} className="flex w-full items-center justify-center flex-col">
      <div className="w-[1200px] h-[400px] flex flex-col items-center justify-center">
        <div className=" text-2xl mb-5">{title}</div>
        <div className=" text-base mx-64 text-center">{description}</div>
      </div>
      <h3 className="text-2xl text-slate-500">{`#${id}`}</h3>
    </motion.li>
  );
}

export const HorizenScrollItems = ({ items }: { items: Item[] }) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef });
  const xPosition = useParallax(scrollYProgress, `${items.length - 1}00`);

  return (
    <motion.section ref={sectionRef} className="z-10 max-w-[80svw] relative h-[400vh]">
      <ul className="flex sticky top-36 overflow-hidden">
        {items.map((item) => (
          <Card title={item.title} description={item.description} id={item.id} xPosition={xPosition} key={item.id} />
        ))}
      </ul>
    </motion.section>
  );
};
