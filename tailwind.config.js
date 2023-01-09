/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        eat: "0 0 50px 50px rgba(240, 240, 240, 0)",
      },
    },
  },
  plugins: [],
};
