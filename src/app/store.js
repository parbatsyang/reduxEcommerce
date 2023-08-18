import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "../features/ProductApi";
import CartReducer from "../features/CartSlice";

const store = configureStore({
  reducer: {
    content: contentReducer,
    cart: CartReducer,
  },
});

export default store;
