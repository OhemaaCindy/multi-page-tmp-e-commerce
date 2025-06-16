import Header from "../components/header";
import ItemsSection from "../components/items-section";
import Speakersection from "../components/speaker-section";

const Home = () => {
  return (
    <div className="m-auto ">
      <Header />
      <ItemsSection />
      <Speakersection />
    </div>
  );
};

export default Home;
