import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice.js'

export const appStore = configureStore({
  reducer: {
    cart : cartReducer //it was have cart data
  }
});