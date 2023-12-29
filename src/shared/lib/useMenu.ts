import React from 'react';

export const useMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  function close() {
    setAnchorEl(null);
  }
  function open(e: React.MouseEvent<HTMLElement>) {
    setAnchorEl(e.currentTarget);
  }
  return {
    anchorEl,
    close,
    open,
  };
};
