import { motion } from "motion/react";

const loadingContainer = {
  width: "2rem",
  height: "2rem",
  display: "flex",
  justifyContent: "space-around",
};

const loadingCircle = {
  display: "block",
  width: "0.5rem",
  height: "0.5rem",
  backgroundColor: "white",
  borderRadius: "0.25rem",
};

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: "50%",
  },
  end: {
    y: "80%",
  },
};

export const DotLoading = () => {
  return (
    <div className="z-0 absolute top-0 left-0 bg-black text-white flex justify-center items-center w-full h-full ">
      <motion.div style={loadingContainer} variants={loadingContainerVariants} initial="start" animate="end">
        <motion.span
          style={loadingCircle}
          variants={loadingCircleVariants}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        <motion.span
          style={loadingCircle}
          variants={loadingCircleVariants}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        <motion.span
          style={loadingCircle}
          variants={loadingCircleVariants}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
  );
};
