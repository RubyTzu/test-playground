import { ProjectDetails } from "@/app/(data)/types";

export const ProjectOnePicture = ({ projectData, title }: { projectData: ProjectDetails; title: string }) => {
  return (
    <div>
      <div className="text-lg font-semibold">{title}</div>
      {title === "- Making" ? (
        <>
          <div>{projectData.makingDescription}</div>
          <div className={`mt-12 w-full h-64 mx-auto md:h-96 md:w-[80%] ${projectData.makingImg}`}></div>
        </>
      ) : null}
    </div>
  );
};

