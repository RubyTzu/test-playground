import { ProjectDetails } from "@/app/(data)/types";
import { VideoPlayer } from "../../shareComponent/VideoPlayer";

export const ProjectOneVideo = ({ projectData, title }: { projectData: ProjectDetails; title: string }) => {
  return (
    <div>
      <div className="text-lg font-semibold pb-4">{title}</div>
      {title === "- Outcome" ? (
        <>
          <div>{projectData.outComeDescription}</div>
          <div className="my-10 mb-64">
            <VideoPlayer projectData={projectData} />
          </div>
        </>
      ) : null}
    </div>
  );
};
