import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    name: '',
    email: '',
    password: '',
    phone: ''
  },
  currentUser: null
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.user = action.payload.obj;
    },
    loginUser: (state, action) => {
      state.currentUser = action.payload;
    }
  }
});

export default userSlice.reducer;
export const { registerUser, loginUser } = userSlice.actions;
