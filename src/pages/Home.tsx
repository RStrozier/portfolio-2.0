import TestImage from '../assets/Test-Image.png';
import { motion } from 'framer-motion';
import Projects from '../components/Projects';
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

const Home = () => {

  return (
    <div
      className="relative bg-cover bg-center h-screen overflow-y-scroll"
      style={{ backgroundImage: `url(${TestImage})` }}
    >
      <div className="h-screen">
        <div className="black-bubble mx-6 mt-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="text-2xl text-green-200 z-10 relative"
          >
            Welcome To My Digital Timeline Portfolio
          </motion.div>

          <div className="mt-1 text-white z-10 mx-4 relative">
            This allows you to learn about me through a custom interactive story. This code was 100% created and designed by myself, Rashida, a human being on a massive planet.
          </div>
          <div className="z-10 relative text-sm text-yellow-400 mt-1">
            Begin scrolling to view my perspectives. 
            </div>
            <div className="text-yellow-200 flex justify-center text-2xl mt-2">
            <MdOutlineKeyboardDoubleArrowDown />
            </div>
        </div>
      </div>

      {/* Project Section */}
        <Projects />
    </div>
  );
};

export default Home;