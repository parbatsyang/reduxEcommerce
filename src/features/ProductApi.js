import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPos = createAsyncThunk("content/getPos", async (thunkAPI) => {
  const response = await axios("https://dummyjson.com/products");
  const data = await response.data.products;
  return data;
});

const initialState = {
  contents: [],
  isLoading: false,
  error: null,
  searchText: "",
};

export const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    setProductSearchText: (state, action) => {
      state.searchText = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPos.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.contents = action.payload;
      state.productContainer = action.payload;
    });
    builder.addCase(getPos.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});
export default contentSlice.reducer;
export const { setProductSearchText } = contentSlice.actions;
