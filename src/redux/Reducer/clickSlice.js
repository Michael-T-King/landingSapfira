import { createSlice } from '@reduxjs/toolkit';

const initialState = {

  clicks: {
    // logo1: 0,
    // main: 0,
    // contacts: 0,
    // delivery: 0,
    // cart: 0,
    // login: 0,
    // mainPick: 0,
    // firstBlock:0,
    // homeOrder: 0,
    // secondBlock:0,
    // footerLogo:0,
    // footerMain:0,
    // footerContacts:0,
    // footerDelivery:0,
    // footerCart:0,
    // developer:0,
    // vk:0,
    // whatsapp: 0,
    // telegram:0,
    // btnUp:0,
  }
};

export const clickSlice = createSlice({
  name: 'clicks',
  initialState,
  reducers: {
    clicksCounter: (state, action) => {
      state.clicks = { ...state.clicks, ...action.payload };

    }
  }
});

export const { clicksCounter } = clickSlice.actions;
export default clickSlice.reducer;
