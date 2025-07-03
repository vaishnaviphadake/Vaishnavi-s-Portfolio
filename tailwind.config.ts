import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			sm: "375px",
			md: "768px",
			lg: "1200px",
		},
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
				md: "2rem",
			},
		},
		extend: {
			fontFamily: {
				sans: "var(--font-sans)",
				serif: "var(--font-serif)",
			},
			keyframes: {
				"bounce-soft": {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-5px)" },
				},

				"ping-large": {
					"75%, 100%": {
						transform: "scale(3)",
						opacity: "0",
					},
				},
				"move-left": {
					"0%": {
						transfrorm: "translateX(0%)",
					},
					"100%": {
						transform: "translateX(-50%)",
					},
				},
				"move-right": {
					"0%": {
						transfrorm: "translateX(-50%)",
					},
					"100%": {
						transform: "translateX(0%)",
					},
				},
				marquee: {
					"0%": { transform: "translateX(0)" },
					"100%": { transform: "translateX(-50%)" },
				},
			},
			animation: {
				"bounce-soft": "bounce-soft 3s ease-in-out infinite",
				"ping-large": "ping-large 1s ease-in-out infinite",
				"move-left": "move-left 50s linear infinite",
				"move-right": "move-right 50s linear infinite",
				marquee: "marquee 20s linear infinite",
			},
			maskImage: {
				"fade-bottom":
					"radial-gradient(50% 50% at bottom center, black, transparent)",
			},
		},
	},
	plugins: [],
};
export default config;
