/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        DM:["DM Sans"]
      },
      colors:{
        mainRed:"#FF002E",
        secondary:"#F9F9F9"
      }
    },
  },
  plugins: [],
}