import React from 'react';
import Image from 'next/image'; // assuming you're using Next.js for the Image component

const HeaderButton = ({ loading, title, onPress, width, size }) => {
  return (
    <button
      onClick={onPress} // assuming onPress is a function passed as a prop
      className="flex flex-row justify-evenly items-center bg-gradient-to-r from-red-600 to-yellow-400 rounded-lg"
      style={{ width: width, height: size }} // applying dynamic width and height
    >
      <Image
        src={"https://svgshare.com/i/159k.svg"}
        alt="logo"
        className="text-black dark:text-white"
        width={24}
        height={24}
      />
      <p className="text-white">{title}</p>
      {/* Assuming you want to display the title dynamically */}
    </button>
  );
};

export default HeaderButton;
