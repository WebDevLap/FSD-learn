import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IUser } from '@shared/api';
import { getUserFromLS } from '../utils/getUserFromLS';

interface IState {
  user: IUser | null;
}

const initialState: IState = {
  user: getUserFromLS(),
};

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser| null>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = UserSlice.actions;
export const userSlice = UserSlice.reducer;
