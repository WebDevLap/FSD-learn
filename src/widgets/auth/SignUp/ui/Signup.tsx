import {
  Alert,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Snackbar,
  TextField,
} from '@mui/material';
import React from 'react';
import { useAppDispatch, useAppSelector } from '@app/store';
import { useInput } from '@shared/lib';
import { useSnackbar } from '@shared/lib';
import { createUser, setOpen } from '../model/signupSlice';

export const Signup = () => {
  const email = useInput('', {
    minWidth: 4,
    maxWidth: 30,
    isEmail: true,
  });
  const password = useInput('', {
    minWidth: 4,
    maxWidth: 30,
  });
  const name = useInput('', { minWidth: 4, maxWidth: 25 });
  const avatar = useInput('', {});

  const snack = useSnackbar();
  const firstRenderForStatus = React.useRef<boolean>(false);
  const { status, errorText, isOpen } = useAppSelector((state) => state.signup);
  const dispatch = useAppDispatch();

  async function onSubmit() {
    dispatch(
      createUser({
        name: name.value,
        avatar: avatar.value,
        password: password.value,
        email: email.value,
      }),
    );
    dialogClose();
  }
  function dialogClose() {
    dispatch(setOpen(false));
  }

  React.useEffect(() => {
    if (!firstRenderForStatus.current) {
      firstRenderForStatus.current = true;
      return;
    }
    if (status === 'rejected' || status === 'fulfied') {
      snack.setSeverity(status === 'fulfied' ? 'success' : 'error');
      snack.setText(status === 'fulfied' ? 'Аккаунт успешно создан' : errorText);
      snack.setIsOpen(true);
    }
  }, [status]);

  return (
    <>
      <Dialog open={isOpen} fullWidth maxWidth="xs" onClose={dialogClose}>
        <DialogTitle>Log In</DialogTitle>
        <DialogContent>
          <DialogContentText paragraph>Log in to use this app</DialogContentText>
          <TextField
            value={name.value}
            {...name.handlers}
            helperText={<Box sx={{ minHeight: 20, mb: 1 }}>{name.errorText}</Box>}
            error={name.isShowError}
            fullWidth
            label="Input nickname"
          />
          <TextField
            value={email.value}
            {...email.handlers}
            error={email.isShowError}
            helperText={<Box sx={{ minHeight: 20, mb: 1 }}>{email.errorText}</Box>}
            fullWidth
            label="Input your email"
          />
          <TextField
            value={password.value}
            {...password.handlers}
            helperText={<Box sx={{ minHeight: 20, mb: 1 }}>{password.errorText}</Box>}
            error={password.isShowError}
            fullWidth
            label="Create a password"
          />
          <TextField
            value={avatar.value}
            {...avatar.handlers}
            helperText={<Box sx={{ minHeight: 20, mb: 1 }}>{avatar.errorText}</Box>}
            error={avatar.isShowError}
            fullWidth
            label="Input avatar URL"
          />
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={dialogClose}>
            cancel
          </Button>
          <Button variant="contained" color="pink" type="submit" onClick={onSubmit}>
            submit
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar open={snack.isOpen} autoHideDuration={2000} onClose={snack.close}>
        <Alert severity={snack.severity} variant="filled">
          {snack.text}
        </Alert>
      </Snackbar>
    </>
  );
};
