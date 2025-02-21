"use client"
import { motion } from "motion/react";

export const IntroImg = ({img}:{img: string}) => {
    return (
      <>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          exit={{ opacity: 0, scale: 0.5 }}
          layout
          className="w-48 h-48 overflow-hidden border rounded-full">
          <motion.img src={img} width={1920} height={1080} alt="test image" className="w-48 h-48 object-cover bg-blue-200"></motion.img>
        </motion.div>
      </>
    );
}