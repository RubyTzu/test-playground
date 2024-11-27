"use client"
import { useRef } from "react";
import { useInView, motion } from "motion/react";
import { SectionTitle } from "@/app/(ui)/shareComponent/SectionTitle";
import { Title } from "@/app/(data)/types";

const skillTitle: Title[] = [
  {
    id: "1",
    title: "HTML",
    level: "85%",
  },
  {
    id: "2",
    title: "CSS",
    level: "90%",
  },
  {
    id: "3",
    title: "JavaScript",
    level: "70%",
  },
  {
    id: "4",
    title: "Tailwind CSS",
    level: "80%",
  },
  {
    id: "5",
    title: "NodeJS",
    level: "60%",
  },
  {
    id: "6",
    title: "ReactJS",
    level: "70%",
  },
  {
    id: "7",
    title: "Web Management",
    level: "95%",
  },
  {
    id: "8",
    title: "Git",
    level: "70%",
  },
  {
    id: "9",
    title: "TypeScript",
    level: "60%",
  },
  {
    id: "10",
    title: "Motion",
    level: "80%",
  },
  {
    id: "11",
    title: "AEM",
    level: "60%",
  },
  {
    id: "12",
    title: "JIRA",
    level: "60%",
  },
];

export const Skills = () => {
  return (
    <div>
     <SectionTitle>Skills</SectionTitle> 
      <div className="grid gap-4 grid-cols-6">
        {skillTitle.map((skill: any) => {
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