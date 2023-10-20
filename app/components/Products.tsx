"use client";

import React, { useState, useEffect } from "react";
import { popularProducts } from "../data";
import Product from "./Product";
import axios from "axios";

interface ProductsType {
  cat: string;
  filters: {
    size?: string;
    color?: string;
  };
  sort: string;
}

const Products: React.FC<ProductsType> = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    console.log({ cat });
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:8080/api/products?category=${cat}`
            : "http://localhost:8080/api/products"
        );
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item: any) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [cat, filters, products]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a: any, b: any) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a: any, b: any) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a: any, b: any) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <div className="flex p-2 lg:p-5 justify-center lg:justify-start gap-3 flex-wrap bg-[#fcf5f5]">
      {cat
        ? filteredProducts.map((item: any) => (
            <Product {...item} key={item._id} />
          ))
        : products
            .slice(0, 8)
            .map((item: any) => <Product {...item} key={item._id} />)}
    </div>
  );
};

export default Products;
