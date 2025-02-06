"use client"
import { SectionTitle } from "@/app/(ui)/shareComponent/SectionTitle";
import { HorizenScrollItems } from "../shareComponent/HorizenScrollItems";
import { Item } from "@/app/(data)/types";

export const Experience = ({ experiences }: { experiences: Item[] }) => {
  const reverseItems = [...experiences].reverse();

  return (
    <div className="relative">
      <div className="z-20 sticky top-0 bg-white">
        <SectionTitle>Experience</SectionTitle>
      </div>
      <HorizenScrollItems items={reverseItems} />
    </div>
  );
};
