import { productData } from "@/data/productData";
import Image from "next/image";
import React from "react";

const Product = () => {
  return (
    <>
      <div className=" bg-white p-4 rounded-2xl">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-[10px] ">
            <button className="border border-text_yellow rounded-2xl bg-card_bg  text-text_yellow w-[108px] h-[35px] font-bold text-main_title">
              Products
            </button>
            <button className="border border-[#E0E0E0] rounded-2xl   text-light_Text w-[108px] h-[35px] font-bold text-main_title">
              Articles
            </button>
            <button className="border border-[#E0E0E0] rounded-2xl   text-light_Text w-[108px] h-[35px] font-bold text-main_title">
              Reviews
            </button>
          </div>
          <button className="flex flex-row justify-evenly items-center bg-gradient-to-r from-red-600 to-yellow-400 w-[125px] h-[40px] rounded-lg">
            <Image
              src={"https://svgshare.com/i/159k.svg"}
              alt="logo"
              className=" text-black drak:text-white"
              width={24}
              height={24}
            />
            <p className="text-white">Add Review</p>
          </button>
        </div>
        <div className="flex flex-row  items-center gap-2">
          <p className="font-extrabold text-header">Products </p>
          <span className="text-main_title text-light_Text">( 12 )</span>
        </div>
        {productData.map((items) => (
          <div
            key={items.id}
            className="flex justify-start items-start gap-3 p-3"
          >
            <div className="relative ">
              <Image
                src={items.img}
                alt="logo"
                className="rounded-3xl "
                width={145}
                height={127}
              />
              <div className="text-white text-sub_title font-normal rounded-tr-none rounded-br-[100px] rounded-tl-[100px] rounded-bl-none flex justify-center items-center  absolute bottom-0 -right-0 bg-yellow-300 w-[114px] h-[37px]">
                {items.imgTitle}
              </div>
            </div>

            <div className="flex flex-col flex-1  gap-4">
              <div className="flex justify-between items-center">
                <div className="text-sub_header font-normal">{items.title}</div>
                <Image
                  src={items.heart}
                  alt="logo"
                  className="rounded-3xl "
                  width={20}
                  height={17}
                />
              </div>
              <div className="flex justify-start items-center gap-2">
                <div className="text-light_Text font-normal">
                  starting price
                </div>
                <div className=" text-sub_header font-bold">{items.price}</div>
              </div>
              <div className="flex justify-start items-center gap-2">
                <div className="text-light_Text font-normal">Lot starts in</div>
                <div className="flex flex-row  gap-10 justify-between items-center">
                  <button className="w-[105px] h-[40px] text-sub_header rounded-3xl font-bold bg-card_bg text-text_yellow flex flex-row justify-center items-center gap-1">
                    {items.daysNumber}
                    <span className=" text-text_yellow text-main_title">
                      {items.days}
                    </span>
                  </button>
                  <button className="w-[105px] h-[40px] text-sub_header rounded-3xl font-bold bg-card_bg text-text_yellow flex flex-row justify-center items-center gap-1">
                    {items.hoursNumber}
                    <span className=" text-text_yellow text-main_title">
                      {items.hours}
                    </span>
                  </button>
                  <button className="w-[105px] h-[40px] text-sub_header rounded-3xl font-bold bg-card_bg text-text_yellow flex flex-row justify-center items-center gap-1">
                    {items.minutesNumber}
                    <span className=" text-text_yellow text-main_title">
                      {items.minutes}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div>
          {/* <div className="flex justify-start items-center gap-2 p-3">
            <Image
              src={"https://svgshare.com/i/15Bq.svg"}
              alt="logo"
              className="rounded-3xl "
              width={145}
              height={127}
            />
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <div>tiltle</div>
                <div>heart</div>
              </div>
              <div className="flex justify-start items-center">
                <div>subtitle</div>
                <div>ni=umber</div>
              </div>
              <div className="flex justify-start items-center">
                <div>title</div>
                <div>3 btn</div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Product;
