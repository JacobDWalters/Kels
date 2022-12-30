import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineClose,
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
// import { useRouter } from "next/router";
import logo from "../public/KK.png";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [linkColor, setLinkColor] = useState("white");

  // const router = useRouter();

  const handleNav = () => {
    setNav(!nav);
  };

  // useEffect(() => {
  //   if (
  //     router.asPath === "/Transitions" ||
  //     router.asPath === "/Nba" ||
  //     router.asPath === "/Amazon"
  //   ) {
  //     setNavBg("transparent");
  //     setLinkColor("#ecf0f3");
  //   } else {
  //     setNavBg("#ecf0f3");
  //     setLinkColor("#1f2937");
  //   }
  // }, [router]);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: "black" }}
      className={
        shadow
          ? "fixed w-full h-14 lg:h-20 shadow-xl z-[10]"
          : "fixed w-full h-14 lg:h-20 z-[10]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <div>
          <p className="hidden lg:flex text-2xl text-white tracking-widest italic pl-6 ">
            Helping You Find Home!
          </p>
        </div>

        <Link href="/">
          <Image
            src={logo}
            alt="kels_logo"
            width="150"
            height="150"
            className={
              nav
                ? "absolute top-0 left-0 flex z-[0] w-[100px] h-[100px]"
                : "absolute top-0 left-0 flex z-[10] w-[100px] h-[100px] lg:left-auto justify-center lg:w-[150px] lg:h-[150px]"
            }
          />
        </Link>

        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden lg:flex pr-6">
            <Link href="/#about">
              <li className="md:ml-5 lg:ml-10 text-sm uppercase hover:border-b">
                About Me
              </li>
            </Link>
            <Link href="/#buy">
              <li className="lg:ml-5 xl:ml-10 text-sm uppercase hover:border-b">
                Buy
              </li>
            </Link>
            <Link href="/#sell">
              <li className="lg:ml-5 xl:ml-10 text-sm uppercase hover:border-b">
                Sell
              </li>
            </Link>
            <Link href="/#reviews">
              <li className="lg:ml-5 xl:ml-10 text-sm uppercase hover:border-b">
                Reviews
              </li>
            </Link>
            <Link href="/#contact">
              <li className="lg:ml-5 xl:ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="lg:hidden">
            <AiOutlineMenu className="cursor-pointer text-white" size={25} />
          </div>

          <div
            className={
              nav
                ? "lg:hidden fixed left-0 top-0 w-full h-screen bg-black/40"
                : ""
            }
          >
            <div
              className={
                nav
                  ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-200"
                  : "fixed left-[-200%] p-10 ease-in duration-200"
              }
            >
              <div>
                <div className="flex w-full items-center justify-between">
                  <Link href="/">
                    <Image src={logo} width="85" height="85" alt="navLogo" />
                  </Link>
                  <div
                    onClick={handleNav}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                  >
                    <AiOutlineClose />
                  </div>
                </div>
                <div className="border-b border-gray-300 my-4">
                  <p className="w-[85%] md:w-[90%] py-4 tracking-widest text-stone-600 font-light text-lg">
                    Helping You Find Home!
                  </p>
                </div>
              </div>
              <div className="py-4 flex flex-col">
                <ul className="uppercase">
                  <Link href="/#main">
                    <li
                      onClick={() => setNav(false)}
                      className="py-4 text-sm hover:underline"
                    >
                      About Me
                    </li>
                  </Link>
                  <Link href="/#about">
                    <li
                      onClick={() => setNav(false)}
                      className="py-4 text-sm hover:underline"
                    >
                      Buy
                    </li>
                  </Link>
                  <Link href="/#skills">
                    <li
                      onClick={() => setNav(false)}
                      className="py-4 text-sm hover:underline"
                    >
                      Sell
                    </li>
                  </Link>
                  <Link href="/#projects">
                    <li
                      onClick={() => setNav(false)}
                      className="py-4 text-sm hover:underline"
                    >
                      Reviews
                    </li>
                  </Link>
                  <Link href="/#contact">
                    <li
                      onClick={() => setNav(false)}
                      className="py-4 text-sm hover:underline"
                    >
                      Contact
                    </li>
                  </Link>
                </ul>
                <div className="pt-40">
                  <p className="uppercase tracking-widest text-stone-600 font-light text-lg">
                    Let's Connect
                  </p>
                  <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                    <a href="/" target="_blank" rel="noreferrer">
                      <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                        <FaLinkedinIn className="text-black text-xl" />
                      </div>
                    </a>
                    <a href="/" target="_blank" rel="noreferrer">
                      <div
                        className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <AiOutlineInstagram className="text-black text-xl" />
                      </div>
                    </a>
                    <a href="/">
                      <div
                        className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <AiOutlineFacebook className="text-black text-xl" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
