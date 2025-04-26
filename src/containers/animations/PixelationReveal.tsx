import React from "react";
import { motion } from "framer-motion";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const PixelationReveal = ({ children }: { children: React.ReactNode }) => {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <div ref={ref} className="overflow-hidden w-full">
      <motion.div
        initial={{ filter: "blur(10px)" }}
        animate={isVisible ? { filter: "blur(0px)" } : {}} 
        transition={{ duration: 2.35, ease: "easeOut" }} 
        className="flex gap-4"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default PixelationReveal;