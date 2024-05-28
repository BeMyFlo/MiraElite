/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "tailwind.config.{js,cjs,mjs,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#fa7268',
      },
      fontFamily: {
        custom: ['Montserrat', 'Arial', 'sans-serif', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

