/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      main: "#AA233C",
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },
    fontSize: {
      content: "1.125rem",
    },
    fontWeight: {
      medium: "500",
      semiBold: "600",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
