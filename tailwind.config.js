/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode : "class",
  theme: {
    extend: {
      colors :{
        primaryColor : "#111827",
        primaryColorLight : "rgb(249 250 251)",
      }
    }, 
    container : {
      center : true,
      padding :{
        DEFAULT : '1rem',
      }
    },
    fontFamily :{
      oswald : ['Oswald', 'sans-serif'],
      dmsans : ['DM Sans', 'sans-serif'],
    }
  },
  plugins: [],
}