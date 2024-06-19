import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart : [
    {
      name: '',
      email: '',
      address: '',
      phone: '',
      description: '',
      product: ''
    }
  ]
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload)

    }
  }
})
export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;