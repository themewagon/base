import { createTheme } from '@mui/material/styles';
import palette from './palette';
import typography from './typography';
import customShadows from './shadows';

import Button from './components/buttons/Button';
import ButtonBase from './components/buttons/ButtonBase';
import IconButton from './components/buttons/IconButton';
import Toolbar from './components/buttons/Toolbar';

import List from './components/list/List';
import ListItemButton from './components/list/ListItemButton';
import ListItemIcon from './components/list/ListItemIcon';
import ListItemText from './components/list/ListItemText';
import MenuItem from './components/list/MenuItem';

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
    MuiList: List,
    MuiListItemButton: ListItemButton,
    MuiListItemIcon: ListItemIcon,
    MuiListItemText: ListItemText,
    MuiMenuItem: MenuItem,
    
    MuiButton: Button,
    MuiButtonBase: ButtonBase,
    MuiIconButton: IconButton,
    MuiToolbar: Toolbar,

    MuiCssBaseline: CssBaseline,
  },
});
