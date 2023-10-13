import React from "react";
import { popularProducts } from "../data";
import Product from "./Product";

const Products = () => {
  return (
    <div className="flex p-5 justify-between gap-3 flex-wrap">
      {popularProducts.map((item) => (
        <Product {...item} key={item.id} />
      ))}
    </div>
  );
};

export default Products;
