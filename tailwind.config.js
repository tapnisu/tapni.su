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
				100: "#c3ccdc",
				200: "#96a2b9",
				300: "#7c89a1",
				400: "#66728a",
				500: "#525d72",
				600: "#3f495b",
				700: "#2e3543",
				800: "#1e232c",
				900: "#0e1014"
			},
			...colors
		}
	},
	plugins: []
};
