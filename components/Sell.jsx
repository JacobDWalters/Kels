import React from "react";
import Image from "next/image";
import sale from "../public/sale.png";

const Sell = () => {
  return (
    <div className="relative h-[300px] md:h-[500px] lg:h-[800px] w-full">
      <Image
        src={sale}
        width="auto"
        height="auto"
        alt="house-pic"
        className="w-[110%] filter grayscale opacity-40 absolute top-[-5%] z-[-1]"
      />
      <div className="flex flex-col text-center w-full h-full justify-between">
        <h1 className="text-center bg-transparent m-auto mt-5">
          Need to Sell Your Home?
        </h1>
        <p className="bg-transparent text-center m-auto lg:text-xl">
          I can help you navigate all the blah blah of homebuying, kels needs to
          give a blurb for this section about selling
        </p>
        <h2 className="bg-transparent text-center m-auto ">
          Fill out the form below and we can get started!
        </h2>
      </div>
    </div>
  );
};

export default Sell;
