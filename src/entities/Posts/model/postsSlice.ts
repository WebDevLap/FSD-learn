import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IPost, homeAxios } from '../../../shared/api';
import { StatusType } from '@shared/types';



interface IState {
  status: StatusType;
  posts: IPost[];
  isPostsFinished: boolean;
}

const initialState: IState = {
  status: 'pending',
  posts: [],
  isPostsFinished: false,
};

let page = 1;
let limit = 5;

export const getPosts = createAsyncThunk('posts/getPosts', async function () {
  const posts = await homeAxios.get<IPost[]>(`/posts?limit=${limit}&page=${page}`);

  return posts.data;
});

const PostsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setStatus: (state, action: PayloadAction<StatusType>) => {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
      state.status = 'pending';
    }),
      builder.addCase(getPosts.fulfilled, (state, action) => {
        state.status = 'fulfied';
        state.posts = [...state.posts, ...action.payload];
        page++;
        if (action.payload.length < 1) {
          state.isPostsFinished = true;
        }
      }),
      builder.addCase(getPosts.rejected, (state) => {
        state.status = 'rejected';
      });
  },
});

export const { setStatus } = PostsSlice.actions;
export const postsSlice = PostsSlice.reducer;
