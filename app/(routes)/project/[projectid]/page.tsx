"use client";
import { Navbar } from "@/app/(ui)/shareComponent/Navbar";
import { Footer } from "@/app/(ui)/shareComponent/Footer";
import { useParams } from "next/navigation";
import { BackToTopButton } from "@/app/(ui)/shareComponent/BackToTopBtn";
import { ProjectIntro } from "@/app/(ui)/project/singleProject/ProjectIntro";
import { ProjectThreePictures } from "@/app/(ui)/project/singleProject/ProjecThreePicture";
import { ProjectOnePicture } from "@/app/(ui)/project/singleProject/ProjectOnePicture";
import { projectDatas } from "@/app/(data)/dummyData";
import { ProjectDetails } from "@/app/(data)/types";

export default function Page() {
  const { projectid } = useParams<{ projectid: string }>();
  const projectData: ProjectDetails = projectDatas.filter((project) => project.id === Number(projectid))[0];

  return (
    <div className="grid grid-rows-[8rem_1fr_6rem] min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="mx-auto w-screen px-20 flex flex-col gap-80 row-start-2 md:max-w-[1240px]">
        <ProjectIntro projectData={projectData} />
        <ProjectThreePictures projectData={projectData} title="- Brainstorming" />
        <ProjectOnePicture projectData={projectData} title={"- Making"} />
        <ProjectOnePicture projectData={projectData} title={"- Outcome"} />
        <BackToTopButton />
      </main>
      <Footer />
    </div>
  );
}
