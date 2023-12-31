import Banner from "./Banner";
import Intro from "./Intro";
import Slider from "./Slider";
import Stats from "./Stats";

const FrontPage = () => {
  return (
    <div className=" w-full  ">
      <Banner />

      <Intro />
      <Stats />
    </div>
  );
};

export default FrontPage;
