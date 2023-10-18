import React from "react";
import SendIcon from "@mui/icons-material/Send";

const NewsLetter = () => {
  return (
    <div className="h-[60vh] bg-[#fcf5f5] flex justify-center items-center flex-col">
      <h1 className="text-5xl lg:text-7xl mb-5 font-semibold">Newsletter</h1>
      <div className="text-2xl mb-5 text-center">
        Get timely updates from your favorite products.
      </div>
      <div className="w-4/5 lg:w-1/2 h-10 bg-white flex justify-between border-2 border-slate-200">
        <input
          type="text"
          placeholder="Your email"
          className="border-0 ring-transparent focus:ring-0 bg-transparent pl-5 flex-1"
        />
        <button className="bg-[#28949B] text-white px-5 border-slate-200">
          <SendIcon />
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
