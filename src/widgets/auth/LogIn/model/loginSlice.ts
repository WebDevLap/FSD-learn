import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IUser, homeAxios } from '@shared/api';
import { StatusType } from '@shared/types';
import { checkUser } from '../utils/checkUser';
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

export const getUser = createAsyncThunk(
  'user/getUser',
  async function ({ email, password }: { email: string; password: string }, { dispatch }) {
    const users = await homeAxios.get<IUser[]>('/users');
    const user = checkUser(users.data, email, password);
    if (!user) throw new Error('Не удалось найти такой аккаунт');
    dispatch(setUser(user));
    localStorage.setItem('user', JSON.stringify(user));
    dispatch(setOpen(false));
    return user;
  },
);

const LoginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state) => {
      state.status = 'pending';
      state.errorText = 'Ошибка!';
    }),
      builder.addCase(getUser.fulfilled, (state, action) => {
        state.status = 'fulfied';
      }),
      builder.addCase(getUser.rejected, (state, action) => {
        const payload = action.error as Error;
        console.error(payload.message);
        state.status = 'rejected';
        state.errorText = payload.message;
      });
  },
});

export const { setOpen } = LoginSlice.actions;
export const loginSlice = LoginSlice.reducer;
