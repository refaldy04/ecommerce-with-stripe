"use client";

import { createSlice } from "@reduxjs/toolkit";

interface Cart {
  products: {}[];
  quantity: number;
  total: number;
}

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [] as Cart[],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    resetCart: (state) => {
      state.quantity = 0;
      state.products = [];
      state.total = 0;
    },
  },
});

export const { addProduct, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
