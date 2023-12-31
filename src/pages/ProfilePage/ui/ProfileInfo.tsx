import { Box, Typography } from '@mui/material';
import React from 'react';

export const ProfileInfo = ({
  posts,
  followers,
  following,
}: {
  posts: string;
  followers: string;
  following: string;
}) => {
  return (
    <>
      <Box>
        <Typography variant="h5" align="center">
          {posts}
        </Typography>
        <Typography variant="h6">posts</Typography>
      </Box>
      <Box>
        <Typography variant="h5" align="center">
          {followers}
        </Typography>
        <Typography variant="h6">followers</Typography>
      </Box>
      <Box>
        <Typography variant="h5" align="center">
          {following}
        </Typography>
        <Typography variant="h6">following</Typography>
      </Box>
    </>
  );
};
