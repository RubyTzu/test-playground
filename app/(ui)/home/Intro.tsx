"use client"
import { motion } from "motion/react"

export const Intro = () => {
    return(<>
    <div className="pt-20 flex flex-col gap-8 items-center">
          <motion.div
            className="w-48 h-48 rounded-full bg-red-200"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          />
          <div className="flex flex-col gap-2">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                ease: [0, 0.71, 0.2, 1.01],
              }}>
              Ruby Chen
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                ease: [0, 0.71, 0.2, 1.01],
              }}>
              This is a place to let me practice web skill.
            </motion.div>
          </div>
        </div>
        <div className="h-[600px]"></div>
    </>)
}