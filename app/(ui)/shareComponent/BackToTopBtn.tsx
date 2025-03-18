"use client";
import { useState, useEffect } from "react";
import { motion } from "motion/react";

export const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos === 0) {
        setShowButton(false);
      }
      if (currentScrollPos < prevScrollPos && currentScrollPos > 100) {
        setShowButton(true);
      } else if (currentScrollPos > prevScrollPos && currentScrollPos < document.documentElement.scrollHeight - window.innerHeight - 100) {
        setShowButton(false);
      }
      if (currentScrollPos + window.innerHeight >= document.documentElement.scrollHeight) {
        setShowButton(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    showButton && (
      <div className="z-50 fixed w-full flex justify-end">
        <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} onClick={scrollToTop} className="z-50 fixed bottom-10 right-8 w-10 h-10 flex justify-center items-center p-3 rounded-full bg-primary-100 shadow-md hover:bg-stone-100 transition-all md:bottom-24 md:right-20">
          ↑
        </motion.button>
      </div>
    )
  );
};
