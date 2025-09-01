import { createAsyncThunk } from '@reduxjs/toolkit';
import { clear, instance, setToken } from '@/shared/api/Api';
import {
  AuthResponse,
  AuthCredential,
  MyKnownError,
  LoginCredential,
} from '@/types/auth.type';
import { RootState } from '../store';

export const registerThunk = createAsyncThunk<
  AuthResponse,
  AuthCredential,
  { rejectValue: MyKnownError }
>(
  'auth/register',

  async (userinfo, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('/users/signup', userinfo);
      setToken(data.token);
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error as MyKnownError);
    }
  }
);

export const loginThunk = createAsyncThunk<
  AuthResponse,
  LoginCredential,
  { rejectValue: MyKnownError }
>('auth/login', async (userinfo, { rejectWithValue }) => {
  try {
    const { data } = await instance.post('/users/signin', userinfo);
    setToken(data.token);

    return data;
  } catch (error) {
    console.log(error);
    return rejectWithValue(error as MyKnownError);
  }
});

export const logOutThunk = createAsyncThunk<
  undefined,
  undefined,
  { rejectValue: MyKnownError }
>('auth/logOut', async (_, { rejectWithValue }) => {
  try {
    await instance.post('/users/signout');
    clear();
  } catch (error) {
    return rejectWithValue(error as MyKnownError);
  }
});

export const refreshThunk = createAsyncThunk<
  AuthResponse,
  void,
  {
    rejectWithValue: MyKnownError;
    state: RootState;
  }
>('auth/refresh', async (_, { rejectWithValue, getState }) => {
  const persited = getState().auth.token;
  if (!persited) {
    return rejectWithValue('None');
  }
  try {
    setToken(persited);
    const { data } = await instance.get('/users/current');

    return data;
  } catch (error) {
    console.log(error);
    return rejectWithValue(error as MyKnownError);
  }
});
