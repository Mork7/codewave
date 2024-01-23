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
      keyframes: {
        fadeInLeft: {
          from: {
            opacity: "0",
            transform: "translateX(-100%)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        fadeInLeft: "fadeInLeft 1.5s ease forwards",
      },
    },
  },
  plugins: [],
};
