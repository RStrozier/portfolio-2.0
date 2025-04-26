import React from "react";
import { motion } from "framer-motion";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const RightHorizontalSlide = ({ children }: { children: React.ReactNode }) => {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className="overflow-hidden w-full" 
    >
      <motion.div
      // Start off-screen to the right
        initial={{ x: "100%" }} 
        animate={isVisible ? { x: 0 } : {}} 
        transition={{ duration: 1, ease: "easeOut" }} 
        className="flex gap-4"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default RightHorizontalSlide;