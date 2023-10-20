"use client";

import React, { useState } from "react";
import Products from "../../components/Products";
import NewsLetter from "../../components/NewsLetter";
import Footer from "../../components/Footer";
import Announcement from "../../components/Announcement";
import Navbar from "../../components/Navbar";

const ProductList = ({ params }: { params: { category: string } }) => {
  const { category } = params;
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = (e.target as HTMLSelectElement).value;
    setFilters({
      ...filters,
      [e.currentTarget.name]: value,
    });
  };

  return (
    <section className="bg-[#fcf5f5]">
      <Announcement />
      <Navbar />
      <h1 className="text-4xl font-semibold mx-5 py-5">{category}</h1>
      <div className="flex justify-between px-2">
        <div className="lg:m-5 justify-start flex items-start lg:items-center gap-2 flex-col lg:flex-row w-full">
          <span className="text-lg font-semibold">Filter Products :</span>
          <select
            name="color"
            className="border-black w-1/2 lg:w-fit ring-transparent focus:ring-0 focus:border-black text-sm px-6 py-1"
            onChange={(e) => handleFilters(e)}
          >
            <option disabled>Color</option>
            <option value="white">White</option>
            <option value="black">Black</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
          </select>
          <select
            name="size"
            className="border-black w-1/2 lg:w-fit ring-transparent focus:ring-0 focus:border-black text-sm px-6 py-1"
            onChange={handleFilters}
          >
            <option disabled>Size</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </div>
        <div className="lg:m-5 flex items-start lg:items-center lg:justify-end gap-2 flex-col lg:flex-row w-full">
          <span className="text-lg font-semibold">Sort Products :</span>
          <select
            className="border-black ring-transparent focus:ring-0 focus:border-black text-sm lg:ml-2 lg:px-6 py-1"
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="newest">Newest</option>
            <option value="asc">Price (asc)</option>
            <option value="desc">Price (desc)</option>
          </select>
        </div>
      </div>
      <Products cat={category} filters={filters} sort={sort} />
      <NewsLetter />
      <Footer />
    </section>
  );
};

export default ProductList;
