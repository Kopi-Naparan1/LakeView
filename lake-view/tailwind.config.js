/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4A442A",
        secondary: "#E8DCC1",
        accent: "#6C8F65",
        text: "#2E2E2E",
        background: "#F9F8F6",
      },
      fontFamily: {
        display: ["Montserrat", "sans-serif"],
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
