/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#de2c4d",
        second: "#f5f5f5",
        thd: "#d89c84",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        averia: ["Averia Serif Libre", "serif"],
        itim: ['Itim', 'sans-serif'],

      },

      container:{
        center: true,
        padding: {
          default: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        }
      }
    },
  },
  plugins: [],
}