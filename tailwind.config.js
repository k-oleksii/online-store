/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      main: {
        white: '#fff',
        black: '#212121',
        red: '#dd2255',
        darkRed: '#c23158',
        transparent: 'transparent',
      },

      secondary: {
        bg: '#f8faff',
        cardBg: '#ffffff',
        gray: '#878d99',
        blue: '#8083ff',
        green: '#008e24',
        yellow: '#ffd700',
      },
    },

    fontFamily: {
      bruno: ['"Bruno Ace", cursive'],
      lato: ['Lato, serif'],
    },

    extend: {
      maxWidth: {
        // '5xl': '1024px',
        // '6xl': '1280px',
        '7xl': '1420px',
      },
    },
  },
  plugins: [],
};
