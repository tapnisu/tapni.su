/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["@fontsource/jetbrains-mono"],
				serif: ["@fontsource/jetbrains-mono"],
				mono: ["@fontsource/jetbrains-mono"],
				display: ["@fontsource/jetbrains-mono"],
				body: ["@fontsource/jetbrains-mono"]
			}
		}
	},
	plugins: []
};
