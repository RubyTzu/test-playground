"use client"
import { useRef } from "react";
import { useInView, motion } from "motion/react";
import { SectionTitle } from "@/app/(ui)/shareComponent/SectionTitle";
import { useAboutContext } from "@/app/(data)/Provider";

export const Skills = () => {
const skills = useAboutContext().skills || [];

  return (
    <div>
      <SectionTitle>Skills</SectionTitle>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-6">
        {skills.map((skill: any) => {
          return <Skill key={skill.id} id={skill.id} title={skill.title} lineWidth={skill.level} />;
        })}
      </div>
    </div>
  );
};

const Skill = ({ id, title, lineWidth }: { id: string; title: string; lineWidth: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const lineRef = useRef(null);
  const isLineInView = useInView(lineRef, { once: false });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col gap-4 pt-6 px-4 pb-4 rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.1)]"
      initial={{ opacity: 0, x: -20 }}
      animate={{
        opacity: isInView ? 1 : 0,
        x: isInView ? 0 : -20,
      }}
      transition={{
        duration: 2,
        delay: Number(id) * 0.01,
        ease: [0.74, 0, 0.19, 1.02],
      }}>
      <div className="text-sm">{title}</div>
      <div className="w-full border border-red-100 h-3 rounded-full">
        <motion.div
          ref={lineRef}
          className={`border bg-red-200 h-3 rounded-full`}
          initial={{ width: 0 }}
          animate={{ width: isLineInView ? lineWidth : 0 }}
          transition={{
            duration: 3,
            delay: Number(id) * 0.07,
            ease: [0.74, 0, 0.19, 1.02],
          }}></motion.div>
      </div>
    </motion.div>
  );
};