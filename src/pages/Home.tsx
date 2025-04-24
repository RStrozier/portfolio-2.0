import TestImage from '../assets/Test-Image.png'

const Home = () => {
  return (
   <>
   <div className="text-2xl text-blue-400">Welcome to my Timeline</div>
   <div className="div">Today you will learn about me and see my projects</div>
   <div className="div">Installed : Framer motion </div>
     <div className="div">Installed: React scroll parallax</div>
     <div className="div">Installed: React Helmet</div>
     <div className="div">Installed: React Icons</div>
     <div className="div">Installed: Tailwind CSS</div>
     <img src={TestImage}>
     </img>
   </>
  )
}

export default Home