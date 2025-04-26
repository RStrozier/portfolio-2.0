import { motion } from "framer-motion";
import data from "../data/projects.json"; 
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { HiCursorClick } from "react-icons/hi";
import { Project } from "../data/types";

// Explicitly type the imported data
const projects: Project[] = data.projects;

const Projects = () => {
  return (
    <>
      {projects.map((project, index) => {
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
              className="flex flex-col items-center white-bubble"
            >
              <div className="open-sans text-3xl font-bold mb-3 text-green-700">{project.name}</div>
              <div className="text-lg mb-2 mx-2 roboto-mono text-blue-900 text-sm">
                Created in {project.year}
              </div>
              <div className="sansation-bold text-lg mb-4 mx-2 roboto-mono text-yellow-900 text-base">
                {project.language}
              </div>
              <div className="text-lg mb-4 p-1 roboto-mono">{project.description}</div>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-900 hover:underline text-xl p-1 flex items-center space-x-2"
              >
                <span>Click to Open Project</span>
                <HiCursorClick />
              </a>
            </motion.div>
          </div>
        );
      })}
    </>
  );
};

export default Projects;