/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		colors: {
			'primary-lr': '#ff525d',
			'primary-vlr': '#ff7a85',
			'primary-vdb': '#1f3f5b',
			'neutral-w': '#ffffff',
			'neutral-gb': '#c8c8cb',
			'neutral-vdgb': '#4b5862',
			'neutral-vdbb': '#25252d',
			'gradient-vlr': '#ff8f70',
			'gradient-lr': '#ff3d54',
			'gradient-vdgb': '#2c2d3f',
			'gradient-vddb': '#3f4164',
			transparent: 'transparent',
		},
		extend: {
			fontFamily: {
				overpass: ['Overpass', ...defaultTheme.fontFamily.sans],
				ubuntu: ['Ubuntu', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
