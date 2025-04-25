import { Link } from 'react-router-dom';
import Projects from '../components/Projects';
import { TbBrandBluesky } from "react-icons/tb";
import BackgroundImage from '../assets/background-2.png'

const ProjectPage = () => {
    return (
        <div
        className="relative bg-cover bg-center h-screen overflow-y-scroll overflow-x-hidden" 
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
            <Link to="/">
                <div className="sticky top-0 right-0 bg-gray-600 text-white font-bold py-2 z-10 flex items-center justify-center space-x-2">
                    <span>Click to go back to digital story</span>

                    <span className='text-yellow-300'><TbBrandBluesky /></span>
                </div>
            </Link>
            <Projects />
        </div>
    );
};

export default ProjectPage;