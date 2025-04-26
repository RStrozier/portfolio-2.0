import TestImage from '../assets/imgs/Test-Image.png';
import Welcome from '../components/Welcome';
import StoryContainer from '../containers/StoryContainer';

const Home = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen overflow-y-scroll overflow-x-hidden"
      style={{ backgroundImage: `url(${TestImage})` }}
    >
      <Welcome />
      <StoryContainer />
    </div>
  );
};

export default Home;