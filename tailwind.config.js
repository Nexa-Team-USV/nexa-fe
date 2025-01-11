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
      keyframes: {
        skeleton: {
          "0%": { left: "-50%" },
          "100%": { left: "150%" },
        },
      },
      animation: {
        skeleton: "skeleton 1s linear infinite",
      },
      boxShadow: {
        skeleton: "0 0 1rem 2rem rgba(0, 0, 0, 0.03)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
