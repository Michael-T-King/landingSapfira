import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    name: '',
    email: '',
    password: '',
    phone: '',
    status: false,
  },
  currentUser: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.user = action.payload;
    },
    loginUser: (state, action) => {
      state.user = action.payload;
    },
    logoutUser: (state) => {
      state.user = initialState.user;
      state.currentUser = null;
    },
    getUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { registerUser, loginUser, getUser, logoutUser } = userSlice.actions;
