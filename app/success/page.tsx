"use client";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userRequest } from "../requestMethods";
import { useRouter } from "next/navigation";

const Success = () => {
  const router = useRouter();
  const order = useSelector((state: any) => state.order);
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    console.log(order);
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/orders", order);
        console.log(res);
        setOrderId(res.data._id);
      } catch (error) {
        console.log(error);
      }
    };
    createOrder();
  }, [order]);

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}{" "}
      <button
        className="mt-5 p-3 border border-black"
        onClick={() => router.push("/")}
      >
        Go to Homepage
      </button>
    </div>
  );
};

export default Success;
