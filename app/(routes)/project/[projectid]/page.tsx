"use client";
import { useParams } from "next/navigation";
import { ProjectIntro } from "@/app/(ui)/project/singleProject/ProjectIntro";
import { ProjectThreePictures } from "@/app/(ui)/project/singleProject/ProjecThreePicture";
import { ProjectOnePicture } from "@/app/(ui)/project/singleProject/ProjectOnePicture";
import { ProjectDetails } from "@/app/(data)/types";
import { ProjectOneVideo } from "@/app/(ui)/project/singleProject/ProjectOneVideo";
import { useProjectContext } from "@/app/(data)/Provider";
import { ProjectStaffDetail } from "@/app/(ui)/project/singleProject/ProjectStaffDetail";

export default function Page() {
  const { projectid } = useParams<{ projectid: string }>();
  const projectDatas = useProjectContext() || [];
  const projectData: ProjectDetails = projectDatas.filter((project) => project.id === Number(projectid))[0];

  return (
    <>
      {projectDatas.length !== 0 ? (
        <div className="flex flex-col gap-36 md:gap-48 xl:gap-80 2xl:gap-96">
          <ProjectIntro projectData={projectData} />
          <ProjectThreePictures projectData={projectData} title="- Brainstorming" />
          <ProjectOnePicture projectData={projectData} title={"- Making"} />
          <ProjectOneVideo projectData={projectData} title={"- Outcome"} />
          <ProjectStaffDetail projectData={projectData} title={"-"} />

        </div>
      ) : null}
    </>
  );
}
