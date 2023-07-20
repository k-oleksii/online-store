/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      main: {
        black: '#212121',
        red: '#dd2255',
      },

      secondary: {
        bg: '#f8faff',
        cardBg: '#ffffff',
        gray: '#878d99',
        blue: '#8083ff',
        green: '#008e24',
      },
    },

    fontFamily: {
      bruno: ['"Bruno Ace", cursive'],
      lato: ['Lato, serif'],
    },

    container: {
      padding: {
        DEFAULT: '24px',
        xl: '0',
        '2xl': '0',
      },
    },
    screens: {
      sm: '100%',
      md: '100%',
      lg: '1024px',
      xl: '1300px',
      '2xl': '1600px',
    },
    extend: {},
  },
  plugins: [],
};
