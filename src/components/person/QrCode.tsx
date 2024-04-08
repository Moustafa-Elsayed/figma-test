import Image from "next/image";
import Link from "next/link";
import React from "react";

function QrCode() {
  return (
    <div className="bg-white p-4 flex flex-col  gap-[16px] rounded-2xl w-[407px]">
      <div className="flex flex-row justify-between items-center">
        <div className="text-title font-bold">QR Code</div>
        <div className="flex flex-row gap-3">
          <Image
            src={"https://svgshare.com/i/15A4.svg"}
            alt="logo"
            className="text-black "
            width={24}
            height={24}
          />
          <Image
            src={"https://svgshare.com/i/15A4.svg"}
            alt="logo"
            className="text-black "
            width={24}
            height={24}
          />
          <Image
            src={"https://svgshare.com/i/15A4.svg"}
            alt="logo"
            className="text-black "
            width={24}
            height={24}
          />
        </div>
      </div>
      <div className="flex flex-row justify-between items-center w-[359px] h-[59px] bg-card_bg p-3 rounded-2xl">
        <Image
          src={"https://svgshare.com/i/15A4.svg"}
          alt="logo"
          className="text-black "
          width={24}
          height={24}
        />
        <p className="text-[12px]">
          Download the QR code or share it with your friends.
        </p>
      </div>
      <div className="w-[358px] h-[313px] bg-white border-[22px]  border-red-400 rounded-2xl ">
        <div className="bg-white rounded-2xl  flex flex-col justify-between items-center gap-2">
          <Link href={"/"}>
            <Image
              src={"https://svgshare.com/i/158f.svg"}
              alt="logo"
              className=" text-black drak:text-white"
              width={152}
              height={48}
            />
          </Link>
          <div>Hala Ahmed</div>
          <Image
            src={"https://svgshare.com/i/15Bo.svg"}
            alt="logo"
            className=" text-black drak:text-white"
            width={135}
            height={135}
          />
          <div>Follow Us on Mazaady</div>
        </div>
      </div>
    </div>
  );
}

export default QrCode;
