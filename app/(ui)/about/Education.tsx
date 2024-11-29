"use client"
import { SectionTitle } from "@/app/(ui)/shareComponent/SectionTitle";
import { HorizenScrollItems } from "../shareComponent/HorizenScrollItems";
import { Item } from "@/app/(data)/types";

const items: Item[] = [
  { title: "First", description: "University is where I met my best friends.", id: 1 },
  { title: "Second", description: "Truly taught me how to write codes.", id: 2 }
];

items.reverse();

export const Education = () => {
  return (
    <div className="relative">
      <div className="z-20 sticky top-0 bg-white">
        <SectionTitle>Education</SectionTitle>
      </div>
      <HorizenScrollItems items={items} />
    </div>
  );
};