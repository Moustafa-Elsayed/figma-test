import Image from "next/image";
import React, { memo } from "react";
import ProductButton from "./ProductButton";
import ProductCard from "./ProductCard";

const Product = () => {
  return (
    <>
      <div className=" bg-white p-4 rounded-2xl relative">
        <div className="flex flex-row md:justify-between justify-center items-center">
          <div className="flex flex-row gap-[10px]">
            <ProductButton
              borderColor="text_yellow"
              textColor="text_yellow"
              text="Products"
              backgroundColor="card_bg "
            />
            <ProductButton
              borderColor="[E0E0E0]"
              textColor="light_Text"
              text="Articles"
              backgroundColor=""
            />
            <ProductButton
              borderColor="[E0E0E0]"
              textColor="light_Text"
              text="Reviews"
              backgroundColor=""
            />
          </div>
          <button className="md:absolute fixed right-5 md:right-5 top-1/3 md:top-3 flex flex-row justify-evenly items-center bg-gradient-to-r from-[#D20653] to-[#FF951D]  w-[125px] h-[40px] rounded-lg">
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
        <div className="flex flex-row  items-center gap-2 mt-4 mb-4">
          <p className="font-extrabold text-header">Products </p>
          <span className="text-main_title text-light_Text">( 12 )</span>
        </div>
        <ProductCard />
      </div>
    </>
  );
};

export default memo(Product) ;
