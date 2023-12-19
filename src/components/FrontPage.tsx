import Banner from "./Banner";
import Slider from "./Slider";
const FrontPage = () => {
  return (
    <div className="bg-black w-full h-screen text-white">
      <Slider top={true} />
      <Banner />
      <Slider top={false} />
    </div>
  );
};

export default FrontPage;
