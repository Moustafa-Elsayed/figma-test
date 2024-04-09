import React from "react";
import ProfileData from "./ProfileData";
import QrCode from "./QrCode";
import Product from "./Product";

const Profile = () => {
  return (
    <div className="pt-4 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* This div will take 1/3 of the screen on large screens and all of the screen on smaller screens */}
        <div className="md:col-span-1">
          <ProfileData />
          <QrCode />
        </div>
        {/* This div will take 2/3 of the screen on large screens and all of the screen on smaller screens */}
        <div className="md:col-span-2">
          <Product />
        </div>
      </div>
    </div>
  );
};

export default Profile;
