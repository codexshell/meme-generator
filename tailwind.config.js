/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        purple1: "#672280",
        purple2: "#A626D3",
        purple3: "#711F8D",
        purple4: "#A818DA",
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
