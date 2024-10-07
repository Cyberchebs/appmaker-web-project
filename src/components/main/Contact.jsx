import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm("service_26zwrrp", "template_3scinlf", form.current, {
        publicKey: "qcshP_cpUV1HEAClP",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        error => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="flex flex-col justify-evenly lg:flex-row">
      <div className="space-y-[45px] p-12">
        <h6 className="size-[36px] w-[238px] font-bold purple-dark relative inline-block">
          Contact US
          <span className="absolute bottom-0 left-0 w-[20%] h-[5px] bg-purple-900"></span>
        </h6>
        {/* box */}
        <div className="flex flex-row  gap-3 items-center">
          <div className="w-[33px] h-[33px] bg-[#C77DFF] rounded-full flex items-center justify-center">
            <img
              src="/public/Mail.png"
              alt=""
              className="w-[24.91px] h-[24px] object-contain"
            />
          </div>
          <p className="font-bold purple-dark">appmaker8790@eamil.com</p>
        </div>
        <div className="flex flex-row  gap-3 items-center">
          <div className="w-[33px] h-[33px] bg-[#C77DFF] rounded-full flex items-center justify-center">
            <img
              src="/public/Phone.png"
              alt=""
              className="w-[24.91px] h-[24px] object-contain"
            />
          </div>
          <p className="font-bold purple-dark">(+91) 760791243</p>
        </div>
        <div className="flex flex-row gap-3 items-center">
          <div className="w-[33px] h-[33px] bg-[#C77DFF] rounded-full flex items-center justify-center">
            <img
              src="/public/location_on@3x.png"
              alt=""
              className="w-[24.91px] h-[24px] object-contain"
            />
          </div>
          <p className="font-bold purple-dark ">Uttar Pradesh, India</p>
        </div>
      </div>
      <div className="p-3">
        <div>
          <form
            className="flex flex-col  bg-white px-[32px] py-[20px] space-y-[10px] rounded-md lg:w-[450px]  w-[300px]"
            ref={form}
            onSubmit={sendEmail}
          >
            <label className=" size[20px] font-semibold purple-dark">
              Name
            </label>
            <input
              className="lg:w-[392px] h-[36px] rounded-md border-[1px] border-[#8A92A6]"
              type="text"
              name="user_name"
              required
            />
            <label className=" size[20px] font-semibold purple-dark">
              Email
            </label>
            <input
              className="lg:w-[392px] h-[36px] rounded-md border-[1px] border-[#8A92A6]"
              type="email"
              name="user_email"
              required
            />
            <label className="size[20px] font-semibold purple-dark">
              Message
            </label>
            <textarea
              className="lg:w-[392px] h-[199px] rounded-md border-[1px] border-[#8A92A6]"
              name="message"
              required
            />
            <button
              className="w-[164px] h-[44px] btn-purple-dark  hover:bg-purple-500 hover:border-purple-500"
              type="submit"
              value="send"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
