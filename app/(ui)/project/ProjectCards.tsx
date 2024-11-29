"use client";
import { Project } from "@/app/(data)/types";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";

const projectDatas: Project[] = [
  {
    id: 1,
    title: "Ocean",
    description: "I love this work so much, so proud to be involve in this project.",
    time: "2021",
    img: "bg-red-100",
  },
  {
    id: 2,
    title: "Simple Twitter",
    description: "Surely teach me how to write code.",
    time: "2023",
    img: "bg-red-200",
  },
  {
    id: 3,
    title: "LaBar game",
    description: "A little project that I joint.",
    time: "2024",
    img: "bg-red-300",
  },
  {
    id: 4,
    title: "Sizing Kit Store Location",
    description: "Small little project.",
    time: "2024",
    img: "bg-red-200",
  },
  {
    id: 5,
    title: "Chill split",
    description: "This is my fifth work, I truly admire the people who work with me in this project.",
    time: "2024",
    img: "bg-red-100",
  },
];

projectDatas.reverse();

export const ProjectCards = () => {
  return (
    <div className="pt-20 grid gap-72 grid-cols-1">
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
