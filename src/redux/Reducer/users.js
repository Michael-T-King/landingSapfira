import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    name: '',
    email: '',
    password: '',
    phone: '',
    status: true
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
    },
    getUser: (state, action) => {
      state.user = action.payload;
    }
  }
});

export default userSlice.reducer;
export const { registerUser, loginUser, getUser } = userSlice.actions;
