import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import email from "../assets/email.png";
import resume from "../assets/resume.png";

const Icon = ({
  data,
}: {
  data: {
    name: string;
    link: string;
  };
}) => {
  return (
    <a href={data.link} target="_blank" className="w-12 h-12 mx-5 icon">
      <img
        src={
          data.name === "github"
            ? github
            : data.name === "linkedin"
            ? linkedin
            : data.name === "email"
            ? email
            : resume
        }
        alt={data.name}
        width="48"
        height="48"
      />
    </a>
  );
};

export default Icon;
