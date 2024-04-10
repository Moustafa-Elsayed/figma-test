"use client";
import React, { memo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
const Header = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);

  return (
    <nav className="bg-white h-[68px] p-4 overflow-hidden ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mx-auto flex flex-row justify-between items-center">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex flex-row justify-center items-center gap-5">
              <div className="flex items-center justify-center gap-3">
                <button
                  className="md:hidden block"
                  onClick={() => {
                    setNavBarOpen(!navBarOpen);
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
                    className="md:w-[108px] "
                    alt="logo"
                    width={85}
                    height={34}
                  />
                </Link>
              </div>
            </div>
          </div>
          <NavLink />
        </div>
        {navBarOpen && (
          <MenuOverlay setNavBarOpen={setNavBarOpen} navBarOpen={navBarOpen} />
        )}
      </div>
    </nav>
  );
};

export default memo(Header);
