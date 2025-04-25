import TestImage from '../assets/Test-Image.png';
import Projects from '../components/Projects';
import Welcome from '../components/Welcome';

const Home = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen overflow-y-scroll overflow-x-hidden"
      style={{ backgroundImage: `url(${TestImage})` }}
    >
      <Welcome />
      <div className="flex justify-center">
        <div className="w-3/4">
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default Home;