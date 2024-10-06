import React from "react";

const Aboutus = () => {
  return (
    <div className="p-[65px]">
      <h1 className="purple-dark text-center mb-[50px] mt-[50px] ">About Us</h1>
      <div className="relative ml-[250px]">
        <img
          src="../../../public/aboutUs-team.png"
          alt=""
          className="rounded-md w-[1025px] h-[535px]"
        />
        <div className="absolute bottom-[-80px] left-[-250px] w-[519px] h-[320px] bg-white z-10 rounded-md p-[36px] space-y-3">
          <h6>At App Maker</h6>
          <p className="text-[16px]">
            we are passionate about delivering innovative software solutions
            that drive business success. With a dedicated team of experts in web
            development, mobile applications, and cloud technology, we bring a
            wealth of experience and creativity to every project. We believe in
            collaboration, integrity, and pushing the boundaries of technology
            to deliver outstanding results for our clients.
          </p>
          <button className="btn-purple-light w-[136px] h-[44px]  hover:bg-purple-500 hover:border-purple-500 rounded transition-colors duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
