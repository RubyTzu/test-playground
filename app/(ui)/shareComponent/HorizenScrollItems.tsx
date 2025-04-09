"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, MotionValue, useSpring } from "motion/react";
import { Item } from "@/app/(data)/types";

function useParallax(value: MotionValue<number>, distance: string) {
  return useTransform(value, [0, 1], ["0", `-${distance}%`]);
}

function Card({ title, description, id, subtitleOne, subtitleTwo, xPosition }: { title: string; description: string; id: number; subtitleOne: string; subtitleTwo: string; xPosition: MotionValue<string> }) {
  return (
    <motion.li style={{ x: xPosition }} className="flex w-full items-center justify-center flex-col">
      <div className="w-[1080px] h-[280px] flex flex-col items-center justify-center md:h-[200px] 2xl:h-[360px] 2xl:w-[1600px]">
        <div className="text-lg font-semibold md:text-2xl md:mb-2 2xl:text-2xl">{title}</div>
        <div className="text-base mb-8 2xl:text-xl">{subtitleOne}</div>
        <div className="text-base mx-64 w-48 text-center md:w-fit 2xl:text-xl">{description}</div>
      </div>
      <div className="text-base pb-5 2xl:text-xl">{subtitleTwo}</div>
      <h3 className="text-2xl 2xl:text-3xl">{`#${id}`}</h3>
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
            <motion.div className="fixed bottom-[120px] left-16 right-16 md:left-96 md:right-96 2xl:left-[30%] 2xl:right-[30%]  bg-primary-100 origin-[0%] h-[5px] md:bottom-[80px] 2xl:bottom-[160px]" style={{ scaleX, zIndex: "12" }} />
            <div style={{ zIndex: "11" }} className="fixed bottom-[120px] left-16 right-16 md:left-96 md:right-96 2xl:left-[30%] 2xl:right-[30%]  bg-primary-300 h-[5px] md:bottom-[80px] 2xl:bottom-[160px]"></div>
          </>
        )}
        <ul className="z-10 flex sticky top-36 overflow-hidden 2xl:top-64">
          {items.map((item) => (
            <Card title={item.title} description={item.description} id={item.id} subtitleOne={item.subtitleOne} subtitleTwo={item.subtitleTwo} xPosition={xPosition} key={item.id} />
          ))}
        </ul>
      </motion.section>
    </div>
  );
};
