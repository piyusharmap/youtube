/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blackMain: "#0f0f0f",
        redMain: "#FF0000",
        blackSecondary: "#282828",
      },
      fontFamily: {
        primary: "DM Sans",
        secondary: "Oswald",
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
