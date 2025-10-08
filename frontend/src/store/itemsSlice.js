import { createSlice } from '@reduxjs/toolkit';
const itemsSlice = createSlice({
  name: 'items',
  initialState: { list: [] },
  reducers: {
    setItems: (state, action) => { state.list = action.payload; },
    addItem: (state, action) => { state.list.unshift(action.payload); },
    updateItem: (state, action) => {
      state.list = state.list.map(i => i._id === action.payload._id ? action.payload : i);
    },
    deleteItem: (state, action) => {
      state.list = state.list.filter(i => i._id !== action.payload);
    }
  }
});
export const { setItems, addItem, updateItem, deleteItem } = itemsSlice.actions;
export default itemsSlice.reducer;
