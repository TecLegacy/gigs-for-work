/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./src/**/*.{html,js}"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "blue-light": "#E3FDFD",
      "blue-dark": "#A6E3E9",
      "button-dark": "#2A2F4F",
      "text-light": "#FDE2F3",
      "primary-green": "#123119",
    },
    fontFamily: {
      tec: ["PlayFair", "cursive"],
      legacy: ["PlayFair", "serif"],
    },
    boxShadow: {
      nav: "16px 16px 28px #cae1e1, -14px -14px 20px #fcffff;",
    },
    extend: {},
  },
  plugins: [],
};
