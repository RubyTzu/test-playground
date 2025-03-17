"use client";
import { useIntroContext } from "@/app/(data)/Provider";
import Link from "next/link";

export const Footer = () => {
  const email = useIntroContext().email || undefined;

  return (
    <footer className="z-10 max-w-screen row-start-3 flex gap-6 flex-wrap items-center justify-center bg-white">
      <Link target="_blank" href={`mailto:${email}`}>
        {email}
      </Link>
    </footer>
  );
};
