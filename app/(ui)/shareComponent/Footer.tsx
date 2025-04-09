"use client";
import { useIntroContext } from "@/app/(data)/Provider";
import Link from "next/link";

export const Footer = () => {
  const email = useIntroContext().email || undefined;
  const year = new Date().getFullYear();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="z-20 max-w-screen h-fit md:px-6 md:pt-16">
      <FooterDesktop email={email} year={year} scrollToTop={scrollToTop} />
      <FooterMobile year={year} scrollToTop={scrollToTop} />
    </footer>
  );
};

const FooterDesktop = ({ email, year, scrollToTop }: { email: string | undefined; year: number; scrollToTop: () => void }) => {
  return (
    <div className="hidden items-center justify-between mx-auto max-w-[1200px] text-zinc-600 md:flex 2xl:max-w-[1580px]">
      <div>{year} ©</div>
      <div>
        Build by&nbsp;
        <Link href="/" className="underline" onClick={scrollToTop}>
          Ruby Yi Tzu Chen
        </Link>
      </div>
      <Link target="_blank" href={`mailto:${email}`}>
        Say hello
      </Link>
    </div>
  );
};

const FooterMobile = ({ year, scrollToTop }: { year: number; scrollToTop: () => void }) => {
  return (
    <div className="flex flex-col items-center justify-between mt-10 mb-5 mx-auto max-w-[1200px] md:hidden">
      <div className="text-center">
        Build by
        <br />
        <Link href="/" className="underline" onClick={scrollToTop}>
          Ruby Yi Tzu Chen
        </Link>
      </div>
      <div className="mt-2">
        <span>{year} ©</span>
      </div>
    </div>
  );
};
