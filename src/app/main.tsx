import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './store.ts';
import { ThemeProvider as MaterialThemeProvider } from "@mui/material";
import { theme } from '@shared/config/material.config.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ReduxProvider store={store}>
    <MaterialThemeProvider theme={theme}>
    <App />
    </MaterialThemeProvider>
  </ReduxProvider>,
);
