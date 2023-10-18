import React from "react";
import Products from "../components/Products";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";

const ProductList = () => {
  return (
    <section className="bg-[#fcf5f5]">
      <Announcement />
      <Navbar />
      <h1 className="text-4xl font-semibold mx-5 py-5">Dresses</h1>
      <div className="flex justify-between px-2">
        <div className="lg:m-5 flex items-start lg:items-center gap-2 flex-col lg:flex-row w-full">
          <span className="text-lg font-semibold">Filter Products :</span>
          <select
            name=""
            id=""
            className="border-black w-1/2 ring-transparent focus:ring-0 focus:border-black text-sm px-6 py-1"
          >
            <option disabled selected>
              Color
            </option>
            <option value="">White</option>
            <option value="">Black</option>
            <option value="">Red</option>
            <option value="">Blue</option>
            <option value="">Yellow</option>
            <option value="">Green</option>
          </select>
          <select
            name=""
            id=""
            className="border-black w-1/2 ring-transparent focus:ring-0 focus:border-black text-sm px-6 py-1"
          >
            <option disabled selected>
              Size
            </option>
            <option value="">XS</option>
            <option value="">S</option>
            <option value="">M</option>
            <option value="">L</option>
            <option value="">XL</option>
          </select>
        </div>
        <div className="lg:m-5 flex items-start lg:items-center gap-2 flex-col lg:flex-row w-full">
          <span className="text-lg font-semibold">Sort Products :</span>
          <select
            name=""
            id=""
            className="border-black ring-transparent focus:ring-0 focus:border-black text-sm lg:ml-2 lg:px-6 py-1"
          >
            <option disabled selected>
              Newest
            </option>
            <option value="">Price (asc)</option>
            <option value="">Price (desc)</option>
          </select>
        </div>
      </div>
      <Products />
      <NewsLetter />
      <Footer />
    </section>
  );
};

export default ProductList;
