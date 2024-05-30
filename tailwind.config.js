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
        'primary-title': '#3A3C40',
        'primary-bulleted': '#2940D3',
        'secondary-text': '#94A4C4',
        'secondary-second': '#82868C',
        'secondaryImage': '#F5F5F7',
        'secondary-button': '#E3E6EB'
      },
    },
    fontFamily: {
      'body': ["Inter", "sans-serif"],
    },
  },
  plugins: [],
}