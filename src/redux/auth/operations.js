import { createAsyncThunk } from '@reduxjs/toolkit';
import { clear, instance, setToken } from '../../service/Api';

export const registerThunk = createAsyncThunk(
  'auth/register',

  async (userinfo, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('/users/signup', userinfo);
      setToken(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (userinfo, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('/users/signin', userinfo);
      setToken(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  'auth/logOut',
  async (_, { rejectWithValue }) => {
    try {
      await instance.post('/users/signout');
      clear();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  'auth/refresh',

  async (_, { rejectWithValue, getState }) => {
    const persited = getState().auth.token;
    if (!persited) {
      return rejectWithValue('NOne');
    }
    try {
      setToken(persited);
      const { data } = await instance.get('/users/current');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
