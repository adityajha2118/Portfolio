/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backdropBlur: {
				sm: '4px',
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				grotesk: ['Space Grotesk', 'sans-serif'],
			},
			animation: {
				'float': 'float 6s ease-in-out infinite',
				'spin-slower': 'spin 8s linear infinite',
				'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'blob': 'blob 7s infinite',
			},
			keyframes: {
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-20px)' },
				},
				blob: {
					'0%': { transform: 'translate(0px, 0px) scale(1)' },
					'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
					'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
					'100%': { transform: 'translate(0px, 0px) scale(1)' },
				}
			},
			colors: {
				slate: {
					950: '#0B1120',
				}
			}
		},
	},
	plugins: [
		require('tailwind-scrollbar'),
	],
}
