/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					green: "#00A82E",
					red: "#F93C23",
					orange: "#E5BF59",
					blue: "#A06DD6"
				},
				secondary: {
					green: "#01D35A"
				}
			}
		},
	},
	plugins: [],
}

