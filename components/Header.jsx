import React from "react";
import Image from "next/image";
import logo from "../public/KK.png";

const Header = () => {
  return (
    <div className="w-full h-40 flex">
      <div className="w-full h-20 shadow-xl bg-black flex flex-row justify-between items-center">
        <div>
          <p className="italic text-white tracking-widest pl-6 text-2xl">
            "Helping You Find Home!"
          </p>
        </div>
        <div className="absolute inset-x-1/2 top-0 z-1 w-[150px]">
          <Image src={logo} alt="kels_logo" width="150" height="150" />
        </div>
        <div className="w-[30%]">
          <ul className="flex flex-row text-white w-full justify-between items-center pr-6">
            <li className="w-auto h-full">About</li>
            <li className="w-auto h-full">Buy</li>
            <li className="w-auto h-full">Sell</li>
            <li className="w-auto h-full">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
