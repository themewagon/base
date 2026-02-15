import type { Theme, Components } from '@mui/material/styles';

const Card: Components<Omit<Theme, 'components'>>['MuiCard'] = {
  styleOverrides: {
    root: {
      padding: 0,
    },
  },
};

export default Card;
