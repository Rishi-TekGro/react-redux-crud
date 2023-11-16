// feature/actions.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import { featchUser , addSingleUser, updateUser,deleteSingleUser} from './userListSlice';

import axios from 'axios';
const API_BASE_URL = 'http://127.0.0.1:8000/api';


export const fetchUsers = createAsyncThunk('users/fetchUsers', async (_, { dispatch }) => {

  try {
    const response = await axios.get(`${API_BASE_URL}/users`);
    dispatch(featchUser(response.data)); // Dispatch the action

  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
});

export const addUser = createAsyncThunk('users/addUser', async ({ id, name,email,password },thunkAPI) => {
  try {

    const response = await axios.post(`${API_BASE_URL}/add-user`, {name,email,password});
// console.log(response,'added user')
    thunkAPI.dispatch(addSingleUser(response.data.user));


  } catch (error) {
    console.error('Error adding user:', error);
    throw error;
  }
});

export const editUser = createAsyncThunk('users/editUser', async ({ id, updatedUserData },thunkAPI) => {
  // try {

    const response = await axios.put(`${API_BASE_URL}/user/${id}`, updatedUserData);
    thunkAPI.dispatch(updateUser({id, updatedUserData}))
    
    
  // } catch (error) {
  //   console.error('Error editing user:', error);
  //   throw error;
  // }
});





export const deleteUser = createAsyncThunk('users/deleteUser', async ({id},thunkAPI) => {
  try {
    // console.log(id.id)
    const response = await axios.delete(`${API_BASE_URL}/user/${id}`);

thunkAPI.dispatch(deleteSingleUser({id}))

  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
});
