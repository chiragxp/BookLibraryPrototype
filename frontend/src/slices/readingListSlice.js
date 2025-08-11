import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const readingListSlice = createSlice({
  name: "readingList",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    removeBook: (state, action) => {
      return state.filter((book) => book.id !== action.payload);
    },
  },
});

export const { addBook, removeBook } = readingListSlice.actions;
export default readingListSlice.reducer;
