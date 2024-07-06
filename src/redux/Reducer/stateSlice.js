import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  State: false,
};

export const stateSlice = createSlice({
  name: 'State',
  initialState,
  reducers: {
    stateAction: (state, action) => {
      state.State = action.payload;
    },
    getUsers: (state, action) => {
      state.data = action.payload;
    },
    removeUser: (state, action) => {
      state.data = state.data.filter(user => user.id !== action.payload);
    },
  },
});

export const { stateAction, getUsers, removeUser } = stateSlice.actions;
export default stateSlice.reducer;
