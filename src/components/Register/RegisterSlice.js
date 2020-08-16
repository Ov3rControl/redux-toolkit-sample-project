import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Axios from 'axios';
import { showMessage } from './RegisterView';
export const Register = createAsyncThunk('bundles/myAsyncInSlice', (data) =>
  Axios.post('http://localhost:8000/api/users/', { ...data })
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.log(error))
);
const registerSlice = createSlice({
  name: 'register',
  initialState: { entities: [], loading: 'idle', error: '' },
  extraReducers: {
    [Register.fulfilled]: (state, action) => {
      state.entities = action.payload;
      console.log(action);
      if (action.payload) {
        showMessage('success', 'User Created Successfully');
      } else {
        showMessage('error', "Couldn't Create User");
      }
    },
  },
});

export default registerSlice.reducer;
