import { configureStore } from '@reduxjs/toolkit';
import products from "./Reducer/products";
import cartReducer from './Reducer/cartSlice'; 
import userSlice  from './Reducer/users';
import clickSlice from './Reducer/clickSlice';
import stateSlice from './Reducer/stateSlice';

const store = configureStore({
  reducer:{
    products,
    cart: cartReducer, 
    userSlice,
    clickSlice,
    stateSlice,
  }
});

export default store;