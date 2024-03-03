/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        lila: "#B693F7",
        lightOrange: "#FDBA74",
        buttonColor: "#BFC97D",
        secondOrange: "#FE9C74",
        firstBlue: "#02C2E6",
        thirdOrange: "#FE9C74",
      }
    },
  },
  plugins: [],
};