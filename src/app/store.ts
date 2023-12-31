import { postsSlice } from '@entities/Posts';
import { userPostsSlice } from '@entities/Posts/model/userPostsSlice';
import { userSlice } from '@entities/User';
import { configureStore } from '@reduxjs/toolkit';
import { loginSlice } from '@widgets/auth/LogIn/model/loginSlice';
import { signupSlice } from '@widgets/auth/SignUp';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    posts: postsSlice,
    user: userSlice,
    userPosts: userPostsSlice,
    login: loginSlice,
    signup: signupSlice,
  },
});

export type RootType = ReturnType<typeof store.getState>;

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootType> = useSelector;
