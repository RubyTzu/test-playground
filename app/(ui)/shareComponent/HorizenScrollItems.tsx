"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import { Item } from "@/app/(data)/types";

function useParallax(value: MotionValue<number>, distance: string) {
  return useTransform(value, [0, 1], ["0", `-${distance}%`]);
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
   const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef });
  const xPosition = useParallax(scrollYProgress, `${items.length - 1}00`);
  const lineScale = useTransform(scrollYProgress, [0, 1], ["0", "100%"]);

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

    // 清除觀察器
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);


console.log(`${items.length - 1}00`);
  return (
    <div className="relative">
      <motion.section ref={sectionRef} className="max-w-[80svw] relative h-[400vh]">
        {isInView && (
          <motion.div
            style={{
              zIndex: "1",
              position: "fixed",
              bottom: 80,
              left: "50%",
              translateX: "-50%",
              width: "30%",
              height: "5px",
              backgroundColor: "#fecaca",
            }}>
            <motion.div
              style={{
                height: "100%",
                backgroundColor: "#f3f3f3",
                width: lineScale,
              }}
            />
          </motion.div>
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
