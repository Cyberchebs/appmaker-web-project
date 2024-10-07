import React from "react";

const Expabout = () => {
  return (
    <div className="flex flex-wrap items-center justify-center p-2 lg:mt-32 gap-[150px]">
      <div className="flex flex-col items-center ">
        <img
          className="size-[108px]"
          src="../../../public/medal 1.png"
          alt=""
        />
        <h6 className="font-bold ">
          3 <span className="text-[#FF3B30]">+</span>
        </h6>
        <h6 className="font-bold size-24px">Years of Exp</h6>
      </div>
      <div className="flex flex-col items-center">
        <img
          className="size-[108px]"
          src="../../../public/experts_icon 1 (1).png"
          alt=""
        />
        <h6 className="font-bold ">
          15<span className="text-[#FF3B30]">+</span>
        </h6>
        <h6 className="font-bold size-24px">Certified Experts</h6>
      </div>
      <div className="flex flex-col items-center">
        <img
          className="size-[108px]"
          src="../../../public/customerSatisfaction_icon 1.png"
          alt=""
        />
        <h6 className="font-bold ">
          350<span className="text-[#FF3B30]">+</span>
        </h6>
        <h6 className="font-bold size-24px">Happy Clients</h6>
      </div>
      <div className="flex flex-col items-center">
        <img
          className="size-[108px]"
          src="../../../public/satisfaction_icon 1.png"
          alt=""
        />
        <h6 className="font-bold ">
          100<span className="text-[#FF3B30]">%</span>
        </h6>
        <h6 className="font-bold size-24px">Satisfaction</h6>
      </div>
    </div>
  );
};

export default Expabout;
