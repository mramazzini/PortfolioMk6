import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import email from "../assets/email.png";
import resume from "../assets/resume.png";
import commit from "../assets/commit.png";
import repo from "../assets/repo.png";
import pull from "../assets/pull.png";
import code from "../assets/code.png";
import apollo from "../assets/apollo.png";
import aws from "../assets/aws.png";
import cpp from "../assets/c++.png";

import godot from "../assets/godot.png";
import javascript from "../assets/javascript.png";
import electron from "../assets/electron.png";
import mongo from "../assets/mongo.png";
import node from "../assets/node.png";
import react from "../assets/react.png";
import typescript from "../assets/typescript.png";

const Icon = ({
  data,
}: {
  data: {
    name: string;
    link: string;
  };
}) => {
  return (
    <a
      href={data.link}
      target="_blank"
      className="w-8 h-8 md:w-12 md:h-12 mx-5 icon-nav flex justify-center items-center"
    >
      <img
        src={
          data.name === "github"
            ? github
            : data.name === "linkedin"
            ? linkedin
            : data.name === "email"
            ? email
            : data.name === "resume"
            ? resume
            : data.name === "commit"
            ? commit
            : data.name === "repo"
            ? repo
            : data.name === "pull"
            ? pull
            : data.name === "code"
            ? code
            : data.name === "apollo"
            ? apollo
            : data.name === "aws"
            ? aws
            : data.name === "c++"
            ? cpp
            : data.name === "electron"
            ? electron
            : data.name === "godot"
            ? godot
            : data.name === "javascript"
            ? javascript
            : data.name === "mongodb"
            ? mongo
            : data.name === "node"
            ? node
            : data.name === "react"
            ? react
            : data.name === "typescript"
            ? typescript
            : ""
        }
        alt={data.name}
      />
    </a>
  );
};

export default Icon;
