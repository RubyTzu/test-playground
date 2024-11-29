"use client";
import { Navbar } from "@/app/(ui)/shareComponent/Navbar";
import { Footer } from "@/app/(ui)/shareComponent/Footer";
import { ProjectCards } from "@/app/(ui)/project/ProjectCards";
import { BackToTopButton } from "@/app/(ui)/shareComponent/BackToTopBtn";

export default function Page() {

  return (
    <div className="grid grid-rows-[8rem_1fr_6rem] min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="mx-auto w-screen px-20 flex flex-col gap-96 row-start-2 md:max-w-[1240px]">
        <ProjectCards />
        <BackToTopButton />
      </main>
      <Footer />
    </div>
  );
}
