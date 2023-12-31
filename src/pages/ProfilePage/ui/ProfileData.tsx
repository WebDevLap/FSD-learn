import { Box, Typography, Button } from '@mui/material';
import React from 'react';
import EditIcon from '@mui/icons-material/Edit';

export const ProfileData = ({ name, avatar }: { name: string; avatar: string }) => {
  return (
    <>
      <Box
        sx={{
          width: {
            md: 300,
            sm: 200,
          },
          mb: 1,
        }}>
        <img src={avatar} alt={name} style={{ width: '100%' }} />
      </Box>
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
        {name}
      </Typography>
      <Button color="pink" startIcon={<EditIcon />} variant="contained">
        Edit profile
      </Button>
    </>
  );
};
