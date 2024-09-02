/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "fontMulish": ["Mulish", "sans-serif"],
      },

      colors: {
        "regal-blue": "#243c5a",
        "gray-white": "rgba(0, 0, 0, .5)",
      },
    },
    screens: {
      xxl: { max: "1280px" },
      xl: { max: "1085px" },
      lg: { max: "992px" },
      md: { max: "768px" },
      sm: { max: "576px" },
    },
  },
  plugins: [],
};
