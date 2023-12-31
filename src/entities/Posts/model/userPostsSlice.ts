import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IPost, homeAxios } from '@shared/api';
import { StatusType } from '@shared/types';

interface IState {
  status: StatusType;
  posts: IPost[];
  isFinished: boolean;
}

const initialState: IState = {
  status: 'fulfied',
  posts: [],
  isFinished: false,
};

let page = 1;
let limit = 5;

export const getUserPosts = createAsyncThunk('userPosts/getUserPosts', async function (id: string) {
  const posts = await homeAxios.get<IPost[]>(`/users/${id}/posts?limit=${limit}&page=${page}`);
  return posts.data;
});

const UserPostsSlice = createSlice({
  name: 'userPosts',
  initialState,
  reducers: {
    setStatus: (state, action: PayloadAction<StatusType>) => {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserPosts.pending, (state) => {
      state.status = 'pending';
    }),
      builder.addCase(getUserPosts.fulfilled, (state, action) => {
        state.status = 'fulfied';
        state.posts = [...state.posts, ...action.payload];
        page++;
        if (action.payload.length < 1) {
          state.isFinished = true;
        }
      }),
      builder.addCase(getUserPosts.rejected, (state, payload) => {
        state.status = 'rejected';
        state.isFinished = true;
      });
  },
});

export const { setStatus } = UserPostsSlice.actions;
export const userPostsSlice = UserPostsSlice.reducer;
