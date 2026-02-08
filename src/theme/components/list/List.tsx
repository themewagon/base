import type { Theme, Components } from '@mui/material/styles';

const List: Components<Omit<Theme, 'components'>>['MuiList'] = {
  styleOverrides: {
    root: {
      padding: 0,
    },
  },
};

export default List;
