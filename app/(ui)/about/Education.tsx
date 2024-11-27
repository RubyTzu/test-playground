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
    <div>
      <SectionTitle>Education</SectionTitle>
      <HorizenScrollItems items={items} />
    </div>
  );
};