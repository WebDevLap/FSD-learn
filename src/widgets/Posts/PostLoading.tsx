import { Box, CircularProgress } from '@mui/material';
import React from 'react';

export const PostLoading = ({ isLoading }: { isLoading: boolean }) => {
  if (isLoading)
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', height: 140, alignItems: 'center' }}>
        <CircularProgress size={100} color="pink" />
      </Box>
    );

  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'center', height: 140, alignItems: 'center' }}></Box>
  );
};
