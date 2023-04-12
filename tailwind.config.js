/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      main: "#AA233C",
      buttonHover: "#CC3652",
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      slate: colors.slate,
      sky: colors.sky,
    },
    fontSize: {
      xs: "0.7rem",
      sm: "0.875rem",
      category : "2.75rem",
      content: "1.125rem",
      subcontent: "0.875rem",
    },
    fontWeight: {
      medium: "500",
      semiBold: "600",
      bold: "700",
    },
    boxShadow: {
      modal: "0 2px 12px 0px rgb(0 0 0 / 9%)",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
