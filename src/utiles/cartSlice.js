import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items:[],
  },
  reducers: {
    addItems: (state, action)=> {
      state.items.push(action.payload);
    },
    removeItems: (state, action)=> {
      state.items.splice(action.payload, 1);
    }
  }
});

export const { addItems, removeItems } = cartSlice.actions
export default cartSlice.reducer