/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily:{
        montserrat : ['montserrat']
      },
      colors :{
        csBackground : ['#ECD7D2'],
        csLightRed : ['#F75463'],
        csLightBlue : ['#B7D1E0'],
      },
      backgroundImage: {
        'cover-image': "url('../img/cover-pink-2.jpg')",
      }
    },
  },
  plugins: [],
}

