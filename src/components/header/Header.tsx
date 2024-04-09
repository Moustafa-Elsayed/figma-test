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
      <nav className="bg-white h-[60px] p-4 overflow-hidden">
        <div className="max-w-7xl mx-auto  px-4 sm:px-6 ">
          <div className=" mx-auto flex flex-row justify-between items-center px-4">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <div className="flex flex-row justify-center items-center gap-5">
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
                <div className="hidden md:block">
                  <ul className="flex space-x-5">
                    <li className="relative">
                      <Link
                        href="/"
                        className="text-[#D20653] font-bold text-sub_header "
                      >
                        Home
                      </Link>
                      <div className="absolute border-b-8  border-[#D20653] w-full -bottom-3 rounded-3xl"></div>
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
              {/* Mobile Menu Button (Hamburger) */}
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
                    <div className="font-bold text-sub_header">EN</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  };

  export default Header;
