import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const Drawer: Components<Omit<Theme, 'components'>>['MuiDrawer'] = {
  styleOverrides: {
    root: {
      '&:hover, &:focus': {
        '*::-webkit-scrollbar, *::-webkit-scrollbar-thumb': {
          visibility: 'visible',
        },
      },
      overflowX: 'hidden',
      whiteSpace: 'nowrap',
      flexShrink: 0,
    },
    paper: ({ theme }) => ({
      padding: 0,
      height: '100vh',
      borderRadius: 0,
      border: 0,
      borderRight: 1,
      borderStyle: 'solid',
      borderColor: theme.palette.info.main,
      backgroundColor: theme.palette.info.darker,
      boxShadow: theme.customShadows[0],
      boxSizing: 'border-box',
      overflowX: 'hidden',
    }),
  },
};

export default Drawer;
