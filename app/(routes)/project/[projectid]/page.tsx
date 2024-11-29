"use client";
import { Navbar } from "@/app/(ui)/shareComponent/Navbar";
import { Footer } from "@/app/(ui)/shareComponent/Footer";
import Link from "next/link";
import { useParams } from "next/navigation";
import { BackToTopButton } from "@/app/(ui)/shareComponent/BackToTopBtn";
import { motion } from "motion/react";

export default function Page() {
  const { projectid } = useParams<{ projectid: string }>();

  return (
    <div className="grid grid-rows-[8rem_1fr_6rem] min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="mx-auto w-screen px-20 flex flex-col gap-16 row-start-2 md:max-w-[1240px]">
        <motion.div className="" initial={{ translateX: -1, opacity: 0, scale: 0.99 }} animate={{ translateX: 0, opacity: 1, scale: 1 }} transition={{ duration: 0.3, ease: [0, 0.1, 0.7, 1.01] }}>
          <Link className="border-b-red-200 border-b-2 p-2 w-fit" href={"/project"}>
            back
          </Link>
        </motion.div>
        <div className="text-3xl font-semibold">Title {projectid}</div>
        <div>
          <div className="text-lg font-semibold">- brainstorming</div>
          <div>explaining what I am doing to people who know and try to make it look easy.</div>
        </div>
        <div>- making</div>
        <div>- outcome</div>
        <BackToTopButton />
      </main>
      <Footer />
    </div>
  );
}
