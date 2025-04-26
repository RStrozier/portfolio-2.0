import { motion } from 'framer-motion'
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const DownVerticialSlide = ({ children }: { children: React.ReactNode }) => {
    const { ref, isVisible } = useIntersectionObserver();

    return (
        <div
            ref={ref}
            className="overflow-hidden w-full"
        >
            <motion.div
                initial={{ y: -100 }}
                // is it visible? than animate, otherwise, reset the position
                animate={isVisible ? { y: 0 } : {}} 
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-white rounded shadow-md"
            >
                {children}
            </motion.div>
        </div>
    )
}

export default DownVerticialSlide