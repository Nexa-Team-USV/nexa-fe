/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        "primary-hover": "#3b82f6",
        "primary-disabled": "#3b82f6",
        secondary: "#dbeafe",
        "secondary-hover": "#eff6ff",
        "secondary-disabled": "#eff6ff",
      },
      screens: {
        xsm: "425px",
        xxsm: "320px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
