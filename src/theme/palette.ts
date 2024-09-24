import { PaletteColorOptions, PaletteOptions } from '@mui/material/styles';
import {
  white,
  gray,
  darkblue,
  violet,
  blue,
  cyan,
  tomato,
  red,
  green,
  yellow,
  transparentGreen,
  transparentRed,
  transparentYellow,
  purple,
} from './colors';

declare module '@mui/material/styles' {
  interface PaletteOptions {
    neutral?: PaletteColorOptions;
    transparent?: {
      success: PaletteColorOptions;
      warning: PaletteColorOptions;
      error: PaletteColorOptions;
    };
    gradients?: {
      primary: PaletteColorOptions;
      secondary?: PaletteColorOptions;
    };
  }
  interface SimplePaletteColorOptions {
    lighter?: string;
    darker?: string;
    state?: string;
  }
  interface Palette {
    neutral: PaletteColor;
    gradients: {
      primary: PaletteColor;
      secondary: PaletteColor;
    };
    transparent: {
      success: PaletteColor;
      warning: PaletteColor;
      error: PaletteColor;
    };
  }
  interface PaletteColor {
    lighter: string;
    darker: string;
    state: string;
  }
}

const palette: PaletteOptions = {
  neutral: {
    light: gray[100],
    main: gray[500],
  },
  primary: {
    light: blue[500],
    main: violet[500],
  },
  secondary: {
    light: violet[300],
    main: cyan[500],
  },
  info: {
    light: white[100],
    main: white[200],
    dark: darkblue[500],
  },
  success: {
    main: green[500],
  },
  warning: {
    main: yellow[500],
  },
  error: {
    light: tomato[500],
    main: red[500],
  },
  text: {
    primary: darkblue[500],
    secondary: gray[800],
    disabled: gray[500],
  },
  gradients: {
    primary: {
      main: cyan[300],
      state: purple[500],
    },
    secondary: {
      main: violet[100],
      state: white[100],
    },
  },
  transparent: {
    success: {
      main: transparentGreen[500],
    },
    warning: {
      main: transparentYellow[500],
    },
    error: {
      main: transparentRed[500],
    },
  },
};

export default palette;
