import React from "react";
import Image from "next/image";
import buying from "../public/buying.jpeg";
import sale from "../public/sale.png";
import invest from "../public/invest.jpeg";

const Main = () => {
  return (
    <div className="py-5 bg-black text-white text-center pb-20">
      <h2 className="border-b-2 border-gray-400 w-[60%] m-auto pb-4 mb-4">
        What Can I Help You Accomplish?
      </h2>
      <p className="w-[50%] m-auto">
        I can help you navigate all the ins and outs of homebuying, keeping the
        process simple and fun for you. Whatever your goal, I am here to help
        you reach it!
      </p>

      <div className="flex justify-around mx-10 my-4">
        <div className="w-[30%] h-[450px] static">
          <div className="z-2 bottom-[-8%] bg-white text-black w-[80%] text-center relative flex justify-center left-[10%]">
            <h3 className="tracking-widest uppercase text-3xl py-4">Buying</h3>
          </div>
          <Image src={buying} alt="/" className="h-full  static z-0" />
        </div>
        <div className="w-[30%] h-[450px] static">
          <div className="z-2 bottom-[-8%] bg-white text-black w-[80%] text-center relative flex justify-center left-[10%]">
            <h3 className="tracking-widest uppercase text-3xl py-4">Selling</h3>
          </div>
          <Image src={sale} alt="/" className="h-full  static z-0" />
        </div>
        <div className="w-[30%] h-[450px] static">
          <div className="z-2 bottom-[-8%] bg-white text-black w-[80%] text-center relative flex justify-center left-[10%]">
            <h3 className="tracking-widest uppercase text-3xl py-4">
              Investing
            </h3>
          </div>
          <Image src={invest} alt="/" className="h-full  static z-0" />
        </div>
      </div>
    </div>
  );
};

export default Main;
