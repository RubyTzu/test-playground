"use client";
import { ProjectCards } from "@/app/(ui)/project/ProjectCards";

export default function Page() {
  
  return (
    <main className="mx-auto w-screen px-20 flex flex-col gap-96 row-start-2 md:max-w-[1240px] mb-64">
      <ProjectCards />
    </main>
  );
}
