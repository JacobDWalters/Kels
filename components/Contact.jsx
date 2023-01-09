import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiChevronDoubleUp } from "react-icons/hi";
import contact from "../public/contact.png";
// import { useForm } from "react-hook-form";

const Contact = () => {
  // const { register, handleSubmit, errors, reset } = useForm();
  // const onSubmitForm = (values) => {
  //   console.log(values);
  // };

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase">Contact</p>
        <h2 className="py-4 ">Get In Touch</h2>
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
                    href="https://www.linkedin.com/in/jacob-d-walters/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="bg-black rounded-full p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-white">
                      <FaLinkedinIn />
                    </div>
                  </a>

                  <a
                    href="https://github.com/JacobDWalters"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="bg-black text-white rounded-full p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>
                  <a href="mailto:jacob.d.walters22@gmail.com">
                    <div className="bg-black text-white rounded-full p-6 cursor-pointer hover:scale-110 ease-in duration-300">
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
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiChevronDoubleUp size={30} className="" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
