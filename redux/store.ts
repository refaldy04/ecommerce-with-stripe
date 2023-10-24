"use client";

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import orderReducer from "./orderRedux";
import userReducer from "./userRedux";

export default configureStore({
  reducer: {
    cart: cartReducer,
    order: orderReducer,
    user: userReducer,
  },
});
