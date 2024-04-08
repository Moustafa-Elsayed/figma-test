import React from "react";
import ProfileData from "./ProfileData";
import QrCode from "./QrCode";
import Product from "./Product";

const Profile = () => {
  return (
    <div className=" mx-auto flex flex-row justify-evenly py-4 flex-wrap">
      <div className="  p-4 rounded-lg flex flex-col gap-7 items-center justify-center">
        <ProfileData />
        <QrCode />
      </div>
      <div className="bg-white  p-4 rounded-lg w-[840px] ">
        <Product />
      </div>
    </div>
  );
};

export default Profile;
