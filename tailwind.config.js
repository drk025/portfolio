/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#B7E0FF', // Replace this with your desired primary color
        primary_sbj: '#F6F5F',
        secondary_g: '#1b2f27',
        secondary_prpl: '#ada4ff'
      },
    },
  },
  plugins: [],
}