import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [
        {
            name: '',
            price: '',
            description: '',
            image: '',
            category:'',
            article: '',
            avaleble: ''

        }
    ],
    currentProduct: null,
    errors: '',
    status: '',
    filter: {
        category: ''
    }
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setAllProducts: (state, action) => {
            state.data = action.payload;
        },
        setCurrentProduct(state, action) {
            state.currentProduct = action.payload;
          }
    }
})

export const { setAllProducts, setCurrentProduct} = productsSlice.actions;
export default productsSlice.reducer;
