import data from "../data/projects.json";

const ProjectContainer = () => {
  return (
    <div>
      {data.projects.map((project, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-bold">{project.name}</h3>
          <div className="div">{project.description}</div>
          <a
            href={project.url}
            //opens a new browser window for the project
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            View Project
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProjectContainer;