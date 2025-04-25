import TestImage from '../assets/Test-Image.png';
import { motion } from 'framer-motion';
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { Link } from 'react-router-dom';
import Projects from '../components/Projects';

const Home = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen overflow-y-scroll overflow-x-hidden" 
      style={{ backgroundImage: `url(${TestImage})` }}
    >
      <div className="h-screen">
        <div className="black-bubble mt-6 mx-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="sansation-light text-2xl text-green-200 z-10 relative mt-1 py-2 mx-2 mb-1"
          >
            Welcome To Rashida's Digital Timeline Portfolio
          </motion.div>

          <Link to="/projects">
            <button className="open-sans border-2 border-blue-200 text-blue-300 font-semibold text-base mt-3 px-3 py-3 rounded hover:bg-blue-500 hover:text-white hover:cursor-pointer transition duration-300 hover:border-3 hover:border-white">
              Jump Straight to Projects
            </button>
          </Link>

          <div className="mt-4 text-white z-10 mx-4 relative text-base roboto-mono">
            This digital portfolio allows you to learn more through a custom interactive story. Enjoy your experience and thank you for creating space with me. 
          </div>

          <div className="z-10 relative text-sm text-yellow-400 mt-3">
            Begin scrolling to view my perspectives.
          </div>

          {/* Slow pulse motion */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.7, 0.9, 0.7],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="overflow-hidden" 
          >
            <div className="text-yellow-200 flex justify-center text-2xl mt-2">
              <MdOutlineKeyboardDoubleArrowDown />
            </div>
          </motion.div>
        </div>
      </div>
      <Projects />
    </div>
  );
};

export default Home;