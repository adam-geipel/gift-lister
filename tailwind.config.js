/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./app/components/**/*.{js,ts,jsx,tsx,css,scss}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
    ],
  theme: {
    extend: {},
  },
  plugins: [],
}
