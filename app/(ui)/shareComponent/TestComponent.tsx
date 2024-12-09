"user client"
import { motion } from "motion/react";
import Image from "next/image";

export const TestComponent = () => {
    return (
      <div className="relative group">
        {/* Button */}
        <motion.button whileHover={{ scale: 1.1 }} className="px-4 py-2 bg-blue-600 text-white rounded-md focus:outline-none">
          Hover me
        </motion.button>
        {/* Image (hidden initially, appears on hover) */}
        <motion.div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-16 group-hover:translate-y-0 transition-all duration-300" initial={{ opacity: 0 }} whileHover={{ opacity: 1 }}>
          <Image src="/images/TEST_JPG.jpg" alt="Image on Hover" width={1920} height={1080} className="h-36 w-64 border" />
        </motion.div>
      </div>
    );
}