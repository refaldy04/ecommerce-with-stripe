"use client";

import React, { useState } from "react";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import Image from "next/image";
import { sliderItems } from "../data";

const dynamicTailwind = [
  "translate-x-[0vw]",
  "translate-x-[-100vw]",
  "translate-x-[-200vw]",
];

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction: string) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <div className="w-full h-[80vh] hidden lg:flex relative overflow-x-hidden">
      <div
        className="h-[50px] w-[50px] rounded-full bg-slate-300 flex justify-center items-center absolute top-0 bottom-0 m-auto left-5 cursor-pointer opacity-50 z-20"
        onClick={() => handleClick("left")}
      >
        <ArrowLeftOutlinedIcon />
      </div>
      <div
        className={
          `h-full flex transition-all duration-1000 ` +
          `translate-x-[${slideIndex * -100}vw]`
        }
      >
        {sliderItems.map((item) => (
          <div
            className={`flex items-center w-screen bg-[#f1873e] h-full`}
            key={item.id}
          >
            <div className="flex-1 h-full relative z-10">
              <Image src={item.img} alt="product-1" layout="fill" />
            </div>
            <div className={`flex-1 p-14`}>
              <h1 className="text-4xl font-bold">{item.title}</h1>
              <p className="my-12 text-lg font-semibold tracking-wide">
                {item.desc}
              </p>
              <button className="p-3 text-lg bg-transparent border border-black">
                SHOW NOW
              </button>
            </div>
          </div>
        ))}
      </div>

      <div
        className="h-[50px] w-[50px] rounded-full bg-slate-300 flex justify-center items-center absolute top-0 bottom-0 m-auto right-5 cursor-pointer opacity-50 z-20"
        onClick={() => handleClick("right")}
      >
        <ArrowRightOutlinedIcon />
      </div>
    </div>
  );
};

export default Slider;
