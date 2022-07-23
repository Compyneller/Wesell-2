import Contactus from "../components/ContactUs/Contactus";
import Header from "../components/Header/Header";
import Additional from "../components/SellCard/Additional";
import SellCard from "../components/SellCard/SellCard";
import StandOut from "../components/StandOut/StandOut";
import ThreeStep from "../components/ThreeStep/ThreeStep";

const Home = () => {
  return (
    <>
      <Header />
      <SellCard />

      <ThreeStep />
      <StandOut />
      <Contactus />
    </>
  );
};

export default Home;
