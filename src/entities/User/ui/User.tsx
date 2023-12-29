import { useAppSelector } from '@app/store';
import { Delete } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  SvgIconTypeMap,
  Typography,
} from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { useMenu } from '@shared/lib';
import { setOpen as setLoginOpen } from '@widgets/auth/LogIn';
import { setOpen as setSignupOpen } from '@widgets/auth/SignUp';
import React from 'react';
import { useDispatch } from 'react-redux';

interface IMenuItem {
  Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
  text: string;
  func: () => any;
}

export const User = ({ menuItems }: { menuItems: IMenuItem[] }) => {
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const menu = useMenu();

  function onLoginClick() {
    dispatch(setLoginOpen(true));
  }
  function onSignupClick() {
    dispatch(setSignupOpen(true));
  }

  if (!user)
    return (
      <Box>
        <Button variant="outlined" color="inherit" sx={{ mr: 2 }} onClick={onLoginClick}>
          log in
        </Button>
        <Button variant="contained" color="pink" onClick={onSignupClick}>
          sign up
        </Button>
      </Box>
    );

  return (
    <>
      <Box
        sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, cursor: 'pointer' }}
        onClick={menu.open}>
        <Avatar src={user.avatar} alt={user.name} />
        <Typography>{user.name}</Typography>
      </Box>
      <Menu open={!!menu.anchorEl} anchorEl={menu.anchorEl} onClose={menu.close}>
        <MenuList disablePadding sx={{ outline: 'none' }}>
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              onClick={() => {
                item.func();
                menu.close();
              }}>
              <ListItemIcon>
                <item.Icon />
              </ListItemIcon>
              <ListItemText>{item.text}</ListItemText>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};
