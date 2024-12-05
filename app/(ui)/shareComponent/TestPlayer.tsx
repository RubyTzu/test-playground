"use client";
import dynamic from "next/dynamic";
// Dynamically import ReactPlayer with ssr: false to prevent SSR
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false, loading: () => <div>Loading video...</div> });

export const TestPlayer = () => {
  return (
    <>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=vEhD5WwCo44"
        playing={false}
        controls={true}
        width={640}
        height={360}
        config={{
          youtube: {
            playerVars: {
              modestbranding: false,
              showinfo: 0,
              iv_load_policy: 3,
            },
          },
        }}
      />
    </>
  );
};
