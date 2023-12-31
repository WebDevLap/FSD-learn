import { useAppDispatch } from '@app/store';
import { Box, Button } from '@mui/material';
import { setOpen as setLoginOpen } from '@widgets/auth/LogIn';
import { setOpen as setSignupOpen } from '@widgets/auth/SignUp';
import React from 'react';

export const AuthBtns = (props: any) => {
  const dispatch = useAppDispatch();

  function onLoginClick() {
    dispatch(setLoginOpen(true));
  }
  function onSignupClick() {
    dispatch(setSignupOpen(true));
  }
  return (
    <Box {...props}>
      <Button variant="outlined" color="inherit" sx={{ mr: 2 }} onClick={onLoginClick}>
        log in
      </Button>
      <Button variant="contained" color="pink" onClick={onSignupClick}>
        sign up
      </Button>
    </Box>
  );
};
