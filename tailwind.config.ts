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
				pulseBorder: {
					"0%, 100%": { boxShadow: "0 0 0 0 rgba(255,255,255, 0.1)" },
					"50%": { boxShadow: "0 0 10px 4px rgba(255,255,255, 0.15)" },
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
				shimmer: {
					"0%": { transform: "translateX(-100%)" },
					"100%": { transform: "translateX(100%)" },
				},
				typing: {
					from: { width: "0" },
					to: { width: "100%" },
				},
				blink: {
					"0%, 100%": { borderColor: "transparent" },
					"50%": { borderColor: "#fff" },
				},
				gradientText: {
					"0%": { backgroundPosition: "0% 50%" },
					"50%": { backgroundPosition: "100% 50%" },
					"100%": { backgroundPosition: "0% 50%" },
				},
				textGlow: {
					"0%, 100%": {
						textShadow:
							"0 0 2px rgba(255,255,255,0.6), 0 0 10px rgba(192,132,252,0.5)",
					},
					"50%": {
						textShadow:
							"0 0 6px rgba(255,255,255,0.8), 0 0 20px rgba(147,51,234,0.8)",
					},
				},
			},
			animation: {
				"bounce-soft": "bounce-soft 3s ease-in-out infinite",
				shimmer: "shimmer 2s ease-in-out infinite",
				textGlow: "textGlow 2.5s ease-in-out infinite",
				pulseBorder: "pulseBorder 3s ease-in-out infinite",
				typingAnimation:
					"typing 2.5s steps(30, end) 1 forwards, blink 0.75s step-end infinite",
				gradientText: "gradientText 6s ease infinite",
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
