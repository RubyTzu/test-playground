"use client";
import { useRouter } from "next/navigation";
import { motion, useInView } from "motion/react";
import { Project } from "@/app/(data)/types";
import { projectDatas } from "@/app/(data)/dummyData";
import { useRef, useState } from "react";

export const ProjectCards = () => {
  return (
    <div className="pt-36 grid gap-96 grid-cols-1">
      {projectDatas.map((projectData) => {
        return <ProjectCard projectData={projectData} key={projectData.id} />;
      })}
    </div>
  );
};

const ProjectCard = ({ projectData }: { projectData: Project }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isHovered, setIsHovered] = useState(false);
  const route = useRouter();
  const handleClick = () => {
    route.push(`/project/${projectData.id}`);
  };

  return (
    <div id={String(projectData.id)} ref={ref} className="grid gap-10 grid-cols-6 scroll-mt-64">
      <motion.div onClick={handleClick} initial={{ translateY: -10, opacity: 0, scale: 0.99 }} animate={{ translateY: isInView ? 0 : -10, opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.99 }} transition={{ duration: 0.5, ease: [0, 0.1, 0.7, 1.01] }} className="col-span-3 overflow-hidden border cursor-pointer" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <motion.img
          whileHover={{
            scale: 1.2,
            transition: { type: "spring", stiffness: 300, damping: 30, duration: 0.2 },
          }}
          src={isHovered ? projectData.gif : projectData.img}
          width={1920}
          height={1080}
          alt="test image"
          className="h-64 object-cover"></motion.img>
      </motion.div>
      <motion.div initial={{ translateX: 10, opacity: 0, scale: 0.99 }} animate={{ translateX: isInView ? 0 : 10, opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.99 }} transition={{ duration: 0.5, ease: [0, 0.1, 0.7, 1.01] }} className="col-span-3 flex flex-col justify-end items-end text-right">
        <div className="text-lg font-semibold">{projectData.title}</div>
        <div className="mb-10">{projectData.description}</div>
        <div onClick={handleClick} className="border-b-red-400 border-b-2 cursor-pointer">
          Learn More
        </div>
      </motion.div>
    </div>
  );
};
