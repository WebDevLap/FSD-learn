import { postsSlice } from '@entities/Posts';
import { userSlice } from '@entities/User';
import { configureStore } from '@reduxjs/toolkit';
import { loginSlice } from '@widgets/auth/LogIn/model/loginSlice';
import { signupSlice } from '@widgets/auth/SignUp';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    posts: postsSlice,
    user: userSlice,
    login: loginSlice,
    signup: signupSlice,
  },
});

export type RootType = ReturnType<typeof store.getState>;

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootType> = useSelector;
