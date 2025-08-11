import { configureStore } from "@reduxjs/toolkit";
import readingListReducer from "../slices/readingListSlice";

const store = configureStore({
  reducer: {
    readingList: readingListReducer,
  },
});

export default store;
