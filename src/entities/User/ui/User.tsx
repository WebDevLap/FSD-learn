import {
  Avatar,
  Box,
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
import { IUser } from '@shared/api';

export interface IMenuItem {
  Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
  text: string;
  func: () => any;
}

export const User = ({ menuItems, sx, user }: { menuItems: IMenuItem[]; sx: any; user: IUser }) => {
  const menu = useMenu();

  return (
    <>
      <Box
        sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, cursor: 'pointer', ...sx }}
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
