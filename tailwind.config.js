/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./public/index.html",
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#254b67",
      },
    },
  },
  plugins: [],
};
