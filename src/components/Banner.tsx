import Icon from "./Icon";
import { useState, useEffect } from "react";
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
    link: "https://drive.google.com/file/d/1GzolUu6uWojxxMBLk54rBFocY9vMNerr/view?usp=sharing",
  },
];

const Banner = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  const [scroll, setScroll] = useState(0);

  return (
    <div
      id='banner'
      className={`text-white w-full justify-center items-center flex flex-col fixed py-4 overflow-hidden fixed top-0  z-10`}
      style={{
        height: (1 / 12) * window.innerHeight,
        zIndex: 2,
        transition: "all 0.5s ease",
        backgroundColor: scroll < 100 ? "transparent" : "black",
      }}
    >
      <div className={`flex flex-row  w-full  items-center justify-center`}>
        <Icon data={icons[0]} />
        <Icon data={icons[1]} />

        <Icon data={icons[2]} />
        <Icon data={icons[3]} />
      </div>
    </div>
  );
};

export default Banner;
