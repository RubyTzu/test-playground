import { AboutMe } from "@/app/(ui)/about/AboutMe";
import { Skills } from "@/app/(ui)/about/Skill";
import { Experience } from "@/app/(ui)/about/Experience";
import { Education } from "@/app/(ui)/about/Education";
import { about } from "@/app/(data)/dummyData";

export default function page() {
  return (
    <div className="w-full flex flex-col gap-36 md:gap-96">
      <AboutMe aboutMe={about.aboutMe} />
      <Skills skills={about.skills} />
      <Experience experiences={about.experiences} />
      <Education educations={about.educations} />
    </div>
  );
}
