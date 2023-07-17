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
    extend: {},
  },
  plugins: [],
};
