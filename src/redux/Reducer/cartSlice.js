import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: {
    name: '',
    email: '',
    address: '',
    phone: '',
    description: '',
  },
  cartItems: []
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    setCartDetails: (state, action) => {
      state.cart = {
        ...state.cart,
        ...action.payload
      };
    }
  }
});

export const { addToCart, setCartDetails } = cartSlice.actions;
export default cartSlice.reducer;
