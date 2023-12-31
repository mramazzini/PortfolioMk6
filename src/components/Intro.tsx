import { TypeAnimation } from "react-type-animation";

const Intro = () => {
  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);

    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="w-full h-screen items-center justify-center flex flex-col">
      <div className="w-3/4 h-1/6 flex flex-row justify-between ">
        <div className="corner-ribbon top-left " />
        <div className="corner-ribbon top-right " />
      </div>
      <div className="w-full h-1/6 flex flex-col justify-center items-center">
        <h1 className="text-3xl lg:text-6xl font-bold text-center ">
          Matteo Ramazzini
        </h1>
        <div className="h-1/6 text-xl lg:text-3xl font-bold text-center">
          {"a "}
          <TypeAnimation
            cursor={false}
            sequence={[
              "Software Developer",
              2000,
              "Student",
              2000,
              "Teacher",
              2000,
            ]}
            repeat={Infinity}
            className="text-xl lg:text-3xl font-bold text-center h-1/6 "
          />
        </div>
        <div className="h-1/6 text-lg lg:text-2xl m-2">
          I design and build software.
        </div>
        <button
          onClick={() => scrollToSection("tech")}
          className="callToAction"
        >
          See more.
        </button>
      </div>
      <div className="w-3/4 h-1/6 flex flex-row justify-between">
        <div className="corner-ribbon bottom-left " />
        <div className="corner-ribbon bottom-right " />
      </div>
    </div>
  );
};

export default Intro;
