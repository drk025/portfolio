/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FDF6EC',
        'warm-50': '#FDF6EC',
        'warm-100': '#FAE8CC',
        'warm-200': '#F5D0A0',
        'warm-300': '#E8A96A',
        'warm-400': '#D4844A',
        'warm-500': '#B8622A',
        'warm-600': '#8B4513',
        'warm-700': '#6B3410',
        'amber-rich': '#C47A2B',
        'cream': '#FDF6EC',
        'sand': '#F0DEB8',
        'terracotta': '#C1644A',
        'terracotta-dark': '#9E4A35',
        'brown-warm': '#5C3D2E',
        'brown-light': '#8B6550',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}