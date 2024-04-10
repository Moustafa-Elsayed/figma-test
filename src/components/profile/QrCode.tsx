"use client";
import Image from "next/image";
import Link from "next/link";
import React, { memo, useState } from "react";

function QrCode() {
  const [showQr, setShowQr] = useState(true);
  return (
    <div className="bg-white p-4 flex flex-col  gap-[16px] rounded-2xl w-auto">
      <div className="flex flex-row justify-between items-center">
        <div className="text-title font-bold">QR Code</div>
        <div className="flex flex-row items-center gap-4">
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
          <button
            className="rounded-full bg-[#FBE7EE] flex justify-center items-center w-5 h-5 md:hidden"
            onClick={() => setShowQr(!showQr)}
          >
            {showQr ? (
              <Image
                src={"https://svgshare.com/i/15BN.svg"}
                alt="logo"
                className=""
                width={10}
                height={4}
              />
            ) : (
              <Image
                src={"https://svgshare.com/i/15B1.svg"}
                alt="logo"
                className=""
                width={15}
                height={4}
              />
            )}
          </button>
        </div>
      </div>
      {showQr ? (
        <>
          <div className="self-center flex flex-row justify-center items-center gap-2 h-[59px] bg-card_bg p-2 rounded-2xl">
            <Image
              src={"https://svgshare.com/i/15Bp.svg"}
              alt="logo"
              className="text-black"
              width={24}
              height={24}
            />
            <p className="text-sub_title font-normal">
              Download the QR code or share it with your friends.
            </p>
          </div>
          <div className="self-center w-[300px] md:w-[350px] h-[313px] bg-gray-500 flex justify-center items-center bg-gradient-to-r from-[#D20653] to-[#FF951D] rounded-2xl ">
            <div className="p-2 flex flex-col justify-between w-[90%] md:w-[313px] md:h-[278px] items-center rounded-3xl bg-white">
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
                className="text-black dark:text-white"
                width={135}
                height={135}
              />
              <div className="font-normal text-main_title text-[#363333]">
                Follow Us on Mazaady
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default memo(QrCode);
