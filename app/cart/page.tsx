import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { Provider } from "react-redux";
import store from "@/redux/store";

const Cart = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <div className="p-2 lg:p-5">
        <h1 className="text-4xl text-center">YOUR BAG</h1>
        <div className="flex items-center justify-between py-3 lg:p-5">
          <button className="p-2 font-semibold border-2 border-black shadow-md">
            CONTINUE SHOPPING
          </button>
          <div className="lg:flex gap-5 hidden">
            <span className="underline cursor-pointer">Shopping Bag(2)</span>
            <span className="underline cursor-pointer">Your Whishlist(0)</span>
          </div>
          <button className="p-2 font-semibold bg-black text-white border-black">
            CHECKOUT NOW
          </button>
        </div>
        <div className="flex justify-between flex-col lg:flex-row">
          <div className="w-full flex flex-col gap-10">
            <div className="flex justify-between flex-col lg:flex-row">
              <div className="flex flex-1">
                <Image
                  src="https://picsum.photos/600/600?shop,dress&random=1"
                  alt="product-image"
                  width={300}
                  height={300}
                  className="w-52"
                />
                <div className="text-start p-5 flex flex-col justify-around">
                  <span>
                    <b>Product: </b>JESSIE THUNDER SHOES
                  </span>
                  <span>
                    <b>ID: </b>123123123123
                  </span>
                  <div className="w-5 h-5 rounded-full bg-black"></div>
                  <span>
                    <b>Size: </b>37.5
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-center flex-col mt-3 lg:mt-0">
                <div className="flex items-center font-semibold gap-4">
                  <RemoveIcon />
                  <span className="w-7 h-7 text-2xl rounded-lg border-2  flex justify-center items-center mx-1">
                    2
                  </span>
                  <AddIcon />
                </div>
                <span className="text-5xl mt-6">$ 30</span>
              </div>
            </div>

            <hr className="border border-slate-300" />

            <div className="flex justify-between flex-col lg:flex-row">
              <div className="flex flex-1">
                <Image
                  src="https://picsum.photos/600/600?shop,dress&random=2"
                  alt="product-image"
                  width={300}
                  height={300}
                  className="w-52"
                />
                <div className="text-start p-5 flex flex-col justify-around">
                  <span>
                    <b>Product: </b>HAKURA T-SHIRT
                  </span>
                  <span>
                    <b>ID: </b>123123123123
                  </span>
                  <div className="w-5 h-5 rounded-full bg-gray-500"></div>
                  <span>
                    <b>Size: </b>M
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-center flex-col mt-3 lg:mt-0">
                <div className="flex items-center font-semibold gap-4">
                  <RemoveIcon />
                  <span className="w-7 h-7 rounded-lg text-2xl border-2 flex justify-center items-center mx-1">
                    1
                  </span>
                  <AddIcon />
                </div>
                <span className="text-5xl mt-6">$ 20</span>
              </div>
            </div>
          </div>
          <div className="w-full mt-3 lg:mt-0 lg:w-1/3 border border-gray-400 rounded-md p-5 ml-2 h-[50vh] flex flex-col gap-5 items-start">
            <h1 className="text-3xl">ORDER SUMMARY</h1>
            <div className="flex justify-between w-full">
              <span>Subtotal</span>
              <span>$ 80</span>
            </div>
            <div className="flex justify-between w-full">
              <span>Estimated Shipping</span>
              <span>$ 5.90</span>
            </div>
            <div className="flex justify-between w-full">
              <span>Shipping Discount</span>
              <span>$ -5.90</span>
            </div>
            <div className="flex justify-between w-full font-semibold text-lg">
              <span>Total</span>
              <span>$ 80</span>
            </div>
            <button className="w-full p-2 bg-black text-white font-semibold">
              CHECKOUT NOW
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
