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
				50: "#eef2ff",
				100: "#e0e7ff",
				200: "#c7d2fe",
				300: "#a5b4fc",
				400: "#818cf8",
				500: "#6366f1",
				600: "#4f46e5",
				700: "#4338ca",
				800: "#3730a3",
				900: "#312e81"
			},
			...colors
		}
	},
	plugins: []
};
