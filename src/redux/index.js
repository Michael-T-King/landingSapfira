import { configureStore } from '@reduxjs/toolkit'
import products from "./Reducer/products";
import cartSlice from './Reducer/cartSlice';
import userSlice  from './Reducer/users';


const store = configureStore({
reducer:{
    products,
    cartSlice,
    userSlice
}
})

export default store