import { configureStore } from '@reduxjs/toolkit';
import products from "./Reducer/products";
import cartReducer from './Reducer/cartSlice'; 
import userSlice  from './Reducer/users';
import clickSlice from './Reducer/clickSlice';
import stateSlice from './Reducer/stateSlice';
import newsSlice from './Reducer/newsSlice';
import commentSlice from './Reducer/commentSlice';
import userStateSlice from './Reducer/userStateSlice';

const store = configureStore({
  reducer:{
    products,
    cart: cartReducer, 
    userSlice,
    clickSlice,
    stateSlice,
    newsSlice,
    commentSlice,
    userStateSlice
  }
});

export default store;