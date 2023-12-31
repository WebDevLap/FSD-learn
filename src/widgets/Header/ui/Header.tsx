import { IMenuItem, User } from '@entities/User';
import { useLogout } from '@features/logout';
import { Logout, Menu as MenuIcon } from '@mui/icons-material';
import { AppBar, Box, Container, IconButton, Toolbar } from '@mui/material';
import React from 'react';
import LoginIcon from '@mui/icons-material/Login';
import { DrawerEl, IDrawerItem } from './Drawer';
import { setOpen as setLoginOpen } from '@widgets/auth/LogIn';
import { setOpen as setSignupOpen } from '@widgets/auth/SignUp';
import { useAppDispatch, useAppSelector } from '@app/store';
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthBtns } from './AuthBtns';
import { Logo } from './Logo';

export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const user = useAppSelector((state) => state.user.user);
  const logout = useLogout();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  function profileNavigate() {
    navigate('/profile');
  }

  const userMenuItems: IMenuItem[] = [
    {
      text: 'log out',
      Icon: Logout,
      func: logout,
    },
    {
      Icon: AccountCircleIcon,
      text: 'profile',
      func: profileNavigate,
    },
  ];

  const drawerItems: IDrawerItem[] = [
    {
      Icon: LoginIcon,
      text: 'log in',
      hideExpression: !!user,
      func: () => {
        dispatch(setLoginOpen(true));
      },
    },
    {
      Icon: SensorOccupiedIcon,
      text: 'sign up',
      hideExpression: !!user,

      func: () => {
        dispatch(setSignupOpen(true));
      },
    },
    {
      Icon: AccountCircleIcon,
      text: 'profile',
      hideExpression: !user,

      func: profileNavigate,
    },
  ];

  function drawerOpen() {
    setIsDrawerOpen(true);
  }

  return (
    <>
      <Box sx={{ height: '70px' }}>
        <AppBar>
          <Container maxWidth="lg">
            <Toolbar disableGutters>
              <Box
                sx={{
                  flexGrow: 1,
                  display: {
                    sm: 'block',
                    xs: 'none',
                  },
                }}>
                <NavLink to="/" style={{ color: 'inherit' }}>
                  <Logo />
                </NavLink>
              </Box>
              {!user ? (
                <AuthBtns
                  sx={{
                    mr: 1,
                    flexGrow: {
                      sm: 0,
                      xs: 1,
                    },
                  }}
                />
              ) : (
                <User
                  menuItems={userMenuItems}
                  user={user}
                  sx={{
                    mr: 1,
                    flexGrow: {
                      sm: 0,
                      xs: 1,
                    },
                  }}
                />
              )}

              <IconButton
                color="inherit"
                sx={{
                  ml: 1,
                }}
                onClick={drawerOpen}>
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
      <DrawerEl drawerItems={drawerItems} isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />
    </>
  );
};
