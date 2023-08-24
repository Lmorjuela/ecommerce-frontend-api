import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfigAuth from "../../utils/getConfigAuth.js";
import { setVerifyProductCartG } from "./verifyProductCart.slice.js";

const cartSlice = createSlice({
  name: "cart",
  initialState: null,
  reducers: {
    setCartG: (state, action) => action.payload,
    addProductCartG: (state, action) => [...state, action.payload],
    deleteProductCartG: (state, action) => {
      return state.filter((product) => product.id !== action.payload);
    },
  },
});

export const { setCartG, addProductCartG, deleteProductCartG } =
  cartSlice.actions;

export default cartSlice.reducer;
const BASE_URL = import.meta.env.VITE_REACT_APP_URL
const baseUrl = `${BASE_URL}/cart`;

export const getCartThunk = () => (dispatch) => {
  axios
    .get(baseUrl, getConfigAuth())
    .then((res) => dispatch(setCartG(res.data)))
    .catch((err) => console.log(err));
};

export const postCartThunk =
  (product, quantity = 1) =>
    (dispatch) => {
      const data = {
        quantity,
        productId: product.id,
      };
      axios
        .post(baseUrl, data, getConfigAuth())
        .then((res) => {
          const obj = {
            ...res.data,
            product: product,
          };
          dispatch(addProductCartG(obj));
          dispatch(setVerifyProductCartG(false));
        })
        .catch((err) => {
          dispatch(setVerifyProductCartG(true));
        });
    };

export const deleteCartThunk = (id) => (dispatch) => {
  const url = `${baseUrl}/${id}`;
  axios
    .delete(url, getConfigAuth())
    .then((res) => {
      console.log(res.data);
      dispatch(deleteProductCartG(id));
    })
    .catch((err) => {
      console.error(err);
    });
};
