import { configureStore } from '@reduxjs/toolkit';
import products from "./Reducer/products";
import cartReducer from './Reducer/cartSlice'; 
import userSlice  from './Reducer/users';
import clickSlice from './Reducer/clickSlice';

const store = configureStore({
  reducer:{
    products,
    cart: cartReducer, 
    userSlice,
    clickSlice,
  }
});

export default store;