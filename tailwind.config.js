/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
		fontSize: {
			xs: ".75rem",
			sm: ".875rem",
			tiny: ".875rem",
			base: "1rem",
			lg: "1.125rem",
			xl: "1.25rem",
			"2xl": "1.5rem",
			"3xl": "1.875rem",
			"4xl": "2.25rem",
			"5xl": "3rem",
			"6xl": "4rem",
			"7xl": "5rem",
		},
		colors: {
			black: "#111",
			white: "#ffffff",
			grey: "#686868",
			pureBlack: "#000",
			pinkRed: "#ff002f",
			limeGreen: "#a2e603",
			lightGrey: "#d5d5d5",
			darkOrange: "#ff9900",
			orange: "rgb(255, 183, 0)",
			transparent: "transparent",
			yellow: "rgb(255, 201, 21)",
		},
	},
	plugins: [],
};
