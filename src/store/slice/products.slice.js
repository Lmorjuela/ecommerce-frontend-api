import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productsSlice = createSlice({
  name: "products",
  initialState: null,
  reducers: {
    setProductsG: (state, action) => action.payload,
  },
});

export const { setProductsG } = productsSlice.actions;

export default productsSlice.reducer;
const BASE_URL = import.meta.env.VITE_REACT_APP_URL
const defaultUrl = `${BASE_URL}/products`;

export const getProductsThunk =
  (url = defaultUrl) =>
    (dispatch) => {
      axios
        .get(url)
        .then((res) => {
          dispatch(setProductsG(res.data));
        })
        .catch((err) => {
          console.error(err);
        });
    };
