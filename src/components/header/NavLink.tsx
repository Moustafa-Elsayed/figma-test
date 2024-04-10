import React, { memo } from "react";
import Link from "next/link";
import Image from "next/image";
const NavLink = () => {
  return (
    <div className="flex justify-between items-center ">
      <div className="flex flex-row justify-center items-center gap-3">
        <div className="flex items-center justify-between md:gap-[32px] gap-[16px]">
          <div className="md:border-r md:border-yellow-500 md:pr-[24px] ">
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
          <div className=" md:border-r md:border-yellow-500 md:pr-[24px]">
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
              className="md:w-[40px] h-[40px]"
              width={24}
              height={24}
            />
          </Link>
          <button className=" hidden md:flex flex-row justify-evenly items-center bg-gradient-to-r from-[#D20653] to-[#FF951D] w-[172px] h-[40px] rounded-lg">
            <Image
              src={"https://svgshare.com/i/159k.svg"}
              alt="logo"
              className=" text-black drak:text-white"
              width={24}
              height={24}
            />
            <p className="text-white">Add new product</p>
          </button>
          <div className=" flex-row justify-between items-center gap-2 hidden md:flex">
            <Image
              src={"https://svgshare.com/i/15AQ.svg"}
              alt="logo"
              className=" text-black drak:text-white border-r border-gray-500 pr-1 "
              width={24}
              height={24}
            />
            <div className="font-bold text-sub_header">EN</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(NavLink);
