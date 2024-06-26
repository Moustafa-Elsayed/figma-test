import React, { memo } from 'react'
interface ButtonProps {
    borderColor: string;
    textColor: string;
    text: string;
    backgroundColor:string
  }
  const ProductButton: React.FC<ButtonProps> = ({ borderColor, textColor, text,backgroundColor }) => {
    return (
      <button
        className={`border border-${borderColor} rounded-2xl bg-${backgroundColor} text-${textColor} min-w-[97px]  max-w-[108px] h-[35px] font-bold text-main_title`}
      >
        {text}
      </button>
    );
  };

export default memo(ProductButton) 