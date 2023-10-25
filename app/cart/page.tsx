"use client";

import React, { useEffect, useState } from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout, { Token } from "react-stripe-checkout";
import { userRequest } from "../requestMethods";
import { useRouter } from "next/navigation";
import { addOrder } from "@/redux/orderRedux";

const Cart = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.persisted.cart);
  const [stripeToken, setStripeToken] = useState<any>(null);

  const onToken = (token: Token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const { data } = await userRequest.post("checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });

        dispatch(
          addOrder({
            userId: "currentUser._id",
            products: cart.products.map((item: any) => ({
              productId: item._id,
              quantity: item.quantity,
            })),
            amount: cart.total,
            address: data.billing_details.address,
          })
        );
        router.replace("/success");
      } catch (error) {
        console.log(error);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total]);

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
            {cart.products.map((product: any, index: number) => (
              <div
                className="flex justify-between flex-col lg:flex-row"
                key={index}
              >
                <div className="flex flex-1">
                  <Image
                    src={product.img}
                    alt="product-image"
                    width={300}
                    height={300}
                    className="w-52"
                  />
                  <div className="text-start p-5 flex flex-col justify-around">
                    <span>
                      <b>Product: </b>
                      {product.title}
                    </span>
                    <span>
                      <b>ID: </b>
                      {product._id}
                    </span>
                    <span>
                      <b>Color: </b>
                      {product.color}
                    </span>
                    {/* <div
                      className={`w-5 h-5 rounded-full bg-${product.color}`}
                    ></div> */}
                    <span>
                      <b>Size: </b>
                      {product.size}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-center flex-col mt-3 lg:mt-0">
                  <div className="flex items-center font-semibold gap-4">
                    <RemoveIcon />
                    <span className="w-7 h-7 text-2xl rounded-lg border-2  flex justify-center items-center mx-1">
                      {product.quantity}
                    </span>
                    <AddIcon />
                  </div>
                  <span className="text-4xl mt-6">
                    Rp {product.price * product.quantity}
                  </span>
                </div>
              </div>
            ))}

            <hr className="border border-slate-300" />

            {/* <div className="flex justify-between flex-col lg:flex-row">
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
            </div> */}
          </div>
          <div className="w-full mt-3 lg:mt-0 lg:w-1/3 border border-gray-400 rounded-md p-5 ml-2 h-[50vh] flex flex-col gap-5 items-start">
            <h1 className="text-3xl">ORDER SUMMARY</h1>
            <div className="flex justify-between w-full">
              <span>Subtotal</span>
              <span>$ {cart.total}</span>
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
              <span>$ {cart.total}</span>
            </div>
            <StripeCheckout
              token={onToken}
              description="Big Data Stuff" // the pop-in header subtitle
              image="https://stripe.com/img/documentation/checkout/marketplace.png" // the pop-in header image (default none)
              ComponentClass="div"
              label="Buy the Thing" // text inside the Stripe button
              panelLabel="Give Money" // prepended to the amount in the bottom pay button
              amount={cart.total * 100} // cents
              stripeKey={process.env.NEXT_PUBLIC_STRIPE}
              name="RESHOP"
              billingAddress
              shippingAddress
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
