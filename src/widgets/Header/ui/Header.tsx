import { User } from '@entities/User';
import { useLogout } from '@features/logout';
import { Logout, Menu as MenuIcon } from '@mui/icons-material';
import { AppBar, Box, Button, Container, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';

export const Header = () => {
  const logout = useLogout()

  return (
    <Box sx={{ height: '70px' }}>
      <AppBar>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <IconButton color="inherit" sx={{ mr: 1 }}>
              <MenuIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1 }}>
              <Button color="inherit">
                <Typography variant="h6">Web Developer</Typography>
              </Button>
            </Box>
            <User
              menuItems={[
                {
                  text: 'log out',
                  Icon: Logout,
                  func: logout,
                },
              ]}
            />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
