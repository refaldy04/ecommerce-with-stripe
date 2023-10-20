import React from "react";
import NewsLetter from "../../components/NewsLetter";
import Footer from "../../components/Footer";
import Image from "next/image";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Announcement from "../../components/Announcement";
import Navbar from "../../components/Navbar";

const Product = () => {
  return (
    <div className="bg-[#fcf5f5]">
      <Announcement />
      <Navbar />
      <div className="p-2 lg:p-12 flex flex-col lg:flex-row">
        <div className="flex-1">
          <Image
            src="/images/etnic.png"
            alt="product-image"
            width={500}
            height={500}
          />
        </div>
        <div className="flex-1 px-2 lg:px-12">
          <h1 className="text-4xl">Indian Etnic Sandal</h1>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, corrupti culpa temporibus ullam alias commodi quasi
            deserunt voluptates eos dolorum maxime, laudantium est ipsa dolore
            numquam impedit repellendus. Veniam, quisquam.
          </p>
          <span className="text-5xl">$ 20</span>
          <div className="w-full lg:w-2/3 flex justify-between my-7">
            <div className="flex items-center gap-2">
              <span className="text-lg">Color</span>
              <select
                name=""
                id=""
                className="border-black ring-transparent focus:ring-0 focus:border-black text-sm px-6 py-1"
              >
                <option value="">Black</option>
                <option value="">Darkblue</option>
                <option value="">Gray</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">Size</span>
              <select
                name=""
                id=""
                className="border-black ring-transparent focus:ring-0 focus:border-black text-sm px-6 py-1"
              >
                <option value="">XS</option>
                <option value="">S</option>
                <option value="">M</option>
                <option value="">L</option>
                <option value="">XL</option>
              </select>
            </div>
          </div>
          <div className="flex w-full lg:w-2/3 items-center justify-between">
            <div className="flex items-center font-semibold">
              <RemoveIcon />
              <span className="w-7 h-7 rounded-lg border-2 border-[#28949B] flex justify-center items-center mx-1">
                1
              </span>
              <AddIcon />
            </div>
            <button className="border-2 border-[#28949B] p-3 font-semibold hover:bg-[#e8f9fa]">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Product;
