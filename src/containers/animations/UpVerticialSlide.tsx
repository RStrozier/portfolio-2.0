import { motion } from "framer-motion";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const UpVerticalSlide = ({ children }: { children: React.ReactNode }) => {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className="overflow-hidden w-full"
    >
      <motion.div
    //   fades opacity of any background images
        initial={{ y: 100, opacity: 0 }}
        animate={isVisible ? { y: 0, opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-white rounded shadow-md"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default UpVerticalSlide;