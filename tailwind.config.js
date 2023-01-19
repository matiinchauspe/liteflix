/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        aquaGreen: "#64EEBC",
        grayBlack: "#242424",
      },
    },
  },
  plugins: [],
};
