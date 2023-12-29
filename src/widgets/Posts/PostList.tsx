import React from 'react';
import { Container, Grid } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@app/store';
import { PostLoading } from './PostLoading';
import { useThrottle } from '@shared/lib/useThrottle';
import { Post, getPosts } from '@entities/Posts';

export const PostList = () => {
  const { posts, isPostsFinished } = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (isPostsFinished) return document.removeEventListener('scroll', scrollHandler);
    document.addEventListener('scroll', scrollHandler);

    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, [isPostsFinished]);

  const throttle = useThrottle();

  function scrollHandler(e: any) {
    if (isPostsFinished) return;
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      150
    ) {
      throttle(() => {
        dispatch(getPosts());
      }, 1000);
    }
  }
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        {posts.map((post, index) => (
          <Grid item xs={8} sm={8} md={6} lg={4} xl={3} key={post.id}>
            <Post {...post} />
          </Grid>
        ))}
      </Grid>
      <PostLoading isLoading={!isPostsFinished} />
    </Container>
  );
};
