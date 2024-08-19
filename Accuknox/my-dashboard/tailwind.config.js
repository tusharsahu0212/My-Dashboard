/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {


    extend: {

      borderWidth:{
        '15': "15px"
      },

      colors:{
        'gray': {
          '50': '#f0f5fa',
          '100': '#c7cacf'
        },
        'blue':{
          '50': '#e1ebff',
          '100': '#5578ff'
        },
        'red':{
          '50': '#b9140f'
        },
        'yellow': '#fad732',
        'green': '#19a55a'
      }
    },
  },
  plugins: [],
}

