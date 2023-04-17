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
        'BG-DESCRIPTION': 'rgba(201, 233, 186, .1)',
        'BG-IMG': 'green-500',

        'TEXT-COLOR-900': '#FFFFFF',

        'GIT-CARD1': '#00ff00',
        'GIT-CARD2': '#009900'
      },

      // backgroundImage: {
      //   'BG-HOME': '9deg, rgba(77,155,156,1) 13%, rgba(163,148,207,1) 64%'
      // },

      fontFamily: {
        'DESCRIPTION': 'Montserrat Alternates, sans-serif'
      },

      height:{
        'BG-GITHUB-H': '31rem',
      },

      width:{
        'BG-GITHUB-W': '40rem',
      },

      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      }
    },
  },
  plugins: [],
}