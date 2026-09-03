/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FBF6EE",
          100: "#F5EEE1",
        },
        ink: {
          900: "#1C1815",
          700: "#4A423B",
          500: "#8A7F73",
          300: "#DDD2C2",
          100: "#F0E8DA",
        },
        coral: {
          50: "#FDEBE1",
          100: "#FBD9C6",
          400: "#EA6A3D",
          600: "#D5522A",
          700: "#B5411E",
        },
        rise: {
          50: "#FDEBE1",
          100: "#FBD9C6",
          400: "#EA6A3D",
          600: "#D5522A",
          700: "#B5411E",
        },
        gold: {
          50: "#FDEBE1",
          400: "#EA6A3D",
          600: "#D5522A",
        },
      },
      fontFamily: {
        sans: ["'Inter'", "system-ui", "sans-serif"],
        display: ["'Manrope'", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(22, 27, 34, 0.06)",
        raised: "0 8px 24px rgba(22, 27, 34, 0.08)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};
