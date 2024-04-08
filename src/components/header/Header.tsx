import React from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  {
    title: "Home",
    path: "#Home",
  },
  {
    title: "Blog",
    path: "#Blog",
  },
  {
    title: "Gifts",
    path: "#Gifts",
  },
];

const Header = () => {
  return (
    <nav className="bg-white w-full h-[68px] p-4">
      <div className=" mx-auto flex flex-row justify-between items-center">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex flex-row justify-center items-center gap-3">
            <div className="flex items-center">
              <Link href={"/"}>
                <Image
                  src={"https://svgshare.com/i/158f.svg"}
                  alt="logo"
                  className="md:w-20 w-9 text-black drak:text-white"
                  width={108}
                  height={34}
                />
              </Link>
            </div>
            {/* <ul className="flex flex-row gap-5 items-center">
              {navLinks.map((item, index) => {
                return (
                  <li key={index}>
                    <Link
                      href={item.path}
                      className={`block py-2 pl-3 pr-4 dark:text-black text-black sm:text-xl rounded md:p-0 hover:text-blue-400 dark:hover:text-yellow-400 font-semibold`}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul> */}
            <div className="hidden md:block">
              <ul className="flex space-x-4">
                <li className="border-b border-2 border-red-400 h-full" >
                  <Link href="/" className="text-[#D20653]  ">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-black "
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-black "
                  >
                    Gifts
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="md:hidden">
            <button className="text-white focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center ">
          <div className="flex flex-row justify-center items-center gap-3">
            <div className="flex items-center justify-between gap-[32px]">
              <div className="border-r border-yellow-500 pr-[24px] ">
                <Link href={"/"}>
                  <Image
                    src={"https://svgshare.com/i/159j.svg"}
                    alt="logo"
                    className=" text-black drak:text-white"
                    width={24}
                    height={24}
                  />
                </Link>
              </div>
              <div className="border-r border-yellow-500 pr-[24px] ">
                <Link href={"/"}>
                  <Image
                    src={"https://svgshare.com/i/15B5.svg"}
                    alt="logo"
                    className=" text-black drak:text-white"
                    width={24}
                    height={24}
                  />
                </Link>
              </div>

              <Link href={"/"}>
                <Image
                  src={"https://svgshare.com/i/15BS.svg"}
                  alt="logo"
                  className=" text-black drak:text-white"
                  width={24}
                  height={24}
                />
              </Link>

              <button className="flex flex-row justify-evenly items-center bg-gradient-to-r from-red-600 to-yellow-400 w-[172px] h-[40px] rounded-lg">
                <Image
                  src={"https://svgshare.com/i/159k.svg"}
                  alt="logo"
                  className=" text-black drak:text-white"
                  width={24}
                  height={24}
                />
                <p className="text-white">Add new product</p>
              </button>
              <div className="flex flex-row justify-between items-center gap-2">
                <Image
                  src={"https://svgshare.com/i/15AQ.svg"}
                  alt="logo"
                  className=" text-black drak:text-white border-r border-gray-500 pr-1 "
                  width={24}
                  height={24}
                />
                <div className="">EN</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
