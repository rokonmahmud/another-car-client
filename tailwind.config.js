/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'progressBg': "url('https://i.ibb.co/ZLYPnYm/bg1.png')",
      }
    },
  },
  plugins: [],
}

