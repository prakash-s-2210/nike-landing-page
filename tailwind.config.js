/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        palanquin: ["var(--font-palanquinDark)"],
        montserrat: ["var(--font-Montserrat)"],
      },
      colors: {
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue":"#F5F6FF",
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
    },
  },
  plugins: [],
};
