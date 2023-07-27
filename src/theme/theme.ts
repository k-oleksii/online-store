import { EnumBreakpoints } from '@/types/index.js';
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    body3: React.CSSProperties;
    nameCards: React.CSSProperties;
    nav: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    body3?: React.CSSProperties;
    nameCards?: React.CSSProperties;
    nav?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body3: true;
    nameCards: true;
    nav: true;
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
    body1: {
      fontSize: '20px',
      lineHeight: '24px',
    },
    body2: {
      fontSize: '14px',
      lineHeight: '20px',
    },
    body3: {
      fontSize: 8,
      lineHeight: '11px',
    },
    nameCards: {
      fontSize: '45px',
      lineHeight: '54px',
    },
    nav: {
      [`@media (min-width: ${EnumBreakpoints.tabletPortrait})`]: {
        fontSize: '18px',
        lineHeight: '24px',
      },
      [`@media (min-width: ${EnumBreakpoints.desktopMedium})`]: {
        fontSize: '26px',
        lineHeight: '30px',
      },
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-root': {
            padding: '0 32px',

            '& fieldset': {
              borderColor: '#8083ff',
              borderRadius: '24px',

              [`@media (max-width: ${EnumBreakpoints.tablet})`]: {
                borderRadius: '16px',
              },
            },

            '&:hover fieldset': {
              borderColor: '#8083ff',
            },

            '&.Mui-focused fieldset': {
              borderWidth: '1px',
              borderColor: '#8083ff',
            },

            '& .MuiInputAdornment-root': {
              marginRight: '24px',

              '& svg': {
                width: '32px',
                height: '32px',
                stroke: '#878d99',
              },

              [`@media (max-width: ${EnumBreakpoints.tablet})`]: {
                marginRight: '8px',

                '& svg': {
                  width: '24px',
                  height: '24px',
                },
              },
            },

            '& .MuiInputBase-input': {
              boxSizing: 'border-box',
              height: '64px',
              padding: '0',
              fontSize: '20px',
              color: '#212121',

              '&::placeholder': {
                color: '#878d99',
                opacity: '1',
              },

              [`@media (max-width: ${EnumBreakpoints.tablet})`]: {
                height: '40px',
                fontSize: '15px',
              },
            },
          },
        },
      },
    },
  },
});

export default theme;
