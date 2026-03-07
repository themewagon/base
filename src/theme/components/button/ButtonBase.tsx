import type { Theme, Components } from '@mui/material/styles';

const ButtonBase: Components<Omit<Theme, 'components'>>['MuiButtonBase'] = {
  defaultProps: {
    disableRipple: false,
  },
};

export default ButtonBase;
