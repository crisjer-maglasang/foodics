/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "index-beams": "url('@/assets/background.jpg')",
        "dark-index-beams": "url('@/assets/dark-background.jpg')",
      },
      backgroundSize: {
        "index-beams": "cover", // or any other size you need
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
