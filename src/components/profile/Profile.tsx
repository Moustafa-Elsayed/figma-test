import React from "react";
import ProfileData from "./ProfileData";
import QrCode from "./QrCode";
import Product from "../product/Product";

const Profile = () => {
  return (
    <div className="pt-4 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="md:col-span-1">
          <ProfileData />
          <QrCode />
        </div>
        <div className="md:col-span-2">
          <Product />
        </div>
      </div>
    </div>
  );
};

export default Profile;
