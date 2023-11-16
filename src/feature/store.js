// app/store.js
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import userListSlice from './userListSlice';

export const store = configureStore({
  reducer: {
    users: userListSlice
  },
  middleware: [thunk],
});
