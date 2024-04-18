/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
    },
    colors: {
      c1: {
        100: "3E2212",
        200: "5d4233",
        300: "7c6457",
        400: "9c887e",
        500: "bcaea70",
        600: "ddd6d2",
      },
      c2: "FFEFE60",
      c3: {
        100: "D9D9D9",
        200: "b1b1b1",
        300: "8b8b8b",
        400: "666666",
        500: "444444",
        600: "252525",
      },
      c4: "FFD8C3",
      c5: {
        100: "920000",
        200: "ab3d28",
        300: "c1644f",
        400: "d58a78",
        500: "e6b1a3",
        600: "f4d7d0",
      },
      c6: "0C9200",
    },
    font: {
      font1: ["Poppins", "sans-serif"],
      font2: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
});
