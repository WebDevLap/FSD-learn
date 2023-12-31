import React from 'react';
import { useLazyLoadingScroll } from '../lib/useLazyLoadingScroll';
import { getUserPosts } from '@entities/Posts/model/userPostsSlice';
import { useAppDispatch, useAppSelector } from '@app/store';
import { Post } from '@entities/Posts';
import { User } from '@entities/User';
import { PostLoading } from './PostLoading';
import { Grid } from '@mui/material';

export const MyPosts = () => {
  const lazyLoadingScroll = useLazyLoadingScroll();
  const dispatch = useAppDispatch();
  const { isFinished, posts } = useAppSelector((state) => state.userPosts);
  const user = useAppSelector((state) => state.user.user);
  const id = user ? user.id : '-1';

  React.useEffect(() => {
    dispatch(getUserPosts(id));
  }, []);

  function scrollHandler(e: any) {
    if (isFinished) return;
    lazyLoadingScroll(e, () => dispatch(getUserPosts(id)));
  }

  React.useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <div>
      <Grid container spacing={2}>
        {posts.map((post, index) => (
          <Grid item xs={12} sm={10} md={6} lg={4} xl={3} key={post.id}>
            <Post {...post} key={post.id} />
          </Grid>
        ))}
      </Grid>
      <PostLoading isLoading={!isFinished} />
    </div>
  );
};
