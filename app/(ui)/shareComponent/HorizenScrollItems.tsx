"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, MotionValue, useSpring } from "motion/react";
import { Item } from "@/app/(data)/types";

function useParallax(value: MotionValue<number>, distance: string) {
  return useTransform(value, [0, 1], ["0", `-${distance}%`]);
}

function Card({ title, description, id, xPosition }: { title: string; description: string; id: number; xPosition: MotionValue<string> }) {
  return (
    <motion.li style={{ x: xPosition }} className="flex w-full items-center justify-center flex-col">
      <div className="w-[1200px] h-[300px] flex flex-col items-center justify-center md:h-[400px]">
        <div className="text-2xl mb-5">{title}</div>
        <div className="text-base mx-64 w-48 text-center md:w-fit">{description}</div>
      </div>
      <h3 className="text-2xl text-slate-500">{`#${id}`}</h3>
    </motion.li>
  );
}

export const HorizenScrollItems = ({ items }: { items: Item[] }) => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef });
  const xPosition = useParallax(scrollYProgress, `${items.length - 1}00`);
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="relative">
      <motion.section ref={sectionRef} className="max-w-[80svw] relative h-[400vh]">
        {isInView && (
          <>
            <motion.div className="fixed bottom-[150px] left-16 right-16 md:left-96 md:right-96  bg-slate-200 origin-[0%] h-[5px] md:bottom-[80px]" style={{ scaleX, zIndex: "3" }} />
            <div style={{ zIndex: "2" }} className="fixed bottom-[150px] left-16 right-16 md:left-96 md:right-96 bg-red-200 h-[5px] md:bottom-[80px]"></div>
          </>
        )}
        <ul className="z-10 flex sticky top-36 overflow-hidden bg-white">
          {items.map((item) => (
            <Card title={item.title} description={item.description} id={item.id} xPosition={xPosition} key={item.id} />
          ))}
        </ul>
      </motion.section>
    </div>
  );
};
