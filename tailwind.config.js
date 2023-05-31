/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**.{html,js}"],
  theme: {
    extend: {
      colors: {
        gray100: "#F4FAFF",
        gray200: "#82808B",
        white: "#fff",
        black: "#050506",
        violet: "#501FFB",
      },
      fontFamily: {
        inter: "Inter, sans-serif",
        archivo: "Archivo, sans-serif",
      },
    },
  },
  plugins: [],
};
