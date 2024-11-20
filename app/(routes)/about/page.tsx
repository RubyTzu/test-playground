import { Navbar } from "@/app/(ui)/shareComponent/Navbar";
import { AboutMe } from "@/app/(ui)/about/AboutMe";
import { Skills } from "@/app/(ui)/about/Skill";
import { Experience } from "@/app/(ui)/about/Experience";
import { Footer } from "@/app/(ui)/shareComponent/Footer";


export default function page() {
  return (
    <div className="grid grid-rows-[8rem_1fr_6rem] min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="mx-auto max-w-[1240px] px-20 flex flex-col gap-96 row-start-2">
        <AboutMe />
        <Skills />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}
