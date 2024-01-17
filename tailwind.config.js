/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html, js}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#71717a",
        dark: "#0f172a",
        secondary: "#a1a1aa",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
