/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "purple-jam": "#672280",
        "dark-orchid": "#A626D3",
        iron: "#D5D4D8",
        woodsmoke: "#0D0D0D",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        karla: ["Karla", "sans-serif"],
      },
    },
  },
  plugins: [],
};
