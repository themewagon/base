import type { Theme, Components } from '@mui/material/styles';

const FormControlLabel: Components<Omit<Theme, 'components'>>['MuiFormControlLabel'] = {
  styleOverrides: {
    root: {
      marginLeft: 0,
    },
    label: ({ theme }) => ({
      marginLeft: 0,
      letterSpacing: 0.25,
      color: theme.palette.text.primary,
      fontSize: theme.typography.body1.fontSize,
      userSelect: 'none',
    }),
  },
};

export default FormControlLabel;
