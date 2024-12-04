import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import blogReducer from './slices/blogSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    blog: blogReducer
  },
});
