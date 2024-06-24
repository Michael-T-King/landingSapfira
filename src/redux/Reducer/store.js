// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Reducer/cartSlice';
import productsReducer from './Reducer/productsSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
  },
});

export default store;
