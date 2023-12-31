import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import email from "../assets/email.png";
import resume from "../assets/resume.png";
import commit from "../assets/commit.png";
import repo from "../assets/repo.png";
import pull from "../assets/pull.png";
import code from "../assets/code.png";

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
      className="w-12 h-12 mx-5 icon-nav flex justify-center items-center"
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
            : code
        }
        alt={data.name}
        width="48"
        height="48"
      />
    </a>
  );
};

export default Icon;
