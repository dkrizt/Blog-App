import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countValue: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    /*     handleIncreaseCountAction: (state, action) => {
        state.countValue += 1;
      }, */
    increment: (state) => {
      state.countValue += 1;
      console.log(state.countValue);
    },
    decrement: (state) => {
      console.log(state.countValue);
      state.countValue -= 1;
    },
    incrementByAmount: (state, action) => {
      return { ...state, value: (state.countValue += action.payload) };
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
