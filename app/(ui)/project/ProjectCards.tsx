"use client";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { Project } from "@/app/(data)/types";
import { projectDatas } from "@/app/(data)/dummyData";

export const ProjectCards = () => {
  return (
    <div className="pt-36 grid gap-96 grid-cols-1">
      {projectDatas.map((projectData) => {
        return <ProjectCard projectData={projectData} key={projectData.id}/>;
      })}
    </div>
  );
};

const ProjectCard = ({projectData}:{projectData: Project}) => {
  const route = useRouter();
  const handleClick = () => {
    route.push(`/project/${projectData.id}`);
  }
  
  return (
    <div className="grid gap-10 grid-cols-6">
      <motion.div onClick={handleClick} initial={{ translateY: -10, opacity: 0, scale: 0.99 }} animate={{ translateY: 0, opacity: 1, scale: 1 }} transition={{ duration: 0.3, ease: [0, 0.1, 0.7, 1.01] }} className={`col-span-3 h-64 ${projectData.img}  cursor-pointer`}></motion.div>
      <motion.div initial={{ translateX: 10, opacity: 0, scale: 0.99 }} animate={{ translateX: 0, opacity: 1, scale: 1 }} transition={{ duration: 0.3, ease: [0, 0.1, 0.7, 1.01] }} className="col-span-3 flex flex-col justify-end items-end text-right">
        <div className="text-lg font-semibold">{projectData.title}</div>
        <div className="mb-10">{projectData.description}</div>
        <div onClick={handleClick} className="border-b-red-400 border-b-2 cursor-pointer">Learn More</div>
      </motion.div>
    </div>
  );
}
