/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "parallax": "url('../src/assets/bginfo.png')",
      },
    },
  },
  plugins: [],
}