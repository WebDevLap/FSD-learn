import React from 'react';
import { Header } from '@widgets/Header';
import { Login } from '@widgets/auth/LogIn';
import { Signup } from '@widgets/auth/SignUp/ui/Signup';
import { Paper } from '@mui/material';
import { Routers } from './Routers';

function App() {


  return (
    <Paper sx={{ minHeight: '100vh' }}>
      <Header />
      <Login />
      <Signup />
      <Routers />
    </Paper>
  );
}
export default App;
