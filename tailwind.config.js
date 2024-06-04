/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      boxShadow: {
        'custom': '0 1px 3px -2px black',
      }
    },
  },
  plugins: [],
}

