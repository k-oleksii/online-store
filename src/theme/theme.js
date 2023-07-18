import { createTheme } from '@mui/material/styles';
import tailwindConfig from '../../tailwind.config.js';

const { fontFamily } = tailwindConfig.theme;

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: fontFamily.bruno,
      fontSize: '64px',
      lineHeight: '72px',
    },
    h2: {
      fontSize: '34px',
      lineHeight: '38px',
    },
    h3: {
      fontSize: '26px',
      lineHeight: '30px',
    },
    h4: {
      fontSize: '20px',
      lineHeight: '26px',
    },
    button: {
      fontSize: '26px',
      fontWeight: '700',
      lineHeight: '32px',
    },
    bodyM: {
      fontSize: '20px',
      lineHeight: '24px',
    },
    bodyS: {
      fontSize: '14px',
      lineHeight: '20px',
    },
    bodyXS: {
      fontSize: '8px',
      lineHeight: '11px',
    },
    nameCards: {
      fontSize: '45px',
      lineHeight: '54px',
    },
    nav: {
      fontSize: '26px',
      lineHeight: '30px',
    },
  },
});

export default theme;
