/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: { colors: {
      'custom-teal': 'rgba(79, 255, 202, 1)',
    },},
  },
  plugins: [],
}

