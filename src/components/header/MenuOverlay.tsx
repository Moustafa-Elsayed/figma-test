import Link from "next/link";
import React from "react";

const MenuOverlay = () => {
  return (
    <div className="flex flex-col py-4 items-center transition-opacity duration-300 bg-black">
      <ul className="flex flex-col space-x-5 ">
        <li>
          <Link href="/" className="text-[#D20653] font-bold text-sub_header ">
            Home
          </Link>
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
          <Link href="/services" className="text-light_Text text-sub_header ">
            Gifts
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuOverlay;
