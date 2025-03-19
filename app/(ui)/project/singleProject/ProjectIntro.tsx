"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { ProjectDetails } from "@/app/(data)/types";
import Image from "next/image";

export const ProjectIntro = ({projectData}:{projectData: ProjectDetails}) => {

  return (
    <div className="mt-0 xl:mt-2">
      <div className="flex flex-col justify-between items-end md:items-center md:flex-row">
        <div className="text-3xl font-semibold w-full">{projectData.title}</div>
        <div className="flex  gap-5 pt-7 md:gap-6 md:pt-0">
          <Link href={projectData.demoUrl} target="_blank" className="border-b-[#c44d4d] border-b-2 cursor-pointer h-fit">
            Demo
          </Link>
          <motion.div initial={{ translateX: -1, opacity: 0, scale: 0.99 }} animate={{ translateX: 0, opacity: 1, scale: 1 }} transition={{ duration: 0.3, ease: [0, 0.1, 0.7, 1.01] }} className="border-b-[#c44d4d] border-b-2 w-fit h-fit">
            <Link href={`/project/#${projectData.id}`}>Back</Link>
          </motion.div>
        </div>
      </div>
      <Image src={projectData.longImg} width={1920} height={1080} alt="test image" className="mt-8 w-full h-72 object-cover border md:mt-8 xl:mt-24"></Image>
      <div className="mt-14 text-center leading-6">{projectData.longDescription}</div>
    </div>
  );
};
