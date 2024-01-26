import { createSlice } from "@reduxjs/toolkit";

const numSlice = createSlice({
  name: "numbers1",
  initialState: {
    numbers: 0,
  },
  reducers: {
    increment(state) {
      state.numbers += 1;
    },
    reset(state) {
      state.numbers = 0;
    },
  },
});

export const { increment, reset } = numSlice.actions;
export default numSlice.reducer;
