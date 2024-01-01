import { useEffect, useState } from "react";
import code from "../assets/code.png";
import pull from "../assets/pull.png";
import commit from "../assets/commit.png";
import repo from "../assets/repo.png";
import Icon from "./Icon";
import TechStack from "./TechStack";
const data = {
  repositories: 47,
  linesOfCode: 77102,
  commits: 357,
  PR: 52,
  contributions: 738,
};

const Stats = () => {
  const [stats, setStats] = useState<{
    repositories: number;
    linesOfCode: number;
    commits: number;
    PR: number;
    contributions: number;
  }>({
    repositories: 0,
    linesOfCode: 0,
    commits: 0,
    PR: 0,
    contributions: 0,
  });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (
        stats.repositories >= data.repositories &&
        stats.linesOfCode >= data.linesOfCode &&
        stats.commits >= data.commits &&
        stats.PR >= data.PR &&
        stats.contributions >= data.contributions
      ) {
        clearInterval(interval);
        setLoaded(true);
        return;
      }
      if (loaded) {
        return;
      }
      setStats((prev) => {
        return {
          repositories: prev.repositories + data.repositories / 100,
          linesOfCode: prev.linesOfCode + data.linesOfCode / 100,
          commits: prev.commits + data.commits / 100,
          PR: prev.PR + data.PR / 100,
          contributions: prev.contributions + data.contributions / 100,
        };
      });
    }, 30);
    return () => clearInterval(interval);
  }, [stats, loaded]);

  return (
    <div
      id="tech"
      className="w-full px-5 lg:px-0 justify-center items-center flex-col flex  lg:mt-10"
    >
      <div className="stats-header m-5 lg:m-20">
        <h1 className="text-5xl font-bold text-center ">Stats</h1>
        <div className="h-divider" style={{ backgroundColor: "#18f98f" }}></div>
      </div>
      <div className="wrapper">
        <div className="container">
          <Icon data={{ name: "repo", link: "" }} />
          <i className="fas fa-utensils"></i>
          <span className="num" data-val="400">
            {stats.repositories.toFixed(0)}
          </span>
          <span className="text">Public Repositories</span>
        </div>
        <div className="container">
          <Icon data={{ name: "code", link: "" }} />
          <i className="fas fa-smile-beam"></i>
          <span className="num" data-val="340">
            {stats.linesOfCode.toFixed(0)}
          </span>
          <span className="text">Lines of Code</span>
        </div>
        <div className="container">
          <Icon data={{ name: "commit", link: "" }} />
          <i className="fas fa-list"></i>
          <span className="num" data-val="225">
            {stats.commits.toFixed(0)}
          </span>
          <span className="text">Commits</span>
        </div>
        <div className="container">
          <Icon data={{ name: "pull", link: "" }} />
          <i className="fas fa-star"></i>
          <span className="num" data-val="280">
            {stats.contributions.toFixed(0)}
          </span>
          <span className="text">Contributions</span>
        </div>
      </div>
      <div
        className="w-full lg:w-3/4  relative flex justify-start flex-col lg:flex-row  items-start mt-10 rounded-xl "
        style={{
          backgroundColor: "#21242b",
          borderBottom: "10px solid #18f98f",
        }}
      >
        <div className="flex-col lg:flex-row flex w-full">
          <div
            className="flex flex-col justify-center p-4 lg:p-8 items-start w-full lg:w-1/3 lg:justify-start"
            style={{
              display: document.getElementById("pie-chart") ? "flex" : "none",
            }}
          >
            <div className="header flex flex-row items-start w-full ">
              <h1 className="text-3xl font-bold w-full text-center ">
                Top Languages
              </h1>
            </div>
            <img
              id="pie-chart"
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=mramazzini&langs_count=7&title_color=ffffff&layout=pie&hide_title=true&text_color=ffffff&icon_color=0891b2&bg_color=21242b&hide_border=true&locale=en&custom_title=Top%20%Languages"
              alt="Top Languages"
              className="h-auto"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <div className="h-divider lg:hidden flex" />
          </div>
          <div
            className="lg:flex divider hidden"
            style={{
              backgroundColor: "#18f98f",
              width: "1px",
              height: "600px",
            }}
          ></div>

          <div
            className="flex flex-col justify-start p-4 lg:p-8 items-start w-full lg:w-1/3"
            style={{
              display: document.getElementById("pie-chart") ? "flex" : "none",
            }}
          >
            <div className="header flex flex-row items-start w-full pb-5">
              <h1 className="text-3xl font-bold w-full text-center ">
                Tech Stack
              </h1>
            </div>
            <TechStack />
            <div className="h-divider lg:hidden flex" />
          </div>
          <div
            className="lg:flex divider hidden"
            style={{
              backgroundColor: "#18f98f",
              width: "1px",
              height: "600px",
            }}
          ></div>

          <div
            className="flex flex-col justify-start p-8 items-start w-1/3"
            style={{
              display: document.getElementById("pie-chart") ? "flex" : "none",
            }}
          >
            <div className="header flex flex-row items-start w-full ">
              <h1 className="text-3xl font-bold w-full text-center mb-8">
                My work is...
              </h1>
            </div>
            <div className="hexes h-full w-full flex-col flex justify-start">
              <div className="h-1/3 w-full">
                <div className="row flex flex-row items-center justify-evenly w-full">
                  <div className="hexagon-container">
                    <div className="hexagon-background">
                      <div className="icon">
                        <div className={`hexagon `}>
                          <div className="icon-image" id="responsive" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <h1 className="text-4xl font-bold w-full text-center ">
                    Responsive
                  </h1>
                </div>
              </div>
              <div className="h-1/3 w-full">
                <div className="row flex flex-row items-center justify-evenly w-full">
                  <div className="hexagon-container">
                    <div className="hexagon-background">
                      <div className="icon">
                        <div className={`hexagon `}>
                          <div className="icon-image" id="speedometer" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <h1 className="text-4xl font-bold w-full text-center ">
                    Efficient
                  </h1>
                </div>
              </div>
              <div className="h-1/3 w-full">
                <div className="row flex flex-row items-center justify-evenly w-full">
                  <div className="hexagon-container">
                    <div className="hexagon-background">
                      <div className="icon">
                        <div className={`hexagon `}>
                          <div className="icon-image" id="bulb" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <h1 className="text-4xl font-bold w-full text-center ">
                    Intuitive
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
