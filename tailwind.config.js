/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb', // Blue
        secondary: '#0ea5e9', // Teal
        accent: '#a21caf', // Purple
        glass: 'rgba(255,255,255,0.18)',
        dark: '#0f172a',
        light: '#f1f5f9',
        highlight: '#fbbf24', // yellow for highlights
        danger: '#ef4444', // red for errors
        success: '#22c55e', // green for success
      },
      fontFamily: {
        sans: ['Montserrat', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
        magic: '0 4px 32px 0 rgba(80, 0, 200, 0.12)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #2563eb 0%, #0ea5e9 50%, #a21caf 100%)',
        'section-gradient': 'linear-gradient(135deg, #f1f5f9 0%, #e0e7ef 100%)',
        'footer-gradient': 'linear-gradient(90deg, #0ea5e9 0%, #a21caf 100%)',
        'divider-wave': 'url("/svg/wave.svg")',
      },
      backdropBlur: {
        glass: '12px',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: 0, transform: 'translateY(40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'ripple': {
          '0%': { transform: 'scale(0)', opacity: 0.7 },
          '100%': { transform: 'scale(2.5)', opacity: 0 },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.7s cubic-bezier(0.4,0,0.2,1) both',
        'ripple': 'ripple 0.6s linear',
      },
    },
  },
  plugins: [],
} 