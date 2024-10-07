import React from "react";

const PortfolioSection = () => {
  return (
    <div className="p-2 text-center purple-dark">
      <h1 className="purple-dark text-center mb-[50px]">Portfolio</h1>
      <div className="flex flex-col gap-[70px] p-5">
        <div className=" w-[350px]  lg:w-[883.86px]  h-full bg-white p-[18px] flex flex-col lg:flex-row gap-2">
          <img
            src="../../../public/portfolioSection_MockImage.png"
            alt=""
            className="w-[546px] h-[280.51px] object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
          />
          <div className="p-[36.69] w-[301px] space-y-6">
            <h6>Web Dev Project</h6>
            <p className="text-customGray">Description of the project.</p>
            <p className="text-customGray">Status of the project.</p>
          </div>
        </div>
        <div className=" w-[350px]  lg:w-[883.86px] lg:ml-[400px]  h-full bg-white p-[18px] flex flex-col lg:flex-row gap-2">
          <img
            src="../../../public/portfolioSection_MockImage.png"
            alt=""
            className="w-[546px] h-[280.51px] object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
          />
          <div className="p-[36.69] w-[301px] space-y-6">
            <h6>Web Dev Project</h6>
            <p className="text-customGray">Description of the project.</p>
            <p className="text-customGray">Status of the project.</p>
          </div>
        </div>
        <div className=" w-[350px]  lg:w-[883.86px]  h-full bg-white p-[18px] flex flex-col lg:flex-row gap-2">
          <img
            src="../../../public/portfolioSection_MockImage.png"
            alt=""
            className="w-[546px] h-[280.51px] object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
          />
          <div className="p-[36.69] w-[301px] space-y-6">
            <h6>Web Dev Project</h6>
            <p className="text-customGray">Description of the project.</p>
            <p className="text-customGray">Status of the project.</p>
          </div>
        </div>
      </div>
      <button className="btn-purple-dark w-[300px] lg:w-[450px] h-[68px] mt-[82px]  hover:bg-purple-500 hover:border-purple-500 rounded transition-colors duration-300">
        View All Projects
      </button>
    </div>
  );
};

export default PortfolioSection;
