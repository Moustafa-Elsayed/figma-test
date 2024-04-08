import React from "react";
import Link from "next/link";
import ProfileData from "./ProfileData";
import QrCode from "./QrCode";

const Person = () => {
  return (
    <div className="max-w-screen-2xl mx-auto grid lgl:grid-cols-6 gap-2 py-4">
      <div className=" col-span-6 lgl:col-span-1 p-4 rounded-lg flex flex-col gap-7 items-center justify-center">
        <ProfileData />
        <QrCode />
      </div>
      {/* <div className="bg-white col-span-6 lgl:col-span-4 p-4 rounded-lg">
        <div className="flex items-center justify-between border-b-[1px] border-b-gray-400 pb-1">
          <p className="text-2xl font-semibold text-amazon_blue">
            Shopping Cart
          </p>
          <p className="text-lg font-semibold text-amazon_blue">Subtitle</p>
        </div>
        <div className="pt-2 flex flex-col gap-2">
          <Link href={"/"}>
            <button className="w-44 h-10 font-semibold bg-gray-200 rounded-lg hover:bg-red-600 hover:text-white duration-300">
              Continue shopping
            </button>
          </Link>
        </div>
      </div> */}
    </div>
  );
};

export default Person;
