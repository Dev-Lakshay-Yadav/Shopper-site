/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      gridTemplateColumns: {
        'custom': '0.5fr 2fr 1fr 1fr 1fr 1fr',
      },
      boxShadow: {
        'custom': '0 1px 3px -2px black',
      }
    },
  },
  plugins: [],
}

