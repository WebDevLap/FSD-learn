import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SvgIconTypeMap,
} from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import React from 'react';

export interface IDrawerItem {
  Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
  text: string;
  func: () => any;
  hideExpression?: boolean;
}

export const DrawerEl = ({
  drawerItems,
  isOpen,
  setIsOpen,
}: {
  drawerItems: IDrawerItem[];
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  function drawerClose() {
    setIsOpen(false);
  }

  return (
    <Drawer open={isOpen} anchor="right" onClose={drawerClose}>
      <List>
        {drawerItems.map((item, index) => {
          if (item.hideExpression) return;
          return (
            <ListItem
              disablePadding
              onClick={() => {
                item.func();
                drawerClose();
              }}
              key={index}>
              <ListItemButton>
                <ListItemIcon>
                  <item.Icon />
                </ListItemIcon>
                <ListItemText>{item.text}</ListItemText>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};
