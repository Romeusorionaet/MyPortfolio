/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors:{
        rgba: {
          '1': 'rgba(0, 0, 0, 0.10)',
          '2': 'rgba(163, 117, 545, .1)',
        },

        white: {
          '900': '#FFFFFF',
        },

        green: {
          '500': '#00ff00',
          '100': '#009900',
        },
      },

      backgroundImage: {
        'MOBILE-PREVIEW': "url('https://www.f-droid.org/assets/phone-frame.png')",
      },

      fontFamily: {
        'Orbitron': 'Orbitron, sans-serif'
      },

      height:{
        '2': '2rem',
        '4': '4rem',
        '6': '6rem',
        '8': '8rem',
        '8.5': '8.5rem',
        '9': '9rem',
        '10': '10rem',
        '15': '15rem',
        '30': '30rem',
        '40': '40rem',
      },

      width:{
        '4': '4rem',
        '4.6': '4.6rem',
        '6': '6rem',
        '8': '8rem',
        '20': '20rem',
        '25': '25rem',
        '30': '30rem',
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