"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userRequest } from "../requestMethods";
import { useRouter } from "next/navigation";
import { resetOrder } from "@/redux/orderRedux";
import { AxiosError } from "axios";

const Success = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const order = useSelector((state: any) => state.order);
  const [orderId, setOrderId] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const hasFalseValue = Object.values(order).some((value) => !value);
    hasFalseValue && router.push("/");
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/orders", order);
        setOrderId(res.data._id);
        dispatch(resetOrder());
      } catch (error: any) {
        setError(error.message);
        console.log(error);
      }
    };

    !hasFalseValue && createOrder();
  }, [order]);

  const handleClick = () => {
    router.replace("/");
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}
      <br />
      <p className="text-red-500">{error && error}</p>
      <button className="mt-5 p-3 border border-black" onClick={handleClick}>
        Go to Homepage
      </button>
    </div>
  );
};

export default Success;
