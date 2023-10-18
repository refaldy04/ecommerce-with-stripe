import React from "react";
import { popularProducts } from "../data";
import Product from "./Product";

const Products = () => {
  return (
    <div className="flex p-2 lg:p-5 justify-center lg:justify-between gap-3 flex-wrap bg-[#fcf5f5]">
      {popularProducts.map((item) => (
        <Product {...item} key={item.id} />
      ))}
    </div>
  );
};

export default Products;
