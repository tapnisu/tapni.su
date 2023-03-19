const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
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
				900: "#171717"
			},
			accent: {
				50:  "#f5f6ff",
				100: "#c6ccfd",
				200: "#9ca6fd",
				300: "#98a2fd",
				400: "#8a95f7",
				500: "#838ef2",
				600: "#707ad7",
				700: "#5961ad",
				800: "#363c6b",
				900: "#1a1c33"
			},
			...colors
		}
	},
	plugins: []
};
