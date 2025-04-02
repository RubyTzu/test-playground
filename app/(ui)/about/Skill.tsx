"use client";
import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "motion/react";
import { SectionTitle } from "@/app/(ui)/shareComponent/SectionTitle";
import { useAboutContext } from "@/app/(data)/Provider";
import { SkillsSumType } from "@/app/(data)/types";
import { clsx } from "clsx";
import { animate } from "motion";

export const Skills = () => {
  const skillsSum = useAboutContext().skillsSum || [];
  const skills = useAboutContext().skills || [];

  return (
    <div>
      <div className="flex flex-col justify-between pb-8 md:items-start md:pb-0 md:flex-row">
        <SectionTitle>Skills</SectionTitle>
        <div className="flex justify-between md:items-center md:pt-[5.5rem]">
          {skillsSum.map((skillSum: SkillsSumType) => {
            return (
              <div
                key={skillSum.id}
                className={clsx("flex flex-col md:items-end", {
                  "md:pr-[5.5rem]": Number(skillSum.id) !== skillsSum.length,
                })}>
                <div className="text-2xl">
                  <UseAnimatedCounter maxValue={skillSum.number} initialValue={0} duration={1.2} />
                </div>
                <div>{skillSum.title}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-6">
        {skills.map((skill: any) => {
          return <Skill key={skill.id} id={skill.id} title={skill.title} lineWidth={skill.level} />;
        })}
      </div>
    </div>
  );
};

const UseAnimatedCounter = ({ maxValue, initialValue, duration }: { maxValue: number; initialValue: number; duration: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const [counter, setCounter] = useState<number>(initialValue);

  useEffect(() => {
    const controls = animate(initialValue, maxValue, {
      duration,
      ease: [0.42, 0, 0.58, 1],
      onUpdate: (latest) => {
        setCounter(Math.round(latest));
      },
    });
    return () => controls.stop();
  }, [initialValue, maxValue, duration, isInView]);

  return <motion.div ref={ref}>{counter}+</motion.div>;
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
      <div className="w-full border border-primary-200 h-3 rounded-full">
        <motion.div
          ref={lineRef}
          className={` bg-primary-300 h-[0.7rem] rounded-full`}
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
