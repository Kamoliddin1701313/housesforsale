/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},

    screens: {
      // xl: { max: "1085px" },
      // lg: { max: "992px" },
      // md: { max: "768px" },
      // sm: { max: "576px" },
    },
  },
  plugins: [],
};
