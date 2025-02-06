import { ProjectDetails } from "@/app/(data)/types";
import Image from "next/image";

export const ProjectOnePicture = ({ projectData, title }: { projectData: ProjectDetails; title: string }) => {
  return (
    <div>
      <div className="text-lg font-semibold">{title}</div>
      {title === "- Making" ? (
        <>
          <div>{projectData.makingDescription}</div>
          <Image src={projectData.makingImg} width={1920} height={1080} className="mt-12 w-full h-64 mx-auto md:h-96 md:w-[80%]  object-cover border" alt=""></Image>
        </>
      ) : null}
    </div>
  );
};

