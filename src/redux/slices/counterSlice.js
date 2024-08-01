import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {},
  reducers: {
    increment: (state, action) => {
      const id = action.payload;
      if (state[id]) {
        state[id] += 1;
      } else {
        state[id] = 1;
      }
    },
    decrement: (state, action) => {
      const id = action.payload;
      if (state[id] && state[id] > 0) {
        state[id] -= 1;
      }
    },
    reset: (state) => {
      Object.keys(state).forEach((key) => {
        state[key] = 0;
      });
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;

export const selectTotalCount = (state) => {
  return Object.values(state.counter).reduce(
    (total, count) => total + count,
    0
  );
};

export default counterSlice.reducer;
