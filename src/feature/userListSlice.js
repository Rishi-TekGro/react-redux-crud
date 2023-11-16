import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    featchUser: (state, action) => {
      return {
        ...state,
        users: action.payload,
      };
    },
    addSingleUser: (state, action) => {

      return {
        ...state,
        users: [...state.users, action.payload],
      };
    },
    updateUser: (state, action) => {
      const { id, updatedUserData } = action.payload;
    
      const userIndex = state.users.findIndex(user => user.id === id);

      if (userIndex !== -1) {
        state.users[userIndex] = updatedUserData;
      }
    },
    deleteSingleUser: (state, action) => {
      const { id } = action.payload;
      state.users = state.users.filter(user => user.id !== id);
    },
  },
});

export const { addSingleUser, updateUser, deleteSingleUser, featchUser } = userSlice.actions;
export default userSlice.reducer;