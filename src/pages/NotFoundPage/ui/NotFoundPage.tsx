import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import BrowserNotSupportedIcon from '@mui/icons-material/BrowserNotSupported';
import { NavLink } from 'react-router-dom';
export const NotFoundPage = () => {
  return (
    <Container maxWidth="lg">
      <Typography align="center" variant="h3">
        <BrowserNotSupportedIcon fontSize={'large'} /> Страница не найдена
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px' }}>
        <img
          src="https://images.vector-images.com/clp2/180394/clp4114939.jpg"
          style={{ maxWidth: 400, width: '100%', borderRadius: '15px' }}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <NavLink to="/">
          <Button variant="contained" color="pink">
            Перейти на главную
          </Button>
        </NavLink>
      </div>
    </Container>
  );
};
