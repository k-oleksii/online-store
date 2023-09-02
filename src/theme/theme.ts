import { EnumBreakpoints } from '@/types/index.js';
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypographyVariantsOptions {
    body3?: React.CSSProperties;
    nameCards?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body3: true;
    nameCards: true;
  }
}

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: parseInt(EnumBreakpoints.mobile, 10),
      md: parseInt(EnumBreakpoints.tablet, 10),
      lg: parseInt(EnumBreakpoints.desktopSmall, 10),
      xl: parseInt(EnumBreakpoints.desktopMedium, 10),
    },
  },
  typography: {
    fontFamily: 'Lato, serif',

    h1: {
      fontFamily: '"Bruno Ace", cursive',
      fontSize: '32px',
      lineHeight: '39px',

      [`@media (max-width: ${EnumBreakpoints.tabletPortrait})`]: {
        fontSize: '24px',
        lineHeight: '30x',
      },
    },
    h2: {
      fontSize: '24px',
      lineHeight: '27px',
    },
    h3: {
      fontSize: '20px',
      lineHeight: '24px',
    },
    button: {
      fontSize: '16px',
      fontWeight: '700',
      lineHeight: '32px',
    },
    body1: {
      fontSize: '16px',
      lineHeight: '25px',
    },
    body2: {
      fontSize: '14px',
      lineHeight: '20px',
    },
    body3: {
      fontSize: '10px',
      lineHeight: '14px',
    },
    nameCards: {
      fontSize: '45px',
      lineHeight: '54px',
    },
  },
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          '&:before, &:after': {
            display: 'none',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          height: '40px',
          padding: '0 24px',
          border: '1px solid #878d99',
          borderRadius: '12px',

          '& fieldset': {
            top: '0',
            padding: '0',
            border: 'none',
            borderRadius: '0',
          },

          '& input': {
            padding: '0',

            '&::placeholder': {
              color: '#878d99',
            },
          },
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          minWidth: '24px',
          height: '24px',
          marginRight: '8px',
          stroke: '#878d99',

          '& svg': {
            width: '100%',
            height: '100%',
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          // borderRadius: '5px',
        },
        // sizeSmall: {
        //   borderRadius: '10px',
        // },
        sizeLarge: {
          borderRadius: '5px',
        },
        contained: {
          color: '#fff',
          backgroundColor: '#212121',
          borderRadius: '12px',
          boxShadow: 'none',

          '&:hover': {
            backgroundColor: '#dd2255',
          },

          '&:active': {
            backgroundColor: '#c23158',
          },

          '&:disabled': {
            color: '#fff',
            backgroundColor: '#878d99',
          },

          // '&:focus': {
          //   outline: '4px solid #c23158',
          // },

          '&:hover, &:focus': {
            boxShadow: 'none',
          },
        },
      },
    },
  },
});

export default theme;
