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
import { getUser, setOpen } from '../model/loginSlice';
import { useAppDispatch, useAppSelector } from '@app/store';
import { useInput } from '@shared/lib';
import { useSnackbar } from '@shared/lib';

export const Login = () => {
  const email = useInput('', {
    minWidth: 4,
    maxWidth: 30,
    isEmail: true,
  });
  const password = useInput('', {
    minWidth: 4,
    maxWidth: 30,
  });
  const snack = useSnackbar();
  const dispatch = useAppDispatch();

  const firstRenderForStatus = React.useRef<boolean>(false);
  const { status, errorText, isOpen } = useAppSelector((state) => state.login);
  const [isValid, setIsValid] = React.useState(false);

  async function onSubmit() {
    dispatch(getUser({ email: email.value, password: password.value }));
  }
  function dialogClose() {
    dispatch(setOpen(false));
  }

  React.useEffect(() => {
    if (email.isValid && password.isValid) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [email.isValid, password.isValid]);

  React.useEffect(() => {
    if (!firstRenderForStatus.current) {
      firstRenderForStatus.current = true;
      return;
    }
    if (status === 'rejected' || status === 'fulfied') {
      if (status === 'fulfied') {
        snack.setSeverity('success');
        snack.setText('Успешный вход в аккаунт');
        email.clear();
        password.clear();
      } else {
        snack.setText(errorText);
        snack.setSeverity('error');
      }

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
            label="Input your password"
          />
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={dialogClose}>
            cancel
          </Button>
          <Button
            variant="contained"
            color="pink"
            type="submit"
            onClick={onSubmit}
            disabled={!isValid}>
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
