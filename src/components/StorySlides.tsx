import { motion } from "framer-motion";
import data from "../data/story.json";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

interface StorySlides {
    text: string;
    image: string;
    order: number;
}

// Explicitly type the imported data
const stories: StorySlides[] = data.stories;

const StorySlides = () => {
    return (
        <>
            {stories.map((story, index) => {
                // Create a separate ref and visibility state for each project
                const { ref: projectRef, isVisible } = useIntersectionObserver();

                return (
                    <div
                        key={index}
                        // Attach the ref to the current project
                        ref={projectRef}
                        className="min-h-screen flex flex-col justify-center items-center text-center p-1 py-2 mx-2 md:mx-4"
                    >
                        {/** Animate each project individually */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            // Animate when visible
                            animate={isVisible ? { opacity: 1 } : {}}
                            transition={{ duration: 1 }}
                            className="flex flex-col items-center story-bubble-red"
                        >
                            <div className="sansation-bold text-lg mb-4 mx-2 roboto-mono text-base">
                                {story.text}
                            </div>

                            {story.image}

                        </motion.div>
                    </div>
                );
            })}
        </>
    );
};


export default StorySlides




