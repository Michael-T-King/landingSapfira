import { configureStore } from '@reduxjs/toolkit';
import products from "./Reducer/products";
import cartReducer from './Reducer/cartSlice'; 
import userSlice  from './Reducer/users';

const store = configureStore({
  reducer:{
    products,
    cart: cartReducer, 
    userSlice
  }
});

export default store;
