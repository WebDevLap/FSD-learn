import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './store.ts';
import { ThemeProvider as MaterialThemeProvider, Paper } from '@mui/material';
import { theme } from '@shared/config/material.config.ts';
import { HashRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ReduxProvider store={store}>
    <MaterialThemeProvider theme={theme}>
      <HashRouter>
        <App />
      </HashRouter>
    </MaterialThemeProvider>
  </ReduxProvider>,
);
