/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neon: "hsl(150, 100%, 66%)",
        txtQuotes: "hsl(193, 38%, 86%)",
        cardBg: "hsl(217, 19%, 24%)",
        cardLine: "hsl(217, 19%, 38%)",
        mainBg: "hsl(218, 23%, 16%)"
      }
    },
  },
  plugins: [],
}

