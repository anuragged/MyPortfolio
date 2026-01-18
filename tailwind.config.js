/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#030303', // Deep luxury black
        surface: '#0a0a0a',
        primary: '#ffffff',
        secondary: '#888888',
        accent: '#88BDF2', // User's Sky Blue as main accent
        subtle: '#222222',

        // User Custom Palette
        'brand-light': '#BDDDFC', // Pale Blue
        'brand-main': '#88BDF2', // Sky Blue
        'brand-muted': '#6A89A7', // Muted Blue/Grey
        'brand-dark': '#384959', // Dark Slate Blue
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Syne', 'sans-serif'], // Experimental display font
      },
      fontSize: {
        'display-lg': ['clamp(4rem, 10vw, 10rem)', { lineHeight: '0.9', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(2.5rem, 6vw, 6rem)', { lineHeight: '1', letterSpacing: '-0.02em' }],
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.16, 1, 0.3, 1)', // Smooth custom eased
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};