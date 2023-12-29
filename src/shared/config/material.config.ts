import { createTheme } from '@mui/material';
import { pink } from '@mui/material/colors';

//________________CUSTOM_PALETTE_____________________
declare module '@mui/material/styles' {
  interface Palette {
    pink: Palette['primary'];
  }

  interface PaletteOptions {
    pink?: PaletteOptions['primary'];
  }
}
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    pink: true;
  }
}
//________________CUSTOM_PALETTE_END_____________________

export const theme = createTheme({
  palette: {
    pink: {
      main: pink[500],
      light: pink[300],
      dark: pink[700],
      contrastText: '#fff'
    },
  },
});
