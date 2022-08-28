/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				overpass: ['Overpass', ...defaultTheme.fontFamily.sans],
				ubuntu: ['Ubuntu', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
