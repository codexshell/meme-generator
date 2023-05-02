/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "purple-jam": "#672280",
        "dark-orchid": "#A626D3",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        karla: ["Karla", "sans-serif"],
      },
    },
  },
  plugins: [],
};
