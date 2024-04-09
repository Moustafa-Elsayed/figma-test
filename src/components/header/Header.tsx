"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./NavLink";
const Header = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);

  return (
    <nav className="bg-white h-[68px] p-4 overflow-hidden">
      <div className="max-w-7xl mx-auto  px-4 sm:px-6 ">
        <div className=" mx-auto flex flex-row justify-between items-center px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex flex-row justify-center items-center gap-5">
              <div className="flex items-center justify-center gap-3">
                <button
                  className="md:hidden block"
                  onClick={() => {
                    setNavBarOpen(true);
                  }}
                >
                  <Image
                    src={"https://svgshare.com/i/15Bz.svg"}
                    alt="logo"
                    width={24}
                    height={24}
                  />
                </button>
                <Link href={"/"}>
                  <Image
                    src={"https://svgshare.com/i/158f.svg"}
                    alt="logo"
                    width={108}
                    height={34}
                  />
                </Link>
              </div>
              <div className="hidden md:block">
                <ul className="flex space-x-5">
                  <li className="relative">
                    <Link
                      href="/"
                      className="text-[#D20653] font-bold text-sub_header "
                    >
                      Home
                    </Link>
                    <div className="absolute border-b-[10px]  border-[#D20653] w-full -bottom-5 rounded-3xl"></div>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-light_Text text-sub_header font-normal"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="text-light_Text text-sub_header "
                    >
                      Gifts
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mobile-menu block md:hidden relative">
            {!navBarOpen ? (
              <div className="flex flex-row justify-center items-center gap-3">
                <button
                  onClick={() => {
                    setNavBarOpen(true);
                  }}
                  className="text-slate-500 p-3 border dark:border-white border-black rounded-md flex items-center justify-center transition-all duration-300"
                ></button>
              </div>
            ) : (
              <div className="flex flex-row justify-center items-center gap-3">
                <button
                  onClick={() => {
                    setNavBarOpen(false);
                  }}
                  className="text-slate-500 p-3 border dark:border-white border-black rounded-md flex items-center justify-center transition-all duration-300"
                ></button>
              </div>
            )}
          </div>
          <NavLink />
        </div>
      </div>
    </nav>
  );
};

export default Header;
