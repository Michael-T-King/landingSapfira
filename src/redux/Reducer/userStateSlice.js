import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userState:[
    {
      user:'',
      status: false
    }
  ]
  }
  export const userStateSlice = createSlice({
    name: 'userState',
    initialState,
    reducers: {
      addUserState: (state, action) =>{
        state.userState = action.payload;
      }
    }
  })
  
  export const {addUserState} = userStateSlice.actions;
  export default userStateSlice.reducer;

