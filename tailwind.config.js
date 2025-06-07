/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        drunk: ["Druk-Wide-Bold", "italic"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
