/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		fontFamily: {
			Montserrat: 'Montserrat',
			Fraunces: 'Fraunces',
		},
		extend: {
			colors: {
				DarkDarkCyan: '#1a4031',
				DarkCyan: '#3c8067',
				Cream: '#f2ebe3',
				VeryDarkBlue: '#1c232b',
				DarkGrayishBlue: '#6c7289',
				White: '#ffffff',
			},
		},
	},
	plugins: [],
};
