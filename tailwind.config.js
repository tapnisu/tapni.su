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
                100: "#e1e9f2",
                200: "#c3d4e5",
                300: "#a5bed9",
                400: "#87a9cc",
                500: "#6993bf",
                600: "#5978A1",
                700: "#3f5873",
                800: "#2a3b4c",
                900: "#151d26",
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
