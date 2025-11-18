/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./styles/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0a7cff",
          light: "#4fb4ff",
          dark: "#063e7f"
        }
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top, rgba(10,124,255,0.25), transparent 60%)"
      }
    }
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography"), require("@tailwindcss/forms")]
};

