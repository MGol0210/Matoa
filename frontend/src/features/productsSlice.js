import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  item: [],
  status: null,
  error: null,
}

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async() => {
    try{
      const response = await axios.get("http://localhost:5000/products")
      return response?.data;
    } catch (error) {
      console.log(error);
    }
  }
)


const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {
    [productsFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [productsFetch.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [productsFetch.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
})

export default productSlice.reducer;