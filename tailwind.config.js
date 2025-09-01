/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Lato"', "ui-sans-serif", "system-ui"]
      },
      colors: {
        primary: { DEFAULT: "#1e88e5", dark: "#0b3b73" },
        accent: { DEFAULT: "#14b8a6" }
      }
    }
  },
  plugins: []
};
