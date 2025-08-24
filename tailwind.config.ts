import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'inter': ['Inter', 'system-ui', 'sans-serif'],
				'poppins': ['Poppins', 'system-ui', 'sans-serif'],
				'orbitron': ['Orbitron', 'monospace'],
				'rajdhani': ['Rajdhani', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: {
					DEFAULT: 'hsl(var(--background))',
					secondary: 'hsl(var(--background-secondary))',
				},
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					light: 'hsl(var(--primary-light))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					light: 'hsl(var(--secondary-light))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					light: 'hsl(var(--accent-light))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
					border: 'hsl(var(--card-border))'
				},
				// Status colors for energy management
				success: 'hsl(var(--success))',
				warning: 'hsl(var(--warning))',
				danger: 'hsl(var(--danger))',
				info: 'hsl(var(--info))',
				// Energy visualization
				energy: {
					low: 'hsl(var(--energy-low))',
					medium: 'hsl(var(--energy-medium))',
					high: 'hsl(var(--energy-high))',
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-secondary': 'var(--gradient-secondary)',
				'gradient-energy': 'var(--gradient-energy)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-cyberpunk': 'var(--gradient-cyberpunk)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'voice-wave': {
					'0%, 100%': { transform: 'translateX(-100%)' },
					'50%': { transform: 'translateX(100%)' }
				},
				'energy-flow': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				},
				'savings-pulse': {
					'0%, 100%': { 
						transform: 'scale(1)',
						opacity: '1'
					},
					'50%': { 
						transform: 'scale(1.05)',
						opacity: '0.9'
					}
				},
				'gentle-bounce': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-4px)' }
				},
				'scan-line': {
					'0%': { left: '-100%' },
					'100%': { left: '100%' }
				},
				'neon-flicker': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				},
				'cyber-glow': {
					'0%, 100%': {
						boxShadow: '0 0 5px hsl(var(--primary) / 0.5), 0 0 10px hsl(var(--primary) / 0.4), 0 0 15px hsl(var(--primary) / 0.3)'
					},
					'50%': {
						boxShadow: '0 0 10px hsl(var(--primary) / 0.7), 0 0 20px hsl(var(--primary) / 0.6), 0 0 30px hsl(var(--primary) / 0.5)'
					}
				},
				'data-stream': {
					'0%': { transform: 'translateY(-100%)', opacity: '0' },
					'10%': { opacity: '1' },
					'90%': { opacity: '1' },
					'100%': { transform: 'translateY(100vh)', opacity: '0' }
				},
				'hologram': {
					'0%, 100%': { 
						transform: 'translateY(0px)',
						filter: 'hue-rotate(0deg)'
					},
					'25%': { 
						transform: 'translateY(-2px)',
						filter: 'hue-rotate(90deg)'
					},
					'50%': { 
						transform: 'translateY(0px)',
						filter: 'hue-rotate(180deg)'
					},
					'75%': { 
						transform: 'translateY(2px)',
						filter: 'hue-rotate(270deg)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				'voice-wave': 'voice-wave 2s ease-in-out infinite',
				'energy-flow': 'energy-flow 3s ease-in-out infinite',
				'savings-pulse': 'savings-pulse 2s ease-in-out infinite',
				'gentle-bounce': 'gentle-bounce 2s ease-in-out infinite',
				'scan-line': 'scan-line 3s linear infinite',
				'neon-flicker': 'neon-flicker 2s ease-in-out infinite',
				'cyber-glow': 'cyber-glow 2s ease-in-out infinite',
				'data-stream': 'data-stream 4s linear infinite',
				'hologram': 'hologram 4s ease-in-out infinite'
			},
			spacing: {
				'touch': '44px',
				'comfortable': '1.5rem'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
