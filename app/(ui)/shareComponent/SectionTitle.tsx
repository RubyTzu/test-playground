"use client";
import { useRef } from "react";
import { useInView, motion } from "motion/react";

export const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="pt-20 pb-10" ref={ref}>
      <motion.div
        className="w-fit text-[28px] font-semibold md:text-[36px]"
        initial={{ opacity: 0, x: -20 }}
        animate={{
          opacity: isInView ? 1 : 0,
          x: isInView ? 0 : -20,
        }}
        transition={{
          duration: 0.9,
          ease: [0.17, 0.55, 0.55, 1],
          delay: 0.1,
        }}>
        {children}
      </motion.div>
    </section>
  );
};
