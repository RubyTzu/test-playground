import { ProjectDetails } from "@/app/(data)/types";

export const ProjectThreePictures = ({ projectData, title }: { projectData: ProjectDetails; title: string }) => {
  return (
    <div>
      <div className="text-lg font-semibold">{title}</div>
      <div>{projectData.brainStormingDescription}</div>
      {title === "- Brainstorming" ? (
        <div className="mt-12 grid gap-6 grid-cols-3">
          {projectData.brainStormingImg.map((Img) => (
            <div key={Img} className={`h-64 ${Img}`}></div>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
