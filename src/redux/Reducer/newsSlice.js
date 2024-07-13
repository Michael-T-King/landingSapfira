import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
  ],
  bannerImage: []
}

export const NewsSlice = createSlice ({
name: 'News',
initialState,
reducers: {
  addNews: (state, action) => {
  state.data = action.payload;
    }
  }
});
export const {addNews} = NewsSlice.actions;
export default NewsSlice.reducer;