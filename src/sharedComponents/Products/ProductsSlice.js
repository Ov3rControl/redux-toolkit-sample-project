import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Axios from 'axios';
export const getProducts = createAsyncThunk('bundles/products', () =>
  Axios.get('http://localhost:8000/api/products/')
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.log(error))
);
const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    loading: 'idle',
    error: '',
  },
  reducers: {
    navigationTab: (state) => state.currNavigationTab + 1,
  },
  extraReducers: {
    [getProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
    },
  },
});
export const selectProducts = (state) => state.products;

export default productsSlice.reducer;
