"use client";
import { useParams } from "next/navigation";
import { ProjectIntro } from "@/app/(ui)/project/singleProject/ProjectIntro";
import { ProjectThreePictures } from "@/app/(ui)/project/singleProject/ProjecThreePicture";
import { ProjectOnePicture } from "@/app/(ui)/project/singleProject/ProjectOnePicture";
import { projectDatas } from "@/app/(data)/dummyData";
import { ProjectDetails } from "@/app/(data)/types";
import { ProjectOneVideo } from "@/app/(ui)/project/singleProject/ProjectOneVideo";

export default function Page() {
  const { projectid } = useParams<{ projectid: string }>();
  const projectData: ProjectDetails = projectDatas.filter((project) => project.id === Number(projectid))[0];

  return (
        <div className="flex flex-col gap-36 md:gap-80">
        <ProjectIntro projectData={projectData} />
        <ProjectThreePictures projectData={projectData} title="- Brainstorming" />
        <ProjectOnePicture projectData={projectData} title={"- Making"} />
        <ProjectOneVideo projectData={projectData} title={"- Outcome"} />
      </div>
  );
}
