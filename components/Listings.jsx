import React from "react";
import Image from "next/image";
import houseOne from "../public/houseOne.png";
import house2 from "../public/house2.png";
import house3 from "../public/house3.png";
import house4 from "../public/house4.png";
import house5 from "../public/house5.png";

const Listings = () => {
  return (
    <div className="mt-6 bg-black">
      <h1 className="text-[#ebeaea] flex py-16 px-6 text-center justify-center">
        Looking For the Perfect Home?
      </h1>
      <h3 className="text-[#ebeaea] flex justify-center text-center px-6 text-xl">
        Check Out Some Featured Listings
      </h3>
      <div className="flex justify-center border-b-2 border-[#ebeaea] mx-12 pt-10"></div>
      <div className="grid sm:grid-cols-3 xl:grid-cols-4 px-4 gap-6 sm:gap-3 mt-10 mx-2">
        <div className=" relative flex items-center justify-center group">
          <Image
            src={houseOne}
            width="auto"
            height="auto"
            alt="house-pic"
            className="w-[100%] group-hover:opacity-25"
          />
          <div className="hidden w-full group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h5 className="flex justify-center text-white">Listed At</h5>
            <h2 className="flex justify-center text-white pb-2">$320,199</h2>
            <p className="flex justify-center text-white underline">
              Click To Check It Out!
            </p>
          </div>
        </div>
        <div className="relative flex items-center justify-center group">
          <Image
            src={house2}
            width="auto"
            height="auto"
            alt="house-pic"
            className="w-[100%] group-hover:opacity-25"
          />
          <div className="hidden w-full group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h5 className="flex justify-center text-white">Listed At</h5>
            <h2 className="flex justify-center text-white pb-2">$399,999</h2>
            <p className="flex justify-center text-white underline">
              Click To Check It Out!
            </p>
          </div>
        </div>
        <div className="relative flex items-center justify-center group">
          <Image
            src={house3}
            width="auto"
            height="auto"
            alt="house-pic"
            className="w-[100%] group-hover:opacity-25"
          />
          <div className="hidden w-full group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h5 className="flex justify-center text-white">Listed At</h5>
            <h2 className="flex justify-center text-white pb-2">$199,999</h2>
            <p className="flex justify-center text-white underline">
              Click To Check It Out!
            </p>
          </div>
        </div>
        <div className="relative flex items-center justify-center group">
          <Image
            src={house4}
            width="auto"
            height="auto"
            alt="house-pic"
            className="w-[100%] group-hover:opacity-25"
          />
          <div className="hidden w-full group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h5 className="flex justify-center text-white">Listed At</h5>
            <h2 className="flex justify-center text-white pb-2">$599,999</h2>
            <p className="flex justify-center text-white underline">
              Click To Check It Out!
            </p>
          </div>
        </div>
        <div className="relative flex items-center justify-center group">
          <Image
            src={house5}
            width="auto"
            height="auto"
            alt="house-pic"
            className="w-[100%] group-hover:opacity-25"
          />
          <div className="hidden w-full group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h5 className="flex justify-center text-white">Listed At</h5>
            <h2 className="flex justify-center text-white pb-2">$650,000</h2>
            <p className="flex justify-center text-white underline">
              Click To Check It Out!
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-[#ebeaea] flex justify-center py-6 text-xl">
        Contact Me To Explore More!
      </h3>
    </div>
  );
};

export default Listings;
