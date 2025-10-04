/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandWhite: "#ffffff",
        brandGold: "#D4AF37", // elegant gold
      },
      fontFamily: {
        pretty: ["'Playfair Display', serif"], // elegant serif for headings
        sans: ["'Inter', sans-serif"], // body font
      },
    },
  },
  plugins: [],
};
