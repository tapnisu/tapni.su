const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	plugins: [require("tailwindcss-selection-variant")],
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		colors: {
			main: {
				50: "#fafafa",
				100: "#f5f5f5",
				200: "#e5e5e5",
				300: "#d4d4d4",
				400: "#a3a3a3",
				500: "#737373",
				600: "#525252",
				700: "#404040",
				800: "#262626",
				900: "#171717",
				950: "#000000"
			},
			accent: {
				100: "#e1e9f2",
				200: "#c3d4e5",
				300: "#a5bed9",
				400: "#87a9cc",
				500: "#6993bf",
				600: "#547699",
				700: "#3f5873",
				800: "#2a3b4c",
				900: "#151d26"
			}
		},
		extend: {
			fontFamily: {
				sans: ["var(--font-inter)", ...fontFamily.sans]
			}
		}
	},
	plugins: []
};
