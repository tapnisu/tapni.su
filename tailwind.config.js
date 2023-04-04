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
				50: "#ffffff",
				100: "#e5e5e5",
				200: "#d4d4d4",
				300: "#a3a3a3",
				400: "#737373",
				500: "#525252",
				600: "#404040",
				700: "#262626",
				800: "#171717",
				900: "#000000"
			},
			accent: {
				50: "#f5f6ff",
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
