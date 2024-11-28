"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import { spring } from "motion";
import clsx from "clsx";
import { usePathname } from "next/navigation";

interface Route {
  title: string;
  href: string;
}

interface SocialMedia {
  title: string;
  href: string;
  icon: string;
}

const routes: Route[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Project",
    href: "/project",
  },
  {
    title: "Article",
    href: "/article",
  },
];

const socialMedia: SocialMedia[] = [
  {
    title: "GH",
    href: "https://github.com/",
    icon: "bg-red-100",
  },
  {
    title: "LI",
    href: "https://tw.linkedin.com",
    icon: "bg-red-200",
  },
  {
    title: "BH",
    href: "https://www.behance.net",
    icon: "bg-red-300",
  },
];

export const Navbar = () => {
  return (
    <header className="w-screen px-10 pt-12">
      <NavDesktop />
      <NavMobile />
    </header>
  );
};

const NavDesktop = () => {
    const pathname = usePathname();

  return (
    <div className="mx-auto max-w-[1200px] hidden justify-between items-center md:flex">
      <div className="w-fit flex gap-5 h-fit">
        {routes.map((site: Route) => (
          <Link className="relative" key={site.title} href={site.href}>
            <motion.div whileHover={{ borderBottom: "1.1" }} className="relative bottom-[-5px] w-full  border-black">
              {site.title}
              {site.href === pathname ? <motion.div className="absolute bottom-[-1px] left-0 right-0 h-[1px] bg-red-500 w-full" layoutId="underline" /> : null}
            </motion.div>
          </Link>
        ))}
      </div>
      <div className="w-fit flex items-center gap-5 h-fit">
        {socialMedia.map((icon: SocialMedia) => (
          <Link target="_blank" key={icon.title} href={icon.href}>
            <div className={`rounded-full flex justify-center items-center w-8 h-8 ${icon.icon}`}>
              <div className="font-semibold text-xs text-white">{icon.title}</div>
            </div>
          </Link>
        ))}
        <Link href="/" className="">
          <div className="bg-red-700 rounded-r-full w-3 h-3"></div>
          <div className="bg-red-700 rounded-tr-full w-5 h-4"></div>
        </Link>
      </div>
    </div>
  );
};

const NavMobile = () => {
  const pathname = usePathname();
  const [isOpen, setOpen] = useState(false);
   
  const variant = isOpen ? "opened" : "closed";
  const mobileMenuVariant = {
    closed: {
      translateX: "-100%",
      translateY: "0%",
      transition: {
        duration: 0.33,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
    opened: {
      translateX: "0%",
      translateY: "0%",
      transition: {
        duration: 0.33,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
  };
  const top = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: 45,
      translateY: 1.5,
    },
  };
  const center = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: -45,
      translateY: -1.5,
    },
  };

  const lineprops: any = {
    stroke: "#b91c1c",
    strokeWidth: 2,
    vectorEffect: "non-scaling-stroke",
    initial: "closed",
    animate: variant,
    transition: spring,
    lineprops: null,
  };

  const unitHeight = 4;
  const unitWidth = (unitHeight * 24) / 24;
  return (
    <div className="relative md:hidden">
      <Link href="/" className="absolute right-0">
        <div className="bg-red-700 rounded-r-full w-3 h-3"></div>
        <div className="bg-red-700 rounded-tr-full w-5 h-4"></div>
      </Link>
      <div className="absolute z-40 w-fit" onClick={() => setOpen(!isOpen)}>
        <motion.svg viewBox={`0 0 ${unitWidth} ${unitHeight}`} overflow="visible" preserveAspectRatio="none" width={24} height={24}>
          <motion.line strokeLinecap="round" x1="0" x2={unitWidth} y1="0" y2="0" variants={top} {...lineprops} />
          <motion.line strokeLinecap="round" x1="0" x2={unitWidth} y1="1.5" y2="1.5" variants={center} {...lineprops} />
          <motion.line strokeLinecap="round" x1="0" x2={unitWidth} y1="3" y2="3" variants={bottom} {...lineprops} />
        </motion.svg>
      </div>
      <motion.div initial={"closed"} variants={mobileMenuVariant} animate={variant} className="z-10 fixed left-0 top-0 w-[100vw] h-[100vh] flex flex-col justify-center gap-32 pt-20 items-center bg-gray-50/95">
        <div className="w-fit">
          {routes.map((site: Route) => (
            <div key={site.title}>
              <Link
                href={site.href}
                className={clsx(" block py-4 px-3 text-gray-900", {
                  "font-bold": site.href === pathname,
                  "font-medium": site.href !== pathname,
                })}
                onClick={() => setOpen(false)}>
                {site.title}
              </Link>
            </div>
          ))}
        </div>
        <div className="w-fit flex gap-5 h-fit">
          {socialMedia.map((icon: SocialMedia) => (
            <Link target="_blank" key={icon.title} href={icon.href}>
              <div className={`rounded-full flex justify-center items-center w-16 h-16 ${icon.icon}`}>
                <div className="font-semibold text-xs text-white">{icon.title}</div>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
};