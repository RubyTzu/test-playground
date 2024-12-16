"use client"
import { motion } from "motion/react";

export const AboutMe =() => {
    return (
      <>
        <div className="pt-8 grid gap-20 grid-cols-1 md:pt-36 md:grid-cols-2">
          <motion.div className="flex order-last justify-center items-center md:order-1" initial={{ translateY: 10, opacity: 0, scale: 0.99 }} animate={{ translateY: 0, opacity: 1, scale: 1 }} transition={{ duration: 0.3, ease: [0, 0.1, 0.7, 1.01] }}>
            Try to introduce myself in this paragraph, but exactly what to say is a mystery. Typing is a kind of way to say something.
          </motion.div>
          <motion.div className="bg-red-200 h-64 md:order-last" initial={{ translateY: 10, opacity: 0, scale: 0.99 }} animate={{ translateY: 0, opacity: 1, scale: 1 }} transition={{ duration: 0.3, ease: [0, 0.1, 0.7, 1.01] }}></motion.div>
        </div>
      </>
    );
}