/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      main: {
        white: '#fff',
        black: '#212121',
        red: '#dd2255',
        transparent: 'transparent',
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
      },
    },
    screens: {
      sm: '100%',
      '2xl': '1648px',
    },
    extend: {},
  },
  plugins: [],
};
