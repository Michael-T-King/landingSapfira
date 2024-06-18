import { configureStore } from '@reduxjs/toolkit'
import products from "./Reducer/products";


const store = configureStore({
reducer:{
    products
}
})

export default store