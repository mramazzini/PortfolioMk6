const FeaturedProject = (props: any) => {
  return props.swap || window.innerWidth <= 1024 ? (
    <div
      className="project w-full flex flex-col  lg:flex-row justify-center items-center m-5 "
      style={{
        backgroundColor: "#21242b",
        borderRadius: "10px",
      }}
    >
      <div className="textContainer w-full lg:w-1/3 h-full flex flex-col p-5 justify-start items-center">
        {props.children}
      </div>
      <div className="imgContainer w-full lg:w-2/3 flex flex-col justify-center items-center grow">
        <img
          className="p-5 h-auto w-full object-cover"
          style={{
            borderRadius: "30px",
          }}
          src={props.image}
          alt={props.alt}
        />
      </div>
    </div>
  ) : (
    <div
      className="project w-full  flex flex-col lg:flex-row justify-center items-center m-5  grow"
      style={{
        backgroundColor: "#21242b",
        borderRadius: "10px",
      }}
    >
      <div className="imgContainer w-full lg:w-2/3 flex flex-col justify-center items-center">
        <img
          className="p-5 h-auto w-full object-cover"
          style={{
            borderRadius: "30px",
          }}
          src={props.image}
          alt={props.alt}
        />
      </div>
      <div className="textContainer w-full lg:w-1/3 h-full flex flex-col p-5 justify-start items-center grow">
        {props.children}
      </div>
    </div>
  );
};

export default FeaturedProject;
