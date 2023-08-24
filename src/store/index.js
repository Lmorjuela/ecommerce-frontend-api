import { configureStore } from "@reduxjs/toolkit";
import products from "./slice/products.slice.js";
import cart from "./slice/cart.slice.js";
import hiddenCart from "./slice/hiddenCart.slice.js";
import verifyProductCart from "./slice/verifyProductCart.slice.js";

export default configureStore({
  reducer: {
    products,
    cart,
    hiddenCart,
    verifyProductCart,
  },
});
