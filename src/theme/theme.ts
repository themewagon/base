import { createTheme } from '@mui/material/styles';
import type {} from '@mui/x-data-grid/themeAugmentation';
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
import Checkbox from './components/inputs/Checkbox';
import FilledInput from './components/inputs/FilledInput';
import FormControlLabel from './components/inputs/FormControlLabel';
import InputAdornment from './components/inputs/InputAdornment';
import InputBase from './components/inputs/InputBase';
import Select from './components/inputs/Select';
import MenuItem from './components/list/MenuItem';
import DataGrid from './components/data-grid/DataGrid';

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
    MuiMenuItem: MenuItem,
    MuiButton: Button,
    MuiButtonBase: ButtonBase,
    MuiIconButton: IconButton,
    MuiToolbar: Toolbar,
    MuiCheckbox: Checkbox,
    MuiFilledInput: FilledInput,
    MuiFormControlLabel: FormControlLabel,
    MuiInputAdornment: InputAdornment,
    MuiInputBase: InputBase,
    MuiSelect: Select,
    MuiDataGrid: DataGrid,
    MuiCssBaseline: CssBaseline,
  },
});
