"use client";
import { SectionTitle } from "@/app/(ui)/shareComponent/SectionTitle";
import { HorizenScrollItems } from "../shareComponent/HorizenScrollItems";
import { useAboutContext } from "@/app/(data)/Provider";

export const Experience = () => {
  const experiences = useAboutContext().experiences || [];

  const reverseItems = [...experiences].reverse();

  return (
    <div className="relative">
      <div className="z-20 sticky top-0">
        <SectionTitle>Experience</SectionTitle>
      </div>
      <HorizenScrollItems items={reverseItems} />
    </div>
  );
};
