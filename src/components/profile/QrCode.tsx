import Image from "next/image";
import Link from "next/link";
import React from "react";

function QrCode() {
  return (
    <div className="bg-white p-4 flex flex-col  gap-[16px] rounded-2xl w-auto">
      <div className="flex flex-row justify-between items-center">
        <div className="text-title font-bold">QR Code</div>
        <div className="flex flex-row gap-4">
          <Image
            src={"https://svgshare.com/i/15AT.svg"}
            alt="logo"
            className="text-black "
            width={24}
            height={24}
          />
          <Image
            src={"https://svgshare.com/i/15Bd.svg"}
            alt="logo"
            className="text-black "
            width={24}
            height={24}
          />
          <Image
            src={"https://svgshare.com/i/158q.svg"}
            alt="logo"
            className="text-black "
            width={24}
            height={24}
          />
        </div>
      </div>
      <div className="flex flex-row justify-center items-center gap-2 w-[359px] h-[59px] bg-card_bg p-2 rounded-2xl">
        <Image
          src={"https://svgshare.com/i/15Bp.svg"}
          alt="logo"
          className="text-black "
          width={24}
          height={24}
        />
        <p className="text-sub_title font-normal">
          Download the QR code or share it with your friends.
        </p>
      </div>
      <div className="w-[358px] h-[313px] bg-gray-500 flex justify-center items-center bg-gradient-to-r from-[#D20653] to-[#FF951D] rounded-2xl ">
        <div className="p-2 flex flex-col justify-between w-[313px] h-[278px] items-center rounded-3xl bg-white ">
          <Link href={"/"}>
            <Image
              src={"https://svgshare.com/i/158f.svg"}
              alt="logo"
              className=""
              width={152}
              height={48}
            />
          </Link>
          <div className="text-[24px] font-bold">Hala Ahmed</div>
          <Image
            src={"https://svgshare.com/i/15Bo.svg"}
            alt="logo"
            className=" text-black drak:text-white"
            width={135}
            height={135}
          />
          <div className="font-normal text-main_title text-[#363333]">
            Follow Us on Mazaady
          </div>
        </div>
      </div>
    </div>
  );
}

export default QrCode;
