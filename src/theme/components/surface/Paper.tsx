import { menuClasses } from '@mui/material';
import type { Theme, Components } from '@mui/material/styles';

const Paper: Components<Omit<Theme, 'components'>>['MuiPaper'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: theme.spacing(3.5),
      backgroundColor: theme.palette.info.lighter,
      borderRadius: Number(theme.shape.borderRadius) * 2.5,
      boxShadow: 'none',

      [`&.${menuClasses.paper}`]: {
        padding: theme.spacing(1),
        boxShadow: theme.customShadows[0],
      },
    }),
  },
};

export default Paper;
