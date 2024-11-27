"use client"
import { Navbar } from "@/app/(ui)/shareComponent/Navbar";
import { Footer } from "@/app/(ui)/shareComponent/Footer";

export default function Page() {
  return (
    <div className="grid grid-rows-[8rem_1fr_6rem] min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="flex flex-col gap-4 row-start-2 justify-center items-center">
        project
      </main>
      <Footer />
    </div>
  );
}