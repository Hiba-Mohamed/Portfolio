/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'pattern': "url('background-pic.png')",
      },
    },
  },
  plugins: [],
};
