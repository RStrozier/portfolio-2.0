import { motion } from "framer-motion";
import data from "../data/projects.json";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Projects = () => {
  return (
    <>
      {data.projects.map((project, index) => {
        // Create a separate ref and visibility state for each project
        const { ref: projectRef, isVisible } = useIntersectionObserver();

        return (
          <div
            key={index}
            // Attach the ref to the current project
            ref={projectRef} 
            className="min-h-screen flex flex-col justify-center items-center text-center p-2"
          >
            {/** Animate each project individually */}
            <motion.div
            // Start off-screen with opacity 0
              initial={{ opacity: 0}} 
              // Animate when visible
              animate={isVisible ? { opacity: 1 } : {}} 
              transition={{ duration: 1 }}
              className="flex flex-col items-center white-bubble mx-4"
            >
              <div className="text-3xl font-bold mb-4 text-green-700">{project.name}</div>
              <div className="text-lg mb-4 mx-6 roboto-mono text-blue-800 text-sm">Created in {project.year}</div>
              <div className="text-lg mb-4 mx-6 roboto-mono">{project.description}</div>
             
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                View Project
              </a>
            </motion.div>
          </div>
        );
      })}
    </>
  );
};

export default Projects;