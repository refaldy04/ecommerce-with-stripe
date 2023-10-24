"use client";

import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  userId: "",
  products: [],
  amount: 0,
  address: "",
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.userId = action.payload.userId;
      state.products = action.payload.products;
      state.amount += action.payload.amount;
      state.address = action.payload.address;
    },
    resetOrder: () => initialState,
  },
});

export const { addOrder, resetOrder } = orderSlice.actions;
export default orderSlice.reducer;
