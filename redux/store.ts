"use client";

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import orderReducer from "./orderRedux";

export default configureStore({
  reducer: {
    cart: cartReducer,
    order: orderReducer,
  },
});
