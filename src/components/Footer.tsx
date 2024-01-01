import pixelHeart from "../assets/pixelHeart.png";
const Footer = () => {
  return (
    <div
      className="w-full my-5 justify-center items-start flex"
      style={{
        height: "15vh",
      }}
    >
      <div className="w-3/4 items-center justify-center">
        <div className="h-divider" />
        <p className="text-xl text-left py-5">
          Made with Love{" "}
          <img
            src={pixelHeart}
            width={16}
            height={16}
            style={{ display: "inline-block", verticalAlign: "middle" }}
          />
          <br /> 2024 - By Matteo Ramazzini
        </p>
      </div>
    </div>
  );
};

export default Footer;
