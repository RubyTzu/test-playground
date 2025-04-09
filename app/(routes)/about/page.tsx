import { AboutMe } from "@/app/(ui)/about/AboutMe";
import { Skills } from "@/app/(ui)/about/Skill";
import { Experience } from "@/app/(ui)/about/Experience";
import { Education } from "@/app/(ui)/about/Education";

export default function page() {
  return (
    <div className="w-full flex flex-col gap-36 md:gap-72 2xl:gap-96">
      <AboutMe />
      <Skills />
      <Experience />
      <Education />
    </div>
  );
}
