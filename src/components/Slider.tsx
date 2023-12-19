import { useEffect, useState } from "react";
import wormGif from "../assets/worm.gif";
import worm from "../assets/worm.png";
import eduGif from "../assets/edu.gif";
import edu from "../assets/edu.png";
import builder from "../assets/builder.png";
import builderGif from "../assets/builder.gif";
import engine from "../assets/engine.png";
import engineGif from "../assets/engine.gif";
import mk5 from "../assets/mk5.png";
import mk5Gif from "../assets/mk5.gif";
const images = [
  {
    id: 1,
    src: worm,
    gifsrc: wormGif,
    link: "https://jade-shortbread-dc43ba.netlify.app/",
  },
  {
    id: 2,
    src: edu,
    gifsrc: eduGif,
    link: "https://github.com/mramazzini/edu-site",
  },
  {
    id: 3,
    src: builder,
    gifsrc: builderGif,
    link: "https://github.com/mramazzini/GameBuilder",
  },
  {
    id: 4,
    src: engine,
    gifsrc: engineGif,
    link: "https://github.com/mramazzini/C-Game-engine",
  },
  {
    id: 5,
    src: mk5,
    gifsrc: mk5Gif,
    link: "",
  },
  {
    id: 6,
    src: "https://picsum.photos/800/800?random=7",
    gifsrc: "https://picsum.photos/800/800?random=14",
    link: "",
  },
];

const Slider = ({ top }: { top: boolean }) => {
  const [position, setPosition] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<{
    amount: number;
    loaded: Boolean;
  }>({ amount: 0, loaded: false });

  const handleImageLoad = () => {
    setImagesLoaded((prev) => {
      if (prev.amount + 1 >= images.length * 2) {
        return {
          amount: prev.amount + 1,
          loaded: true,
        };
      }
      return {
        amount: prev.amount + 1,
        loaded: false,
      };
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((position) => {
        if (position >= 100) {
          return 0;
        }
        return position + 1;
      });
      console.log(imagesLoaded);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="flex flex-row h-1/3 w-screen relative"
      style={{
        top: `${imagesLoaded.loaded ? "0" : top ? "-40%" : "40%"}`,
        transition: "1s ease",
      }}
    >
      <div
        className="flex flex-row h-full w-screen shrink-0"
        style={{
          transform: `translateX(-${position}%)`,
          transition: "transform 1s ease",
        }}
      >
        {images.map((image, index) => {
          return (
            <a
              className="slider-image shrink-0"
              key={index}
              href={image.link}
              target="_blank"
            >
              <img
                onLoad={handleImageLoad}
                className="static-image"
                style={{
                  width: window.innerWidth > 800 ? "300px" : "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                src={image.src} // static image source
                alt=""
              />
              <img
                className="gif-image"
                onLoad={handleImageLoad}
                style={{
                  width: window.innerWidth > 800 ? "300px" : "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  position: "relative",
                  top: "-100%",
                  zIndex: -2,
                }}
                src={image.gifsrc} // gif image source
                alt=""
              />
            </a>
          );
        })}
        {images.map((image, index) => {
          return (
            <a
              className="slider-image shrink-0"
              key={index}
              href={image.link}
              target="_blank"
            >
              <img
                onLoad={handleImageLoad}
                className="static-image"
                style={{
                  width: window.innerWidth > 800 ? "300px" : "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                src={image.src} // static image source
                alt=""
              />
              <img
                onLoad={handleImageLoad}
                className="gif-image"
                style={{
                  width: window.innerWidth > 800 ? "300px" : "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  position: "relative",
                  top: "-100%",
                  zIndex: -2,
                }}
                src={image.gifsrc} // gif image source
                alt=""
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
