"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import Image from "next/image";
import { ProjectDetails } from "@/app/(data)/types";
import { DotLoading } from "../loading/DotLoading";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false, loading: () => <div></div> });

export const VideoPlayer = ({ projectData }: { projectData: ProjectDetails }) => {
  const [isPop, setIsPop] = useState(false);

  const handleOpen = () => {
    setIsPop(true);
  };
  const handleClose = () => {
    setIsPop(false);
  };

  return (
    <div className="relative w-[80vw] h-fit mx-auto md:w-[80%]">
      <Image onClick={handleOpen} src={projectData.videoImg} width={1920} height={1080} alt="Youtube image" className="z-10 relative w-full object-cover cursor-pointer" />
      {isPop ? (
        <div className="z-20 absolute top-0 left-0 w-full h-full">
          <div className="relative w-full h-full">
            <div onClick={handleClose} className="z-30 px-4 py-2 absolute bottom-[-60px] left-2  text-slate-600 text-base cursor-pointer border-transparent border-b-slate-600 border-2">
              close
            </div>
            <div className="z-30 relative w-full h-full ">
              <ReactPlayer
                className="w-screen"
                url={projectData.videoUrl}
                playing={true}
                loop={true}
                controls={true}
                width={"100%"}
                height={"100%"}
                config={{
                  youtube: {
                    playerVars: {
                      iv_load_policy: 3,
                    },
                  },
                }}
              />
            </div>
            <DotLoading />
          </div>
        </div>
      ) : (
        <div onClick={handleOpen} className="z-30 px-4 py-2 absolute bottom-[-60px] left-2  text-slate-600 text-base cursor-pointer border-transparent border-b-slate-600 border-2">
          play
        </div>
      )}
    </div>
  );
};
