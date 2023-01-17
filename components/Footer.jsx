import React from "react";
import Image from "next/image";
import map from "../public/map.png";
import icon from "../public/icon.png";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { SlLocationPin } from "react-icons/sl";

const Footer = () => {
  return (
    <div className="bg-black text-white mt-6 py-6">
      <div className="flex flex-col md:flex-row md:justify-between px-16">
        <div className="flex flex-col justify-center tracking-widest md:max-w-[40%] py-4 my-4 border-y-2 border-gray-400 md:border-y-0 text-xs xl:text-base">
          <div className="flex justify-center w-full md:justify-start">
            <BsTelephone className="text-lg" />
            <h3 className="mb-4 ml-4">(616) 293-1365</h3>
          </div>
          <div className="flex w-full justify-center md:justify-start">
            <AiOutlineMail className="text-lg " />
            <h3 className="mb-4 pl-4">kelsey.denhartigh@gmail.com</h3>
          </div>
          <div className="flex w-full justify-center md:justify-start">
            <SlLocationPin className="text-lg" />
            <div className="flex flex-col">
              <h3 className="pl-4">815 Bridge St NW #1,</h3>
              <h3 className="pl-4"> Grand Rapids, MI 49504</h3>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[20%] h-fit md:py-4 md:my-4">
          <a href="https://www.google.com/maps/place/The+Icon+Realty+Group/@42.9671561,-85.7175826,12.96z/data=!4m5!3m4!1s0x8819af87e3a6c653:0x6bb60e0116c7173c!8m2!3d42.9710077!4d-85.6884619">
            <Image
              className="w-[50%] md:w-[100%] m-auto"
              src={map}
              alt="/"
              width="full"
            ></Image>
          </a>
        </div>
        <div className="w-full md:w-[15%] h-fit py-4 my-4 border-y-2 md:border-y-0 border-gray-400">
          <a href="https://www.facebook.com/IRGTEAM/">
            <Image
              className="w-[40%] md:w-[100%] m-auto"
              src={icon}
              alt="/"
              width="full"
            ></Image>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
