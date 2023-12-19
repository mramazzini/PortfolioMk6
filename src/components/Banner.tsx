import Icon from "./Icon";

const icons = [
  {
    name: "github",
    link: "https://github.com/mramazzini",
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/matteo-ramazzini/",
  },
  {
    name: "email",
    link: "mailto:mramazzini123@gmail.com",
  },
  {
    name: "resume",
    link: "https://drive.google.com/file/d/1D5h7P6TcH8y5f5W5HcQgj6g7y3rYh1d6/view?usp=sharing",
  },
];

const Banner = () => {
  return (
    <div
      className="banner text-white w-screen justify-center items-center flex flex-col border-y border-white h-1/3 py-4 relative overflow-hidden"
      style={{ zIndex: 2 }}
    >
      <div className="flex flex-row justify-center items-center">
        <Icon data={icons[0]} />
        <Icon data={icons[1]} />
        <div className="justify-center items-center flex flex-col">
          <h1 className="text-bold lg:text-5xl md:text-4xl sm:text-3xl my-1">
            Hi
          </h1>
          <div className="w-1/2 h-1 bg-white my-1"></div>
          <div className="lg:text-2xl md:text-xl sm:text-lg my-1">
            My name is Matteo Ramazzini
          </div>
          <div className="lg:text-3xl md:text-2xl sm:text-xl my-1 ">
            I am a developer
          </div>
          <div className="lg:text-5xl md:text-4xl sm:text-3xl my-1 font-bold">
            See what I've been up to!
          </div>
        </div>
        <Icon data={icons[2]} />
        <Icon data={icons[3]} />
      </div>
    </div>
  );
};

export default Banner;
