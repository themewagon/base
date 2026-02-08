import type { Theme, Components } from '@mui/material/styles';

const ListItemIcon: Components<Omit<Theme, 'components'>>['MuiListItemIcon'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      minWidth: '0 !important',
      marginRight: 0,
      display: 'flex',
      justifyContent: 'center',
      color: theme.palette.text.disabled,
      fontSize: theme.typography.h4.fontSize,
    }),
  },
};

export default ListItemIcon;
