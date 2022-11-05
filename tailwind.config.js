/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["JetBrains Mono"],
				serif: ["JetBrains Mono"],
				mono: ["JetBrains Mono"],
				display: ["JetBrains Mono"],
				body: ["JetBrains Mono"],
			},
		},
	},
	plugins: [],
};
