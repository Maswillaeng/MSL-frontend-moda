/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
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
      },
      fontSize: {
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
      animation: {
        "like-click": "likeButton 0.35s linear",
        appearModal: "scaleUp 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards",
      },
      keyframes: {
        likeButton: {
          "0%, 100%": { transform: "scale(1.0)" },
          "1%": { transform: "scale(0.6)" },
          "50%": { transform: "scale(1.1)" },
          "60%": { transform: "scale(1.05)" },
          "70%": { transform: "scale(1.03)" },
          "90%": { transform: "scale(1.01)" },
        },
        scaleUp: {
          "0%": {
            transform: "scale(.8) translate(1000px)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1) translate(0)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
