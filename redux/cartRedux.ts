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
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
