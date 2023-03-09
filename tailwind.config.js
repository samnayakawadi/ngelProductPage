/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'stats-bg': "url('/src/components/menu/home/components/images/stats/stats-bg.png')",
      }
    },
  },
  plugins: [require("daisyui")],
}
