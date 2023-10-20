"use client";

import React, { useEffect, useState } from "react";
import NewsLetter from "../../components/NewsLetter";
import Footer from "../../components/Footer";
import Image from "next/image";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Announcement from "../../components/Announcement";
import Navbar from "../../components/Navbar";
import { publicRequest } from "@/app/requestMethods";
import { addProduct } from "@/redux/cartRedux";
import { useDispatch } from "react-redux";

type ProductItem = {
  _id?: string;
  title?: string;
  desc?: string;
  img: string;
  categories?: string[];
  size?: string[];
  color?: string[];
  price?: string;
  inStock?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  __v?: string;
};

const Product = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const [product, setProduct] = useState<ProductItem>({ img: "" });
  const [quantity, setQuantity] = useState<number>(1);
  const [color, setColor] = useState<string>("");
  const [size, setSize] = useState<string>("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await publicRequest.get("/products/find/" + id);
        setProduct(data);
      } catch (error) {}
    };

    getProduct();
  }, [id]);

  const handleQuantity = (type: string) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };

  return (
    <div className="bg-[#fcf5f5]">
      <Announcement />
      <Navbar />
      <div className="p-2 lg:p-12 flex flex-col lg:flex-row">
        <div className="flex-1">
          <Image
            src={product.img}
            alt="product-image"
            width={500}
            height={500}
          />
        </div>
        <div className="flex-1 px-2 lg:px-12">
          <h1 className="text-4xl">{product.title}</h1>
          <p className="my-5">{product.desc}</p>
          <span className="text-5xl">Rp {product.price}</span>
          <div className="w-full lg:w-2/3 flex justify-between my-7">
            <div className="flex items-center gap-2">
              <span className="text-lg">Color</span>
              <select
                className="border-black ring-transparent focus:ring-0 focus:border-black text-sm px-6 py-1"
                onChange={(e) => setSize(e.target.value)}
              >
                {product.color?.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">Size</span>
              <select
                className="border-black ring-transparent focus:ring-0 focus:border-black text-sm px-6 py-1"
                onChange={(e) => setSize(e.target.value)}
              >
                {product.size?.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex w-full lg:w-2/3 items-center justify-between">
            <div className="flex items-center font-semibold">
              <RemoveIcon onClick={() => handleQuantity("dec")} />
              <span className="w-7 h-7 rounded-lg border-2 border-[#28949B] flex justify-center items-center mx-1">
                {quantity}
              </span>
              <AddIcon onClick={() => handleQuantity("inc")} />
            </div>
            <button
              className="border-2 border-[#28949B] p-3 font-semibold hover:bg-[#e8f9fa]"
              onClick={handleClick}
            >
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
