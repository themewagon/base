import type {} from '@mui/x-data-grid/themeAugmentation';
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

import Checkbox from './components/input/Checkbox';
import FilledInput from './components/input/FilledInput';
import FormContralLabel from './components/input/FormControlLabel';
import InputAdornment from './components/input/InputAdornment';
import InputBase from './components/input/InputBase';
import InputLabel from './components/input/InputLabel';
import OutlinedInput from './components/input/OutlinedInput';
import Select from './components/input/Select';

import Stack from './components/layout/Stack';
import Paper from './components/surface/Paper';

import Card from './components/card/Card';
import CardContent from './components/card/CardContent';
import CardMedia from './components/card/CardMedia';
import AppBar from './components/navigation/AppBar';
import Drawer from './components/navigation/Drawer';
import Link from './components/navigation/Link';
import PaginationItem from './components/pagination/PaginationItem';

import Chip from './components/data-display/Chip';
import Divider from './components/data-display/Divider';
import Rating from './components/data-display/Rating';
import DataGrid from './components/data-grid/DataGrid';
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
    MuiButton: Button,
    MuiButtonBase: ButtonBase,
    MuiIconButton: IconButton,
    MuiToolbar: Toolbar,

    MuiList: List,
    MuiListItemButton: ListItemButton,
    MuiListItemIcon: ListItemIcon,
    MuiListItemText: ListItemText,
    MuiMenuItem: MenuItem,

    MuiCheckbox: Checkbox,
    MuiFilledInput: FilledInput,
    MuiFormControlLabel: FormContralLabel,
    MuiInputAdornment: InputAdornment,
    MuiInputBase: InputBase,
    MuiInputLabel: InputLabel,
    MuiOutlinedInput: OutlinedInput,
    MuiSelect: Select,

    MuiCard: Card,
    MuiCardContent: CardContent,
    MuiCardMedia: CardMedia,

    MuiLink: Link,
    MuiAppBar: AppBar,
    MuiDrawer: Drawer,
    MuiPaginationItem: PaginationItem,

    MuiStack: Stack,
    MuiPaper: Paper,

    MuiChip: Chip,
    MuiDivider: Divider,
    MuiRating: Rating,
    MuiDataGrid: DataGrid,
    MuiCssBaseline: CssBaseline,
  },
});
