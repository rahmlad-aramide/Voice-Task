/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C13DFF",
        secondary: "#033835"
      },
      fontFamily: {
        'Aeonik': ['Aeonik', 'sans']
      }
    },
  },
  plugins: [],
}