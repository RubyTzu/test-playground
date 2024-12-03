import { ProjectDetails } from "@/app/(data)/types";

export const ProjectOnePicture = ({ projectData, title }: { projectData: ProjectDetails; title: string }) => {
  return (
    <div>
      <div className="text-lg font-semibold">{title}</div>
      {title === "- Making" ? (
        <>
          <div>{projectData.makingDescription}</div>
          <div className={`mt-12 mb-64 h-72 w-full ${projectData.makingImg}`}></div>
        </>
      ) : (
        <>
          <div>{projectData.outComeDescription}</div>
          <div className={`mt-12 mb-64 h-72 w-full ${projectData.outComeImg}`}></div>
        </>
      )}
    </div>
  );
};

