import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IUser, homeAxios } from '@shared/api';
import { StatusType } from '@shared/types';
import { findUser } from '../utils/findUser';
import { setUser } from '@entities/User';

interface IState {
  isOpen: boolean;
  status: StatusType;
  errorText: string;
}

const initialState: IState = {
  isOpen: false,
  status: 'fulfied',
  errorText: 'Ошибка!',
};

export const createUser = createAsyncThunk(
  'user/createUser',
  async function (
    user: { name: string; avatar: string; password: string; email: string },
    { dispatch },
  ) {
    const users = await homeAxios.get<IUser[]>('/users');
    const findedUser = findUser(users.data, user.email);
    if (findedUser) throw new Error('Такой аккаунт уже существует');
    const { data: createdUser } = await homeAxios.post<IUser>('/users', user);
    dispatch(setUser(createdUser));
    localStorage.setItem('user', JSON.stringify(createdUser));
    return user;
  },
);

const SignupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    setOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.pending, (state) => {
      state.status = 'pending';
      state.errorText = 'Ошибка!';
    }),
      builder.addCase(createUser.fulfilled, (state, action) => {
        state.status = 'fulfied';
      }),
      builder.addCase(createUser.rejected, (state, action) => {
        const payload = action.error as Error;
        console.error(payload.message);
        state.status = 'rejected';
        state.errorText = payload.message;
      });
  },
});

export const { setOpen } = SignupSlice.actions;
export const signupSlice = SignupSlice.reducer;
