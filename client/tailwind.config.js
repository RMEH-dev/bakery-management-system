/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ".src/components/**/*.{jsx,js,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});

