/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'primary-bulleted': '#2940D3',
        'secondary-text': '#94A4C4',
        'secondary-second': '#82868C'
      },
    },
    fontFamily: {
      'body': ["Inter", "sans-serif"],
    },
  },
  plugins: [],
}