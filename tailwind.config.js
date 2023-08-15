const { fontFamily } = require("tailwindcss/defaultTheme");
const { transparent } = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      main: {
        50: "#ffffff",
        100: "#f5f5f5",
        200: "#e5e5e5",
        300: "#d4d4d4",
        400: "#a3a3a3",
        500: "#737373",
        600: "#525252",
        700: "#404040",
        800: "#262626",
        900: "#171717",
        950: "#000000",
      },
      accent: {
        100: "#daeceb",
        200: "#b5d9d7",
        300: "#91c5c2",
        400: "#6cb2ae",
        500: "#479f9a",
        600: "#397f7b",
        700: "#2b5f5c",
        800: "#1c403e",
        900: "#0e201f",
      },
      transparent,
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
    },
  },
  plugins: [require("tailwindcss-selection-variant")],
};
