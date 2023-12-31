import React from 'react';
import { Container, Grid } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@app/store';
import { PostLoading } from './PostLoading';
import { Post, getPosts } from '@entities/Posts';
import { useLazyLoadingScroll } from '../lib/useLazyLoadingScroll';

export const PostList = () => {
  const { posts, isPostsFinished } = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();
  const lazyLoadingScroll = useLazyLoadingScroll();

  React.useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  React.useEffect(() => {
    // async thunks
    dispatch(getPosts());
  }, []);


  function scrollHandler(e: any) {
    if (isPostsFinished) return;
    lazyLoadingScroll(e, () => dispatch(getPosts()));
  }
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        {posts.map((post, index) => (
          <Grid item xs={12} sm={10} md={6} lg={4} xl={3} key={post.id}>
            <Post {...post} />
          </Grid>
        ))}
      </Grid>
      <PostLoading isLoading={!isPostsFinished} />
    </Container>
  );
};
