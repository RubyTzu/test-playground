"use client";
import { useAboutContext } from "@/app/(data)/Provider";
import { motion } from "motion/react";
import { Fragment } from "react";

export const AboutMe = () => {
  const aboutMe = useAboutContext().aboutMe || {};

  return (
    <>
      <div className="pt-8 grid gap-12 grid-cols-1 md:gap-20 md:pt-16 xl:mt-24 md:grid-cols-2">
        <motion.div className="flex order-last justify-center items-center md:order-1" initial={{ translateY: 10, opacity: 0, scale: 0.99 }} animate={{ translateY: 0, opacity: 1, scale: 1 }} transition={{ duration: 0.3, ease: [0, 0.1, 0.7, 1.01] }}>
          {aboutMe.description?.split("\n").map((line: string, index: number) => {
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
        </motion.div>
        <motion.div initial={{ translateY: 10, opacity: 0, scale: 0.99 }} animate={{ translateY: 0, opacity: 1, scale: 1 }} transition={{ duration: 0.5, ease: [0, 0.1, 0.7, 1.01] }} className="h-64 md:order-last overflow-hidden border">
          <motion.img src={aboutMe.img} width={1920} height={1080} alt="test image" className="h-64 object-cover"></motion.img>
        </motion.div>
      </div>
    </>
  );
};
