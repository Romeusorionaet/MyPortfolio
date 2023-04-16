/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors:{
        'BG-HOME': '#1C1C1C',
        'COLOR-LINE': '#363636',
        'BG-HEADER': 'rgba(0, 0, 0, 0.10)',
        'BG-IMG': 'rgba(0, 250, 44, 0.2)',

        'TEXT-COLOR-900': '#FFFFFF',

        'GIT-CARD1': '#00ff00',
        'GIT-CARD2': '#009900'
      },

      height:{
        'BG-GITHUB-H': '31rem',
      },

      width:{
        'BG-GITHUB-W': '20rem',
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