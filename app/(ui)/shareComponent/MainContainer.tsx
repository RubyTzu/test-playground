"use client";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

export const MainContainer = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <motion.main key={pathname} className="relative w-screen px-20 mx-auto flex flex-col row-start-2 justify-center items-center md:max-w-[1240px]" initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ease: "easeInOut", duration: 0.3 }}>
      {children}
    </motion.main>
  );
};
