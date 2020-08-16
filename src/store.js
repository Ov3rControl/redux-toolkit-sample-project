import { configureStore, combineReducers } from '@reduxjs/toolkit';
import registerSlice from './components/Register/RegisterSlice';
import LoginSlice from './components/Login/LoginSlice';
import SideBarSlice from './sharedComponents/SideBar/SideBarSlice';
import ProductsSlice from './sharedComponents/Products/ProductsSlice';

const store = configureStore({
  reducer: combineReducers({
    register: registerSlice,
    login: LoginSlice,
    sideBar: SideBarSlice,
    products: ProductsSlice,
  }),
});

export default store;
