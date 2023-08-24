import { createSlice } from "@reduxjs/toolkit";

const verifyProductCartSlice = createSlice({
  name: "verifyProductCart",
  initialState: false,
  reducers: {
    setVerifyProductCartG: (state, action) => action.payload,
  },
});

export const { setVerifyProductCartG } = verifyProductCartSlice.actions;

export default verifyProductCartSlice.reducer;
