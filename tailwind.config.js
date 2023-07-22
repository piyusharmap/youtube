/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blackMain: "#08090a",
        redMain: "#FF0000",
        blackSecondary: "#222222",
      },
      fontFamily: {
        primary: "Urbanist",
        secondary: "Staatliches",
      },
    },
  },
  plugins: [],
};
