import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  item: [],
  status: null
}

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  () => {
    axios.get("")
  }
)


const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {}
})

export default productSlice.reducer;