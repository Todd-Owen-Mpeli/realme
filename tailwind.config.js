/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
		colors: {
			black: "#111",
			white: "#ffffff",
			pureBlack: "#000",
			pinkRed: "#ff002f",
			lightGrey: "#d5d5d5",
			darkOrange: "#ff9900",
			current: "currentColor",
			orange: "rgb(255, 183, 0)",
			transparent: "transparent",
			yellow: "rgb(255, 201, 21)",
		},
	},
	plugins: [],
};
