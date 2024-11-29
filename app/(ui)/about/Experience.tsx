"use client"
import { SectionTitle } from "@/app/(ui)/shareComponent/SectionTitle";
import { HorizenScrollItems } from "../shareComponent/HorizenScrollItems";
import { Item } from "@/app/(data)/types";

const items: Item[] = [
  { title: "First", description: "Happy first job ever, the colleagues were nice and the projects were fun, yet I want to explore the world more.", id: 1 },
  { title: "Second", description: "Temp Job for transition of my next career, great operating team.", id: 2 },
  { title: "Third", description: "The weirdest place I ever been, people are scared all the time.", id: 3 },
  { title: "Fourth", description: "Nice opportunity for developer newbies, yet the dev team seems to be disbanding at any moment.", id: 4 },
  { title: "Fifth", description: "Keep going and beyond", id: 5 },
];

items.reverse();

export const Experience = () => {
return (
  <div className="relative">
    <div className="z-20 sticky top-0 bg-white">
      <SectionTitle>Experience</SectionTitle>
    </div>
    <HorizenScrollItems items={items} />
  </div>
);
}