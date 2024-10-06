/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGray: "#8A92A6",
        custom: " #3C096C",
      },
    },
  },
  plugins: [],
};
