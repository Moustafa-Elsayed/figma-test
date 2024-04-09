import Image from 'next/image'
import React, { memo } from 'react'
import { productData } from './productData'

const ProductCard = () => {
  return (
    <div>
      {productData.map((items) => (
        <div
          key={items?.id}
          className="flex justify-start items-start gap-3 p-3"
        >
          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src={items?.img}
              alt="logo"
              className="w-[87px] md:w-[145px] h-[72px] md:h-[127px]"
              width={145}
              height={127}
            />
            {items?.imgTitle === "Live" ? (
              <div className="absolute md:bottom-0 bottom-0 md:-right-0 -right-0 bg-[#D20653] w-[66px] h-[20px] md:w-[114px] md:h-[37px] text-white md:text-sub_title text-[8px] font-normal rounded-tr-none rounded-br-[75px] rounded-tl-[100px] rounded-bl-none flex justify-center items-center">
                Live auction
              </div>
            ) : (
              <div className="absolute md:bottom-0 bottom-0 md:-right-0 -right-0 bg-[#FF951D] w-[66px] h-[20px] md:w-[114px] md:h-[37px] text-white text-sub_title font-normal rounded-tr-none rounded-br-[75px] rounded-tl-[100px] rounded-bl-none flex justify-center items-center">
                hot sale
              </div>
            )}
            <div className= 'md:hidden flex justify-center items-center bg-white w-5 h-5 absolute top-2 left-1 rounded-full '>
                <Image
                src={
                  items?.heart === "heart"
                    ? "https://svgshare.com/i/15Ae.svg"
                    : "https://svgshare.com/i/15Bt.svg"
                }
                alt="logo"
                className="rounded-3xl "
                width={12}
                height={10}
              /> 
            </div>
            
          </div>

          <div className="flex flex-col flex-1 gap-2">
            <div className="flex justify-between items-center">
              <div className="md:text-sub_header text-sub_title font-normal">{items?.title}</div>
              <Image
                src={
                  items?.heart === "heart"
                    ? "https://svgshare.com/i/15Ae.svg"
                    : "https://svgshare.com/i/15Bt.svg"
                }
                alt="logo"
                className="rounded-3xl md:block hidden"
                width={20}
                height={17}
              />
            </div>
            <div className="flex justify-start items-center gap-2">
              <div className="text-light_Text font-normal text-sub_title md:text-sub_header">
                starting price
              </div>
              <div className="md:text-sub_header text-sub_title font-bold">{items?.price}</div>
            </div>
            <div className="flex flex-wrap justify-start items-center gap-2">
              <div className="text-light_Text font-normal text-sub_title md:text-sub_header">Lot starts in</div>
              <div className="flex flex-row gap-3">
                {[
                  { number: items?.daysNumber, label: items?.days },
                  { number: items?.hoursNumber, label: items?.hours },
                  { number: items?.minutesNumber, label: items?.minutes },
                ].map((item, index) => (
                  <button
                    key={index}
                    className="w-[57px] md:w-[105px] h-[28px] md:h-[40px] md:text-sub_header text-sub_title rounded-3xl font-bold bg-card_bg text-text_yellow flex justify-center items-center gap-1"
                  >
                    {item?.number}
                    <span className="text-text_yellow md:text-main_title text-sub_title">
                      {item?.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default memo(ProductCard) 
