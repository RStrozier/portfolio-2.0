import TestImage from '../assets/Test-Image.png'
import { motion } from 'framer-motion';
import ProjectContainer from '../components/ProjectContainer';

const Home = () => {
  return (
   <>
   <motion.div
   initial={{ opacity: 0 }}
   animate={{ opacity: 1 }}
   transition={{ duration: 1.5 }}
   className="text-2xl text-blue-400">
    Welcome to my Timeline
   </motion.div>

   <div className="div">Today you will learn about me and see my projects</div>
    <ProjectContainer />
     <img src={TestImage}>
     </img>
   </>
  )
}

export default Home