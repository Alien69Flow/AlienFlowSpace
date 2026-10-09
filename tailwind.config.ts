import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

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
        nasalization: ['Nasalization', 'sans-serif'],
        exo: ['Exo', 'system-ui', 'sans-serif'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
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
        },
        alien: {
          'gold': '#F0D882',
          'gold-light': '#F8EAB7',
          'gold-dark': '#C9AD50',
          'green': '#22C55E',
          'green-light': '#4ADE80',
          'green-dark': '#166534',
          'space': '#0C0C1D',
          'space-light': '#1A1A3A',
          'space-dark': '#050510',
          'space-darker': '#030308',
        },
        // Opaque AF tokens use `rgb(var(--x-rgb) / <alpha-value>)` on purpose.
        // A bare `var(--af-bg)` cannot carry a Tailwind opacity modifier, so
        // `bg-af-bg/95` used to compile to NOTHING (no rule at all) — which is
        // why translucent panels, including the header bar, rendered fully
        // transparent. Channel triplets keep `/95`, `/40`, … working.
        af: {
          'bg': 'rgb(var(--af-bg-rgb) / <alpha-value>)',
          'surface': 'rgb(var(--af-surface-rgb) / <alpha-value>)',
          'surface-2': 'rgb(var(--af-surface-2-rgb) / <alpha-value>)',
          'primary': 'rgb(var(--af-primary-rgb) / <alpha-value>)',
          'secondary': 'rgb(var(--af-secondary-rgb) / <alpha-value>)',
          'accent': 'rgb(var(--af-accent-rgb) / <alpha-value>)',
          'success': 'rgb(var(--af-success-rgb) / <alpha-value>)',
          'warning': 'rgb(var(--af-warning-rgb) / <alpha-value>)',
          'danger': 'rgb(var(--af-danger-rgb) / <alpha-value>)',
          'text': 'rgb(var(--af-text-rgb) / <alpha-value>)',
          'text-muted': 'rgb(var(--af-text-muted-rgb) / <alpha-value>)',
          // Border tokens already hold their own alpha, so they stay verbatim.
          'border': 'var(--af-border)',
          'border-strong': 'var(--af-border-strong)',
          'border-hairline': 'var(--af-border-hairline)',
          'text-body': 'var(--af-text-body)',
          'text-dim': 'var(--af-text-dim)',
          'chrome': 'var(--af-chrome)',
        },
        overlay: 'rgba(3, 3, 10, 0.8)'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' }
        },
        'rotate-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        'shimmer': {
          '0%': { backgroundPosition: '-40rem 0' },
          '100%': { backgroundPosition: '40rem 0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'rotate-slow': 'rotate-slow 20s linear infinite',
        'shimmer': 'shimmer 3s infinite'
      },
      backgroundImage: {
        'glow-radial': 'radial-gradient(circle, rgba(244,213,129,0.15) 0%, rgba(12,12,29,0) 70%)',
        'header-gradient': 'linear-gradient(to right, rgba(12, 12, 29, 0.9), rgba(15, 23, 42, 0.7))',
        'card-gradient': 'linear-gradient(145deg, rgba(26,26,58,0.4) 0%, rgba(15,23,42,0.2) 100%)',
        'shimmer-gradient': 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0) 100%)',
      }
    }
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
