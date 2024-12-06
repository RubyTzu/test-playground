import { ProjectDetails } from "@/app/(data)/types";

export const ProjectOnePicture = ({ projectData, title }: { projectData: ProjectDetails; title: string }) => {
  return (
    <div>
      <div className="text-lg font-semibold">{title}</div>
      {title === "- Making" ? (
        <>
          <div>{projectData.makingDescription}</div>
           <div className={`mt-12 w-[80%] mx-auto h-96 ${projectData.makingImg}`}></div>
        </>
      ) : null}
    </div>
  );
};

