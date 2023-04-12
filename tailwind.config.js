/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "linear-gradient(283.37deg, #554F55 0.81%, #22181A 99.05%)",
        "primary-gradient":
          " linear-gradient(96.86deg, #206FE8 26.86%, #4BA0FF 78.22%)",
        overlay: " linear-gradient(89.9deg, #1A1A1A 1.18%, #626262 99.92%)",
      },

      colors: {
        primary: "#206FE8",
      },
    },
  },
  plugins: [],
};
