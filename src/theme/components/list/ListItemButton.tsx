import type { Theme, Components } from '@mui/material/styles';

const ListItemButton: Components<Omit<Theme, 'components'>>['MuiListItemButton'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      color: theme.palette.text.disabled,
      marginBottom: theme.spacing(1),
      padding: theme.spacing(0.75, 2.5),
      '&:hover': { backgroundColor: theme.palette.info.main },
    }),
  },
};

export default ListItemButton;
