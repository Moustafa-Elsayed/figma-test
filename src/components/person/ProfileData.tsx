import Image from "next/image";
import React from "react";

const ProfileData = () => {
  return (
    <div className="bg-white p-4">
      <Image
        src={"https://svgshare.com/i/15AC.svg"}
        alt="logo"
        className=" text-black drak:text-white"
        width={100}
        height={100}
      />
      <div>Hala Ahmed</div>
      <div>
        I am Hala Ahmed, I am the owner of the local brand called Beauty which
        is for Mackeup and Skin Care.
      </div>

      <div className="flex flex-row justify-between items-center gap-4 ">
        <div className="bg-card_bg p-3 rounded-[18px] flex flex-row  justify-center items-center gap-2">
          <Image
            src={"https://svgshare.com/i/15Ak.svg"}
            alt="logo"
            className="text-black "
            width={24}
            height={24}
          />
          <div className="flex flex-col justify-center items-start">
            <span>5</span>
            <div>Following</div>
          </div>
        </div>
        <div className="bg-card_bg p-3 rounded-[18px] flex flex-row  justify-center items-center gap-2">
          <Image
            src={"https://svgshare.com/i/15Ak.svg"}
            alt="logo"
            className="text-black "
            width={24}
            height={24}
          />
          <div className="flex flex-col justify-center items-center">
            <span>5</span>
            <div>Following</div>
          </div>
        </div>
        <div className="bg-card_bg p-3 rounded-[18px] flex flex-row  justify-center items-center gap-2">
          <Image
            src={"https://svgshare.com/i/15Ak.svg"}
            alt="logo"
            className="text-black "
            width={24}
            height={24}
          />
          <div className="flex flex-col justify-center items-center">
            <span>5</span>
            <div>Following</div>
          </div>
        </div>
      </div>
      <button className="bg-gradient-to-r from-red-600 to-yellow-400 w-full p-2 rounded-md text-white">follow</button>
    </div>
  );
};

export default ProfileData;
