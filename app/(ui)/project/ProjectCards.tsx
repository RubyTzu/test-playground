"use client";
import { useRouter } from "next/navigation";
import { motion, useInView } from "motion/react";
import { Project } from "@/app/(data)/types";
import { useRef, useState } from "react";
import { useProjectContext } from "@/app/(data)/Provider";

export const ProjectCards = () => {
  const projects = useProjectContext() || [];
  const projectDatas = [...projects].reverse();

  return (
    <div className="pt-4 grid gap-36 grid-cols-1  md:mt-12 lg:36 md:gap-48 xl:gap-64 2xl:mt-32 2xl:gap-64">
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
    <div id={String(projectData.id)} ref={ref} className="grid gap-10 grid-cols-1 scroll-mt-32 md:grid-cols-6 md:scroll-mt-36">
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
      <motion.div initial={{ translateX: 10, opacity: 0, scale: 0.99 }} animate={{ translateX: isInView ? 0 : 10, opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.99 }} transition={{ duration: 0.5, ease: [0, 0.1, 0.7, 1.01] }} className="col-span-3 flex flex-col  md:justify-end items-end text-right">
        <div className="text-lg font-semibold text-left md:text-right w-full">{projectData.title}</div>
        <div className="mb-10 text-left md:text-right w-full">{projectData.description}</div>
        <div onClick={handleClick} className="border-b-primary-300 border-b-2 cursor-pointer">
          Learn More
        </div>
      </motion.div>
    </div>
  );
};
