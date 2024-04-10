import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";

interface MenuOverlayProps {
  setNavBarOpen: (open: boolean) => void;
  navBarOpen: boolean;
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({
  setNavBarOpen,
  navBarOpen,
}) => {
  return (
    <div className={`absolute top-16 left-0 w-full bg-white border-b border-gray-200 border-t border-t-gray-200-50 transition-all duration-50000 ${navBarOpen ? 'menu-open' : 'menu-closed'}`}>
      <button
        onClick={() => setNavBarOpen(!navBarOpen)}
        className="absolute top-0 right-10 text-2xl "
      >
        X
      </button>
      <div className="flex flex-col justify-center items-center gap-3 mt-9">
        <ul className="flex flex-col space-y-2 px-4 py-2">
          <li>
            <Link href="/" className="text-[#D20653] font-bold text-sub_header">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="text-light_Text text-sub_header font-normal"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link href="/" className="text-light_Text text-sub_header">
              Gifts
            </Link>
          </li>
        </ul>
        <button className=" flex flex-row justify-evenly items-center bg-gradient-to-r from-[#D20653] to-[#FF951D] w-[172px] h-[40px] rounded-lg">
          <Image
            src={"https://svgshare.com/i/159k.svg"}
            alt="logo"
            className=" text-black dark:text-white"
            width={24}
            height={24}
          />
          <p className="text-white">Add new product</p>
        </button>
        <div className="flex-row justify-center items-center gap-2 flex">
          <Image
            src={"https://svgshare.com/i/15AQ.svg"}
            alt="logo"
            className=" text-black dark:text-white border-r border-gray-500 pr-1 "
            width={24}
            height={24}
          />
          <div className="font-bold text-sub_header">EN</div>
        </div>
      </div>
    </div>
  );
};

export default memo(MenuOverlay);
