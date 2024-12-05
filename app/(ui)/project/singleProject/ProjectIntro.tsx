"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { ProjectDetails } from "@/app/(data)/types";
import Image from "next/image";

export const ProjectIntro = ({projectData}:{projectData: ProjectDetails}) => {
  return (
    <div className="mt-2">
      <div className="flex justify-between items-center">
        <div className="text-3xl font-semibold">{projectData.title}</div>
        <div className="flex gap-4">
          <div className="border-b-red-400 border-b-2 cursor-pointer h-fit">Demo</div>
          <motion.div initial={{ translateX: -1, opacity: 0, scale: 0.99 }} animate={{ translateX: 0, opacity: 1, scale: 1 }} transition={{ duration: 0.3, ease: [0, 0.1, 0.7, 1.01] }} className="border-b-red-200 border-b-2 w-fit h-fit">
            <Link href={"/project"}>Back</Link>
          </motion.div>
        </div>
      </div>
      <Image src={projectData.longImg} width={1920} height={1080} alt="test image" className="mt-24 w-full h-72 object-cover border"></Image>
      <div className="mt-14 text-center leading-6">{projectData.longDescription}</div>
    </div>
  );
};
