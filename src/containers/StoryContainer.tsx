import { motion } from "framer-motion";
import storyData from "../data/story.json";
import projectData from "../data/projects.json";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { HiCursorClick } from "react-icons/hi";
import StorySlides from "../components/StorySlides";
import { Project } from "../data/types";

// for typescript , set the types from the json data to the story data info and project info
const stories: StorySlides[] = storyData.stories;
const projects: Project[] = projectData.projects;

const StoryContainer = () => {
  // Create refs and visibility states for each element
  const storyRefs = stories.map(() => useIntersectionObserver());
  const projectRefs = projects.map(() => useIntersectionObserver());

  // Helper function to render a specific story
  const renderStory = (index: number) => {
    const { ref, isVisible } = storyRefs[index];

    return (
      <div
        key={`story-${index}`}
        ref={ref}
        className="min-h-screen flex flex-col justify-center items-center text-center p-1 py-2 mx-2 md:mx-4"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="flex flex-col items-center story-bubble-red w-3/4"
        >
          <div className="sansation-bold text-lg mb-4 mx-2 roboto-mono text-base">
            {stories[index].text}
          </div>
          {stories[index].image}
        </motion.div>
      </div>
    );
  };

  // Helper function to render a specific project
  const renderProject = (index: number) => {
    const { ref, isVisible } = projectRefs[index];

    return (
      <>
       <div
        key={`project-${index}`}
        ref={ref}
        className="min-h-screen flex flex-col justify-center items-center text-center p-1 py-2 mx-2 md:mx-4"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="flex flex-col items-center white-bubble w-3/4 i"
        >
          <div className="open-sans text-3xl font-bold mb-3 text-green-700">
            {projects[index].name}
          </div>
          <div className="text-lg mb-2 mx-2 roboto-mono text-blue-900 text-sm">
            Created in {projects[index].year}
          </div>
          <div className="sansation-bold text-lg mb-4 mx-2 roboto-mono text-yellow-900 text-base">
            {projects[index].language}
          </div>
          <div className="text-lg mb-4 p-1 roboto-mono">
            {projects[index].description}
          </div>
          <a
            href={projects[index].url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-900 hover:underline text-xl p-1 flex items-center space-x-2"
          >
            <span>Click to Open Project</span>
            <HiCursorClick />
          </a>
        </motion.div>
      </div>
      </>
    );
  };

  return (
    <div>
      {/* Render specific stories and projects */}
      {renderStory(0)}
      {renderProject(0)}
      {renderProject(1)}
      {renderStory(1)}
      {renderProject(2)}
    </div>
  );
};

export default StoryContainer;