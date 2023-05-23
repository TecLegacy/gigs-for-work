/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-light": "#E3FDFD",
        "blue-dark": "#A6E3E9",
        "button-dark": "#2A2F4F",
        "text-light": "#FDE2F3",
        "primary-green": "#123119",
        "drop-down-regal": "#025464",
      },
      fontFamily: {
        tec: ["PlayFair", "cursive"],
        legacy: ["PlayFair", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto Condensed", "sans-serif"],
      },
      boxShadow: {
        nav: "16px 16px 28px #cae1e1, -14px -14px 20px #fcffff",
      },
    },
  },
  plugins: [require("daisyui")],
};
