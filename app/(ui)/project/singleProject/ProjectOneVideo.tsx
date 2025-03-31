import { ProjectDetails } from "@/app/(data)/types";
import { VideoPlayer } from "../../shareComponent/VideoPlayer";
import { Fragment } from "react";

export const ProjectOneVideo = ({ projectData, title }: { projectData: ProjectDetails; title: string }) => {
  return (
    <div>
      <div className="text-lg font-semibold pb-4">{title}</div>
      {title === "- Outcome" ? (
        <>
          <div>
            {projectData.outComeDescription?.split("\n").map((line: string, index: number) => {
              return (
                <Fragment key={index}>
                  {line}
                  <>
                    &nbsp;
                    <br />
                  </>
                </Fragment>
              );
            })}
          </div>
          <div className="my-10">
            <VideoPlayer projectData={projectData} />
          </div>
        </>
      ) : null}
    </div>
  );
};
