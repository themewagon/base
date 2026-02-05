import { createTheme } from '@mui/material/styles';
import palette from './palette';
import typography from './typography';
import customShadows from './shadows';
import CssBaseline from './components/utils/CssBaseline';

export const theme = createTheme({
  typography,
  palette,
  customShadows,
  breakpoints: {
    values: {
      xs: 0,
      sm: 580,
      md: 860,
      lg: 1160,
      xl: 1420,
    },
  },
  components: {
    MuiCssBaseline: CssBaseline,
  },
});
