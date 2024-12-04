import { AboutMe } from "@/app/(ui)/about/AboutMe";
import { Skills } from "@/app/(ui)/about/Skill";
import { Experience } from "@/app/(ui)/about/Experience";
import { Education } from "@/app/(ui)/about/Education";

export default function page() {
  return (
      <main className="mx-auto w-screen px-20 flex flex-col gap-96 row-start-2 md:max-w-[1240px]">
        <AboutMe />
        <Skills />
        <Experience />
        <Education />
      </main>
  );
}
