/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/pages/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      c1: {
        100: "3E2212",
        200: "3E2212",
        300: "3E2212",
        400: "3E2212",
        500: "3E2212",
        600: "3E2212",
      },
      c2: "FFEFE6",
      c3: {
        100: "D9D9D9",
        200: "D9D9D9",
        300: "D9D9D9",
        400: "D9D9D9",
        500: "D9D9D9",
        600: "D9D9D9",
      },
      c4: "FFD8C3",
      c5: {
        100: "920000",
        200: "920000",
        300: "920000",
        400: "920000",
        500: "920000",
        600: "920000",
      },
      c6: "0C9200",
    },
    font: {
      font1: ["Poppins", "sans-serif"],
      font2: ["Montserrat", "sans-serif"],
    }
  },
  plugins: [],
});
