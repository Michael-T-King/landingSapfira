import { createSlice } from "@reduxjs/toolkit";

const initialState = {
comments:[]
}

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    addComment: (state, action) =>{
      state.comments = action.payload;
    },
    fetchComment: (state, action) =>{
      state.comments = action.payload;
    },
    removeComment: (state, action) => {
      state.comments = state.comments.filter(item => item.id !== action.payload);
      },
  }
})

export const {addComment, fetchComment, removeComment} = commentSlice.actions;
export default commentSlice.reducer;