import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        brand: {
          blue: '#662046', // Qatar Airways Burgundy / Maroon
          red: '#333366',  // Qatar Airways Deep Navy
        },
        blue: {
          50: '#F5E4EB',
          100: '#EBD1DC',
          200: '#D6A8BD',
          300: '#C1809E',
          400: '#A7527D',
          500: '#662046',
          600: '#662046',   // Primary Qatar Burgundy (using 600 as the primary target class throughout app)
          700: '#5C0632',   // Secondary Burgundy
          800: '#4A0428',   // Deaper Maroon
          900: '#35021B',
        },
        cyan: {
          50: '#FDFCF7',
          100: '#FBF8EF',
          200: '#F3E9D0',
          300: '#E8D5A9',
          400: '#DAB877',
          500: '#C7A254',   // Qatar Airways Gold/Sand (Maps to cyan-500)
          600: '#A78138',
          700: '#816127',
          800: '#5F461D',
          900: '#412F15',
        },
        gray: {
          50: '#F2F3FA',    // Qatar Airways 'White Lilac'
          100: '#E8EAEE',
          200: '#d0d2d3',   // QR light grey
          300: '#8E8F8B',   // QR grey 3
          400: '#747F8A',   // Slate gray in logo shapes
          500: '#818A8F',   // QR grey 1
          600: '#5E6A71',   // QR grey 2
          700: '#505967',   // 'Shuttle Gray' for dense text
          800: '#4D4F53',   // Primary strict dark grey
          900: '#222222',   // Sharp heading black/grey
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
