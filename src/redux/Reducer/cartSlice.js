import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: {
    name: '',
    email: '',
    address: '',
    phone: '',
    description: '',
    article: '',
    done: 'false',
    products: []
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

    dataForGraphs: (state, action) => {
      state.cartItems.push(action.payload);
    },
    
    removeFromAdmin: (state, action) => {
      const index = state.cartItems.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        state.cartItems.splice(index, 1);
      }
    },
    markOrderAsDone: (state, action) => {
      const { orderId, done } = action.payload;
      const order = state.cartItems.find(item => item.id === orderId);
      if (order) {
        order.done = done;
      }
    },
    setCartDetails: (state, action) => {
      state.cart = {
        ...state.cart,
        ...action.payload,
        products: action.payload.cartItems || state.cart.products
      };
      if (action.payload.cartItems !== undefined) {
        state.cartItems = action.payload.cartItems;
      }
    }
  }
});

export const { addToCart, setCartDetails, removeFromAdmin, markOrderAsDone, dataForGraphs } = cartSlice.actions;
export default cartSlice.reducer;
