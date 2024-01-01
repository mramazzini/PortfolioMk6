const Contact = () => {
  return (
    <div className="w-full justify-start items-center">
      <div className="header flex flex-col justify-center items-center ">
        <h1 className="text-5xl font-bold text-center ">
          Contact
          <div className="h-divider" />
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-xl text-center py-5 lg:px-0 px-5">
          I'm currently looking for new opportunities, my inbox is always open
          at{" "}
          <a
            className="text-xl"
            style={{
              color: "#18f98f",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
            href="mailto:mramazzini123@gmail.com "
          >
            mramazzini123@gmail.com
          </a>
          .
          <br /> Whether you have a question or just want to say hi, I'll try my
          best to get back to you!
        </p>
      </div>
    </div>
  );
};

export default Contact;
