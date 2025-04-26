import TestImage from '../assets/imgs/Test-Image.png';
import TechStackIcons from '../components/TechStackIcons';
import Welcome from '../components/Welcome';
import ScaleFadeIn from '../containers/animations/ScaleFadeIn';
import StoryContainer from '../containers/StoryContainer';

const Home = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen overflow-y-scroll overflow-x-hidden"
      style={{ backgroundImage: `url(${TestImage})` }}
    >
      <ScaleFadeIn>
        <Welcome />
      </ScaleFadeIn>

        <TechStackIcons />
  
      <StoryContainer />
    </div>
  );
};

export default Home;