/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        KhmerMoul: 'Moul',
        NotoSansKhmer: 'Noto Sans Khmer',
      }
      
    },
  },
  plugins: [],
}