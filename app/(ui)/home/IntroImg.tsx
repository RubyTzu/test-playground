"use client";
import { useIntroContext } from "@/app/(data)/Provider";
import { motion } from "motion/react";

export const IntroImg = () => {
  const img = useIntroContext().img || undefined;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        exit={{ opacity: 0, scale: 0.5 }}
        layout
        className="hidden w-48 h-48 overflow-hidden border rounded-full">
        <motion.img src={img} width={1920} height={1080} alt="test image" className="w-48 h-48 object-cover bg-primary-200"></motion.img>
      </motion.div>
      <div
        className="mb-16 relative flex flex-col justify-center
      ">
        <ShapeDrawing />
        <ShapeDrawingSmallCircle />
        <ShapeDrawingBigCircle />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.4,
            delay: 1.2,
            ease: "linear",
          }}
          exit={{ opacity: 0 }}
          className="relative left-2 bg-primary-200  rounded-r-full w-10 h-10"></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.4,
            delay: 1.3,
            ease: "linear",
          }}
          className="relative left-2 bg-primary-500 rounded-tr-full w-16 h-12"></motion.div>
      </div>
    </>
  );
};

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = i * 0.5;
    return {
      pathLength: 1,
      opacity: [0, 0.8, 1, 0],
      transition: {
        pathLength: { delay, type: "linear", duration: 1, bounce: 0 },
        opacity: { duration: 1.8 },
      },
    };
  }
};

function ShapeDrawing() {
  return (
    <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
      <motion.svg
        width="240"
        height="240"
        viewBox="0 0 240 240"
        initial="hidden"
        animate="visible"
        style={{
          maxWidth: "80vw",
        }}>
        <motion.line
          x1="96"
          y1="76"
          x2="96"
          y2="164"
          stroke="#ffe3e0"
          variants={draw}
          custom={0.5}
          style={{
            strokeWidth: 2,
          }}
        />
        <motion.line
          x1="96"
          y1="77"
          x2="119"
          y2="77"
          stroke="#ffe3e0"
          variants={draw}
          custom={1.5}
          style={{
            strokeWidth: 2,
          }}
        />
        <motion.circle
          className="circle-path"
          cx="116"
          cy="96"
          r="19"
          stroke="#ffe3e0"
          variants={draw}
          custom={2}
          style={{
            strokeWidth: 2,
            strokeLinecap: "round",
            fill: "transparent",
          }}
        />
        <motion.line
          x1="96"
          y1="164"
          x2="160"
          y2="164"
          stroke="#9c0606"
          variants={draw}
          custom={2}
          style={{
            strokeWidth: 2,
          }}
        />
      </motion.svg>
    </div>
  );
}

const drawCircle = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "linear", duration: 1, bounce: 0 },
        opacity: { delay, duration: 2 },
      },
    };
  },
};

function ShapeDrawingBigCircle() {
  return (
    <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
      <motion.svg
        width="240"
        height="240"
        viewBox="0 0 240 240"
        initial="hidden"
        animate="visible"
        style={{
          maxWidth: "80vw",
        }}>
        <motion.circle
          className="circle-path"
          cx="120"
          cy="120"
          r="100"
          stroke="#ffe3e0"
          variants={drawCircle}
          custom={2.5}
          style={{
            strokeWidth: 5,
            strokeLinecap: "round",
            fill: "transparent",
          }}
        />
      </motion.svg>
    </div>
  );
}


const drawSmallCircle = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = i * 0.5;
    return {
      pathLength: 1,
      opacity: [0, 0.8, 1, 0],
      transition: {
        pathLength: { type: "linear", duration: 1.2, bounce: 0 },
        opacity: { delay, duration: 1 },
      },
    };
  },
};

function ShapeDrawingSmallCircle() {
  return (
    <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
      <motion.svg
        width="240"
        height="240"
        viewBox="0 0 240 240"
        initial="hidden"
        animate="visible"
        style={{
          maxWidth: "80vw",
        }}>
        <motion.circle
          className="circle-path"
          cx="105"
          cy="172"
          r="56"
          stroke="#9c0606"
          variants={drawSmallCircle}
          custom={0.5}
          style={{
            strokeWidth: 2,
            strokeLinecap: "round",
            fill: "transparent",
          }}
        />
      </motion.svg>
    </div>
  );
}