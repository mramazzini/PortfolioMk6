import FeaturedProject from "./FeaturedProject";
import builder from "../assets/builder.png";
import edu from "../assets/edu.png";
import Icon from "./Icon";
import Godot from "../assets/Godot.png";
const TimeLinePage = () => {
  return (
    <div className="m-20 justify-center text-white items-center flex flex-col">
      <div className="projectsHeader ">
        <h1 className="text-5xl font-bold text-center ">
          Featured Projects
          <div className="h-divider" />
        </h1>
      </div>

      <div className="timeLineContainer flex flex-col justify-evenly items-center  w-3/4">
        <FeaturedProject
          image={builder}
          swap={false}
          alt="2d Game Engine editor"
        >
          <div className="header flex flex-col justify-center items-start w-full">
            <h1 className="text-3xl font-bold text-center ">
              Maxy's Game Engine
              <div className="h-divider" />
            </h1>
          </div>
          <p className="text-xl text-left py-5">
            Create, edit and play 2D games with this game engine editor. Built
            with C++, Electron, and React.
          </p>
          <a
            href="https://github.com/mramazzini/C-Game-engine"
            className="py-2 pr-2 source-code items-center bg-black/20 justify-start flex  rounded-xl hover:bg-black/30 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            <Icon data={{ name: "github", link: "" }} />
            <h1
              className="m-2 text-lg font-bold 
            "
            >
              Source Code
            </h1>
          </a>
        </FeaturedProject>
        <FeaturedProject
          swap={true}
          image={Godot}
          alt="Godot multiplayer lobby"
        >
          <div className="header flex flex-col justify-center items-start w-full">
            <h1 className="text-3xl font-bold text-center ">
              Godot Multiplayer Lobby
              <div className="h-divider" />
            </h1>
          </div>
          <p className="text-xl text-left py-5">
            Get your friends together and play on a dedicated server in the
            cloud with this multiplayer lobby system for Godot Engine. Built
            with GDScript, MongoDB, AWS, and Javascript
          </p>
          <a
            href="https://github.com/mramazzini/godotMultiplayer"
            className="py-2 pr-2 source-code items-center bg-black/20 justify-start flex  rounded-xl hover:bg-black/30 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            <Icon data={{ name: "github", link: "" }} />
            <h1
              className="m-2 text-lg font-bold 
            "
            >
              Source Code
            </h1>
          </a>
        </FeaturedProject>
        <FeaturedProject
          swap={false}
          image={edu}
          alt="Mern Stack Educational Site"
        >
          <div className="header flex flex-col justify-center items-start w-full">
            <h1 className="text-3xl font-bold text-center ">
              Mern Educational Site
              <div className="h-divider" />
            </h1>
          </div>
          <p className="text-xl text-left py-5">
            Learn web development with this online educational service. Built
            with React, Node, MongoDB and Apollo.
          </p>
          <a
            href="https://github.com/mramazzini/edu-site"
            className="py-2 pr-2 source-code items-center bg-black/20 justify-start flex  rounded-xl hover:bg-black/30 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            <Icon data={{ name: "github", link: "" }} />
            <h1
              className="m-2 text-lg font-bold 
            "
            >
              Source Code
            </h1>
          </a>
        </FeaturedProject>
      </div>
    </div>
  );
};

export default TimeLinePage;
