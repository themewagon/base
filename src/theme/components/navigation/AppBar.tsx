import type { Theme, Components } from '@mui/material/styles';

const AppBar: Components<Omit<Theme, 'components'>>['MuiAppBar'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: 0,
      borderRadius: 0,
      backgroundColor: theme.palette.transparent.info.main,
      backdropFilter: 'blur(10px)',
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      zIndex: 1200,
    }),
  },
};

export default AppBar;
