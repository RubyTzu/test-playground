"use client"
import { SectionTitle } from "@/app/(ui)/shareComponent/SectionTitle";
import { HorizenScrollItems } from "../shareComponent/HorizenScrollItems";
import { useAboutContext } from "@/app/(data)/Provider";

export const Education = () => {
  const educations = useAboutContext().educations || [];
  const reverseItems = [...educations].reverse();

  return (
    <div className="relative">
      <div className="z-20 sticky top-0 bg-white">
        <SectionTitle>Education</SectionTitle>
      </div>
      <HorizenScrollItems items={reverseItems} />
    </div>
  );
};