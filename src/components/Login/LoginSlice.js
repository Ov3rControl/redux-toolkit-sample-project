import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Axios from 'axios';
import { showMessage } from './LoginView';
export const Login = createAsyncThunk('bundles/LoginSlice', (data) =>
  Axios.post('http://localhost:8001/api/login', { ...data })
    .then((response) => {
      return response.data;
    })
    .catch((error) => showMessage('error', error.message))
);
const loginSlice = createSlice({
  name: 'login',
  initialState: { entities: [], loading: 'idle', error: '' },
  extraReducers: {
    [Login.fulfilled]: (state, action) => {
      state.entities = action.payload;
      localStorage.setItem('userId', JSON.stringify(action.payload));
      if (action.payload) {
        showMessage('success', 'User Logged In Successfully');
        window.location = '/home';
      } else {
        showMessage('error', 'Wrong Login Credentials');
      }
    },
  },
});

export default loginSlice.reducer;
