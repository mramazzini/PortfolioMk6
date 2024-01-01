import FeaturedProject from "./FeaturedProject";
import builder from "../assets/builder.png";
import edu from "../assets/edu.png";
import Icon from "./Icon";
import Godot from "../assets/Godot.png";
const TimeLinePage = () => {
  return (
    <div className="lg:m-20 justify-center text-white items-center flex flex-col">
      <div className="projectsHeader ">
        <h1 className="text-5xl p-5 font-bold text-center ">
          Featured Projects
          <div className="h-divider" />
        </h1>
      </div>

      <div className="timeLineContainer flex flex-col justify-evenly items-center p-5 w-full lg:w-3/4">
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
            Create, edit and play 2D games with this game engine and editor.
          </p>
          <div className="  flex flex-row justify-center items-start w-full mb-5">
            <Icon data={{ name: "c++", link: "" }} />
            <Icon data={{ name: "electron", link: "" }} />
            <Icon data={{ name: "react", link: "" }} />
            <Icon data={{ name: "typescript", link: "" }} />
          </div>
          <a
            href="https://github.com/mramazzini/C-Game-engine"
            className="py-2 pr-2 source-code items-end bg-black/20 justify-end flex h-full rounded-xl hover:bg-black/30 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            style={{
              boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
            }}
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
            cloud with this multiplayer lobby system for Godot Engine.
          </p>
          <div className="  flex flex-row justify-center items-start w-full mb-5">
            <Icon data={{ name: "godot", link: "" }} />
            <Icon data={{ name: "javascript", link: "" }} />
            <Icon data={{ name: "mongodb", link: "" }} />
            <Icon data={{ name: "aws", link: "" }} />
          </div>
          <a
            href="https://github.com/mramazzini/godotMultiplayer"
            style={{
              boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
            }}
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
            Learn web development with this online educational service.
          </p>
          <div className="  flex flex-row justify-center items-start w-full mb-5">
            <Icon data={{ name: "react", link: "" }} />
            <Icon data={{ name: "node", link: "" }} />
            <Icon data={{ name: "mongodb", link: "" }} />
            <Icon data={{ name: "apollo", link: "" }} />
          </div>
          <a
            href="https://github.com/mramazzini/edu-site"
            style={{
              boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
            }}
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
