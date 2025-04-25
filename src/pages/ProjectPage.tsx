import { Link } from 'react-router-dom';
import Projects from '../components/Projects';

const ProjectPage = () => {
    return (
        <div>
            <Link to="/">
                <div className="sticky top-0 right-0 bg-gray-600 text-white font-bold py-2 z-10">
                    Click to go back to digital story
                </div>
            </Link>
            <Projects />
        </div>
    );
};

export default ProjectPage;