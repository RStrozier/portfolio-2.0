import { motion } from "framer-motion";
import React from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const StaggeredSlideIn = ({ children }: { children: React.ReactNode }) => {
    const { ref, isVisible } = useIntersectionObserver();
  
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2, // Delay each child by 0.2s
        },
      },
    };
  
    const childVariants = {
      hidden: { x: -50, opacity: 0 },
      visible: { x: 0, opacity: 1 },
    };
  
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
        className="overflow-hidden w-full flex gap-4"
      >
        {React.Children.map(children, (child) => (
          <motion.div variants={childVariants}>{child}</motion.div>
        ))}
      </motion.div>
    );
  };

  export default StaggeredSlideIn 