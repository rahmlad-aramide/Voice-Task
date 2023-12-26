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
        secondary: "#033835",
        'grey-50': '#F9FAFB',
        'grey-100': '#F0F2F5',
        'grey-300': '#D0D5DD',
        'grey-400': '#98A2B3',
        'grey-500': '#667085',
        'grey-600': '#475367',
        'grey-700': '#344054',
        'grey-900': '#101928',
        'red-500': '#DE5E5E',
      },
      fontFamily: {
        'Aeonik': ['Aeonik', 'sans']
      },
      boxShadow: {
        normal: '0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)',
        soft: '0px 10px 18px -2px rgba(16, 25, 40, 0.07)'
      }
    },
  },
  plugins: [],
}