import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Axios from 'axios';
export const getCategories = createAsyncThunk('bundles/categories', () =>
  Axios.get('http://localhost:8000/api/categories/')
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.log(error))
);
const sideBarSlice = createSlice({
  name: 'sideBar',
  initialState: {
    categories: [],
    currNavigationTab: '',
    loading: 'idle',
    error: '',
  },
  reducers: {
    navigationTab: (state) => state.currNavigationTab + 1,
  },
  extraReducers: {
    [getCategories.fulfilled]: (state, action) => {
      state.categories = action.payload;
    },
  },
});
export const selectCategories = (state) => state.sideBar;

export default sideBarSlice.reducer;
