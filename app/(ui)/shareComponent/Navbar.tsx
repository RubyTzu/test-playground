"use client";
import Link from "next/link";
import { Fragment, useState } from "react";
import { motion } from "motion/react";
import { spring } from "motion";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { socialMediaIconMap } from "@/app/(ui)/shareComponent/SocialMediaIcons";
import { Route, SocialMedia } from "@/app/(data)/types";
import { useIntroContext } from "@/app/(data)/Provider";

interface DisplayProps {
  title: string;
  href: string;
  displayIcon: string;
  wSize: string;
  hSize: string;
}

export const Navbar = () => {
const { socialMedia = null, pageRoute: routes = null, email: email = null } = useIntroContext() || {};

  return (
    <>
      <header className="max-w-screen px-6 pt-6 md:px-10">
        <NavDesktop socialMedia={socialMedia} routes={routes} />
        <NavMobile socialMedia={socialMedia} routes={routes} email={email} />
      </header>
      <div className="py-9 fixed w-full bg-gradient-to-t from-white/15 from-2% via-white/90 via-30% to-white to-90% z-30 border-0 md:hidden"></div>
    </>
  );
};

const NavDesktop = ({ socialMedia, routes }: { socialMedia: SocialMedia[] | null; routes: Route[] | null }) => {
  const pathname = usePathname();

  return (
    <div className="mx-auto max-w-[1200px] hidden justify-between items-center md:flex 2xl:max-w-[1580px]">
      <div className="w-fit flex gap-5 h-fit">
        {routes?.map((site: Route) => (
          <Link className="relative" key={site.title} href={site.href}>
            <motion.div className="relative bottom-[-5px] w-full  border-black">
              {site.title}
              {site.href === pathname ? <motion.div className="absolute bottom-[-1px] left-0 right-0 h-[1px] bg-[#c44d4d] w-full" layoutId="underline" /> : null}
            </motion.div>
          </Link>
        ))}
      </div>
      <div className="w-fit flex items-center gap-5 h-fit">
        {socialMedia?.map((icon: SocialMedia) => (
          <Fragment key={icon.title}>
            <Display title={icon.title} href={icon.href} displayIcon={icon.displayIcon} wSize={"w-7"} hSize={"h-7"} />
          </Fragment>
        ))}

        <Link href="/" className="">
          <div className="bg-[#9c0606] rounded-r-full w-3 h-3"></div>
          <div className="bg-[#9c0606] rounded-tr-full w-5 h-4"></div>
        </Link>
      </div>
    </div>
  );
};

const NavMobile = ({ socialMedia, routes, email }: { socialMedia: SocialMedia[] | null; routes: Route[] | null; email: string | null; }) => {
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
      rotate: 0,
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
      rotate: 0,
      translateY: -1.5,
    },
  };

  const lineprops: any = {
    stroke: "#9c0606",
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
    <div className="relative block md:hidden">
      <Link href="/" className="fixed right-6 z-40">
        <div className="bg-[#9c0606] rounded-r-full w-3 h-3"></div>
        <div className="bg-[#9c0606] rounded-tr-full w-5 h-4"></div>
      </Link>
      <div className="fixed w-fit" onClick={() => setOpen(!isOpen)} style={{ zIndex: "52" }}>
        <motion.svg viewBox={`0 0 ${unitWidth} ${unitHeight}`} overflow="visible" preserveAspectRatio="none" width={24} height={24}>
          <motion.line strokeLinecap="round" x1="0" x2={unitWidth} y1="0" y2="0" variants={top} {...lineprops} />
          <motion.line strokeLinecap="round" x1="0" x2={unitWidth} y1="1.5" y2="1.5" variants={center} {...lineprops} />
          <motion.line strokeLinecap="round" x1="0" x2={unitWidth} y1="3" y2="3" variants={bottom} {...lineprops} />
        </motion.svg>
      </div>
      <motion.div initial={"closed"} variants={mobileMenuVariant} animate={variant} className="fixed left-0 top-0 w-[100vw] h-[100vh] flex flex-col justify-center gap-16 items-center bg-white/95" style={{ zIndex: "51" }}>
        <div className="flex flex-col gap-6 justify-center items-center">
          {routes?.map((site: Route) => (
            <div key={site.title}>
              <Link
                href={site.href}
                className={clsx("block w-fit", {
                  "font-medium border-b border-b-primary-500": site.href === pathname,
                  "font-medium": site.href !== pathname,
                })}
                onClick={() => setOpen(false)}>
                {site.title}
              </Link>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center items-center gap-10">
          <div className="w-fit flex gap-5 h-fit">
            {socialMedia?.map((icon: SocialMedia) => (
              <Fragment key={icon.title}>
                <Display title={icon.title} href={icon.href} displayIcon={icon.displayIcon} wSize={"w-12"} hSize={"h-12"} />
              </Fragment>
            ))}
          </div>
          <Link target="_blank" href={`mailto:${email}`} className=" text-neutrals-400">
            &#47;&#42; Say hello &#42;&#47;
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

function Display({ title, href, displayIcon, wSize, hSize }: DisplayProps) {
  const Icon = socialMediaIconMap[displayIcon as keyof typeof socialMediaIconMap];

  return (
    <Link target="_blank" key={title} href={href}>
      <div className={`rounded-full flex justify-center items-center ${wSize} ${hSize}`}>
        {Icon ? <Icon /> : null}
        </div>
    </Link>
  );
}
