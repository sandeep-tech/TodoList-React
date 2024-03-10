import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      return action.payload;
    },
    deleteItem: (state, action) => {
      return action.payload;
    },
    updateItem: (state, action) => {
      return action.payload;
    },
  },
});
export const { addItem, deleteItem, updateItem } = todoSlice.actions;
export default todoSlice.reducer;
