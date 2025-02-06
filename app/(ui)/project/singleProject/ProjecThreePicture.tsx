import { ProjectDetails } from "@/app/(data)/types";
import Image from "next/image";

export const ProjectThreePictures = ({ projectData, title }: { projectData: ProjectDetails; title: string }) => {
  return (
    <div>
      <div className="text-lg font-semibold">{title}</div>
      <div>{projectData.brainStormingDescription}</div>
      {title === "- Brainstorming" ? (
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projectData.brainStormingImg.map((Img, idx) => (
            <Image key={idx} src={Img} width={1920} height={1080} className="h-64 object-cover border" alt="Brainstorming img"></Image>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
