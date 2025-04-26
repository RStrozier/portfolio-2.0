import { motion } from "framer-motion";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const ScaleFadeIn = ({ children }: { children: React.ReactNode }) => {
    const { ref, isVisible } = useIntersectionObserver();
  
    return (
      <div ref={ref} className="overflow-hidden w-full">
        <motion.div
          initial={{ scale: 0.75, opacity: 0 }} 
          animate={isVisible ? { scale: 1, opacity: 1 } : {}} 
          transition={{ duration: 1.375, ease: "easeOut" }}
          className="flex gap-4"
        >
          {children}
        </motion.div>
      </div>
    );
  };

  export default ScaleFadeIn