"use client";

import { createSlice } from "@reduxjs/toolkit";

// interface Order {
//   userId: string;
//   products: [
//     {
//       productId: string;
//       quantity: string;
//     }
//   ];
//   amount: number;
//   address: string;
// }

const orderSlice = createSlice({
  name: "order",
  initialState: {
    userId: "",
    products: [],
    amount: 0,
    address: "",
  },
  reducers: {
    addOrder: (state, action) => {
      console.log(action.payload);
      state.userId = action.payload.userId;
      state.products = action.payload.products;
      state.amount += action.payload.amount;
      state.address = action.payload.address;
    },
  },
});

export const { addOrder } = orderSlice.actions;
export default orderSlice.reducer;
