import React from "react";
import Image from "next/image";
import sale from "../public/sale.png";

const Sell = () => {
  return (
    <div className="h-fit flex flex-col justify-between">
      <div className="z-[-1] absolute w-full">
        <Image
          src={sale}
          width="auto"
          height="auto"
          alt="house-pic"
          className="w-[100%] filter grayscale "
        />
      </div>
      <div className="flex flex-col justify-center text-center w-full">
        <h1 className="text-center py-8 bg-[#ebeaea]">
          Need to Sell Your Home?
        </h1>
        <p className="bg-[#ebeaea] w-fit">
          I can help you navigate all the blah blah of homebuying, kels needs to
          give a blurb for this section about selling
        </p>
        <h2 className="bg-[#ebeaea] w-fit">
          Fill out the form below and we can get started!
        </h2>
      </div>
    </div>
  );
};

export default Sell;
