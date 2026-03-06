import { boxClasses, iconButtonClasses, inputAdornmentClasses } from '@mui/material';
import type { Theme, Components } from '@mui/material/styles';

const InputAdornment: Components<Omit<Theme, 'components'>>['MuiInputAdornment'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      color: theme.palette.neutral.dark,
      fontSize: theme.typography.h5.fontSize,
      margin: '0 !important',
      padding: 0,

      [`&.${inputAdornmentClasses.sizeSmall}`]: {
        [`& .${boxClasses.root}`]: {
          fontSize: theme.typography.h6.fontSize,
        },
      },

      [`& .${iconButtonClasses.root}`]: {
        margin: 0,
        padding: 0,
      },
    }),
    positionStart: ({ theme }) => ({
      paddingRight: theme.spacing(1),
    }),
    positionEnd: ({ theme }) => ({
      paddingRight: theme.spacing(0.5),
    }),
  },
};

export default InputAdornment;
