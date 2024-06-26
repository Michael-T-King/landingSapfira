import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [],
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
    setCurrentProduct: (state, action) => {
        state.currentProduct = action.payload;
    },
    removeProduct: (state, action) => {
        state.data = state.data.filter(item => item.id !== action.payload);
        },
    }
});

export const { setAllProducts, setCurrentProduct, removeProduct } = productsSlice.actions;
export default productsSlice.reducer;
