/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors:{
        'COLOR-LINE': '#363636',
        'BG-HEADER': 'rgba(0, 0, 0, 0.10)',
        'BG-DESCRIPTION': 'rgba(163, 117, 545, .1)',
        'BG-IMG': 'green-500',

        'TEXT-COLOR-900': '#FFFFFF',

        'GIT-CARD1': '#00ff00',
        'GIT-CARD2': '#009900',

        'BG-DESCRIPTION-HOVER': 'rgba(163, 117, 545, .2)',
      },

      backgroundImage: {
        'MOBILE-PREVIEW': "url('./src/assets/previewProjects/phoneBG.png')",
      },

      fontFamily: {
        'ROBOTO': 'Roboto, sans-serif'
      },

      height:{
        '1': '1rem',
        '2': '2rem',
        '3': '3rem',
        '4': '4rem',
        '5': '5rem',
        '6': '6rem',
        '7': '7rem',
        '8': '8rem',
        '9': '9rem',
        '10': '10rem',
        '15': '15rem',
        '25': '25rem',
        '31': '31rem',
        '36': '36rem',
        '60': '60rem',
        '70': '70rem',
      },

      width:{
        '1': '1rem',
        '2': '2rem',
        '3': '3rem',
        '4': '4rem',
        '4.3': '4.3rem',
        '5': '5rem',
        '6': '6rem',
        '7': '7rem',
        '8': '8rem',
        '9': '9rem',
        '20': '20rem',
        '40': '40rem',
        '60': '60rem',
        '70': '70rem',
      },

      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },

      margin: {
        '0.5': '0.5rem',
        '1': '1rem',
        '2': '2rem',
        '3': '3rem',
        '4': '4rem',
        '5': '5rem',
        '6': '6rem',
        '7': '7rem',
        '8': '8rem',
        '9': '9rem',
        '15': '15rem',
      },

      screens: {
        'tablet': '800px',
        'desktop': '1020px',
      },

      opacity: {
        '0': '0',
        '1': '1',
      },

    },
  },
  plugins: [],
}