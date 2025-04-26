import { motion } from "framer-motion";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const RotateReveal = ({ children }: { children: React.ReactNode }) => {
    const { ref, isVisible } = useIntersectionObserver();
  
    return (
      <div ref={ref} className="overflow-hidden w-full">
        <motion.div
          initial={{ rotate: 90, opacity: 0 }} 
          animate={isVisible ? { rotate: 0, opacity: 1 } : {}} 
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex gap-4"
        >
          {children}
        </motion.div>
      </div>
    );
  };

  export default RotateReveal