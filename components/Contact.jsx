import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineMail,
  AiOutlineInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";
import { HiChevronDoubleUp } from "react-icons/hi";
import contact from "../public/contact.png";
// import { useForm } from "react-hook-form";

const Contact = () => {
  // const { register, handleSubmit, errors, reset } = useForm();
  // const onSubmitForm = (values) => {
  //   console.log(values);
  // };

  return (
    <div id="contact">
      <div className="max-w-[1240px] m-auto px-2 py-10 w-full">
        <h2 className="py-4 ">Lets Start Your Journey</h2>
        <p>
          Fill out the contact form below and I will reach out, or conncet on
          social media to learn more about me
        </p>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full p-4 hover:scale-105 ease-in duration-300 bg-[#c4c4c4]">
            <div className="lg:p-4 h-full rounded-xl flex flex-col justify-between">
              <div>
                <Image
                  className="w-[100%] border-2 "
                  src={contact}
                  alt="/"
                  width="800"
                  height="300"
                ></Image>
                <h2 className="py-2">Kelsey Kok</h2>
                <p>Real Estate Agent with ICON Realty Group</p>
                <p className="py-4">
                  Availible to help you sell the house you have or find your
                  dream home. Always making the process smooth and easy!
                </p>
              </div>
              <div>
                <p>Connect with Me</p>
                <div className="flex items-center justify-between py-4">
                  <a
                    href="https://www.facebook.com/kelsey.denhartigh"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="bg-black rounded-full p-5 text-3xl cursor-pointer hover:scale-110 ease-in duration-300 text-white">
                      <AiOutlineInstagram />
                    </div>
                  </a>

                  <a
                    href="https://www.instagram.com/kelskok/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="bg-black text-white rounded-full p-5 text-3xl cursor-pointer hover:scale-110 ease-in duration-300">
                      <AiOutlineFacebook />
                    </div>
                  </a>
                  <a href="mailto:kelsey.denhartigh@gmail.com">
                    <div className="bg-black text-white rounded-full p-5 text-3xl cursor-pointer hover:scale-110 ease-in duration-300">
                      <AiOutlineMail />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/*right*/}
          <div className="col-span-3 w-full h-auto lg:p-4 hover:scale-105 ease-in duration-150 bg-[#c4c4c4]">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      // ref={register({
                      //   required: {
                      //     vlaue: true,
                      //     message: "You must enter your name",
                      //   },
                      // })}
                      className=" rounded-lg p-3 flex "
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      // ref={register}
                      className=" rounded-lg p-3 flex "
                      type="text"
                    />
                  </div>
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    // ref={register({
                    //   required: {
                    //     vlaue: true,
                    //     message: "You must enter your email address",
                    //   },
                    // })}
                    className=" rounded-lg p-3 flex "
                    type="email"
                  />
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    // ref={register({
                    //   required: {
                    //     vlaue: true,
                    //     message: "You must enter a message",
                    //   },
                    // })}
                    className=" rounded-lg p-3 flex "
                    type="text"
                  />
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    // ref={register}
                    className="rounded-lg p-3 "
                    rows="10"
                  ></textarea>
                </div>
                <div className="w-full flex justify-center">
                  <button className="p-4 mt-4 uppercase tracking-widest hover:scale-110 ease-in duration-300 rounded-lg bg-black text-white">
                    Send Info
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-6">
          <Link href="/">
            <div className="p-2 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiChevronDoubleUp size={30} className="" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
