import { createTheme } from '@mui/material/styles';
import palette from './palette';
import typography from './typography';
import customShadows from './shadows';
import Stack from './components/layout/Stack';
import Drawer from './components/navigation/Drawer';
import Paper from './components/surfaces/Paper';
import List from './components/list/List';
import ListItemButton from './components/list/ListItemButton';
import CssBaseline from './components/utils/CssBaseline';
import ListItemIcon from './components/list/ListItemIcon';
import ListItemText from './components/list/ListItemText';
import Link from './components/navigation/Link';
import Button from './components/buttons/Button';
import IconButton from './components/buttons/IconButton';
import Toolbar from './components/buttons/Toolbar';
import ButtonBase from './components/buttons/ButtonBase';

export const theme = createTheme({
  typography,
  palette,
  customShadows,
  components: {
    MuiStack: Stack,
    MuiDrawer: Drawer,
    MuiPaper: Paper,
    MuiList: List,
    MuiLink: Link,
    MuiListItemButton: ListItemButton,
    MuiListItemIcon: ListItemIcon,
    MuiListItemText: ListItemText,
    MuiButton: Button,
    MuiButtonBase: ButtonBase,
    MuiIconButton: IconButton,
    MuiToolbar: Toolbar,
    MuiCssBaseline: CssBaseline,
  },
});
