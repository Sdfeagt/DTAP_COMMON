/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
       "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    fontFamily: {
      'Montserrat': ['Montserrat'],
    },
   colors: {
    'primary': '#B66012',
    'background': '#201A17',
    'surface': '#1B1613',
    'green': '#4FA43D',
    'surface_err': '#302E2B',
    'red': '#F00909',
    'white': '#ffffff',


   }
   ,
   extend: {},
  plugins: [],
}
}