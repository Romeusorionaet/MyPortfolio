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

        // 'STACK1': 'rgba(162,159,161,0.7401032702237522)',
        // 'STACK2': 'rgba(92,92,92,1)',

      },

      // backgroundImage: {
      //   'BG-HOME': '9deg, rgba(77,155,156,1) 13%, rgba(163,148,207,1) 64%'
      // },

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
        '15': '15rem',
        '25': '25rem',
        '31': '31rem',
        '36': '36rem',
        '60': '60rem',
      },

      width:{
        '1': '1rem',
        '2': '2rem',
        '3': '3rem',
        '4': '4rem',
        '5': '5rem',
        '6': '6rem',
        '7': '7rem',
        '8': '8rem',
        '9': '9rem',
        '20': '20rem',
        '40': '40rem',
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
        '1': '1rem',
        '2': '2rem',
        '3': '3rem',
        '4': '4rem',
        '5': '5rem',
        '6': '6rem',
        '7': '7rem',
        '8': '8rem',
        '9': '9rem',
      },

      screens: {
        'tablet': '800px',
      }
    },
  },
  plugins: [],
}