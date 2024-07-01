/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '300px',
      sm: '500px',
      md: '700px',
      lg: '900px',
      xl: '1200px',
      '2xl': '1500px',
    },
    fontFamily: {
      roboto: ['Roboto'],
    },
    extend: {
      colors: {
        primary01: '#f3f3f3',
        primary02: '#222333',
        primary03: '#2c2c40',
        primary04: '#f6f5fa',
        primary05: '#2c2c40',
        candlePurple: '#696bff',
        filtersHeader: '#1A1B28',
      },
      gridTemplateColumns: {
        4: 'repeat(4, minmax(100px, 1fr))',
        chips: 'repeat(auto-fill, minmax(70px, 1fr))',
        footer: '200px minmax(900px, 1fr) 100px',
      },
    },
  },
  plugins: [],
};
