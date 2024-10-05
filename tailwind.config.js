/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGray: "#8A92A6",
      },
      fontWeight: {
        700: "700", // Custom font weight of 700
      },
    },
  },
  plugins: [],
};
