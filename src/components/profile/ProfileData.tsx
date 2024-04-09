import Image from "next/image";
import React from "react";

interface CardItem {
  id: string;
  img: string;
  alt: string;
  number: string;
  data: string;
  rate: string;
  
 
}

const cardData: CardItem[] = [
  {
    id: "1",
    img: "https://svgshare.com/i/15Ak.svg",
    alt: "logo",
    number: "5",
    data: "Following",
    rate: "",
    
    
  },
  {
    id: "2",
    img: "https://svgshare.com/i/15A4.svg",
    alt: "logo",
    number: "20",
    data: "Followers",
    rate: "",

  },
  {
    id: "3",
    img: "https://svgshare.com/i/15Ab.svg",
    alt: "logo",
    number: "4.2",
    data: "Rate",
    rate: "(15)",

  },
];

const ProfileData = () => {
  return (
    <div className="bg-white  p-4 flex flex-col items-start gap-[16px] rounded-2xl w-auto mb-5">
      <Image
        src={"https://svgshare.com/i/15AC.svg"}
        alt="logo"
        className=" text-black drak:text-white"
        width={100}
        height={100}
      />
      <div className="text-title font-bold">Hala Ahmed</div>
      <div className="font-normal text-sub_title text-main_title">
        I am Hala Ahmed, I am the owner of the local brand called Beauty which
        is for Mackeup and Skin Care.
      </div>

      <div className="flex flex-row justify-between items-center gap-4 ">
        {cardData.map((items) => (
          <div
            key={items.id}
            className="bg-card_bg w-[108px] p-3 rounded-[18px] flex flex-row  justify-center items-center gap-2"
          >
            <Image src={items.img} alt="logo" width={24} height={24} />
            <div className="flex flex-col justify-center items-start">
              <div>
                <span className="text-black font-bold text-main_title">
                  {items.number}
                </span>
                <span className="text-[10px] ml-2 ">{items.rate}</span>
              </div>
              <div className="text-text_yellow font-normal text-sub_title">
                {items.data}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="bg-gradient-to-r from-[#D20653] to-[#FF951D] w-full p-2 rounded-xl text-white font-bold">
        Follow
      </button>
    </div>
  );
};

export default ProfileData;
