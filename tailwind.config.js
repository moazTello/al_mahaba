/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        reem: ["'Reem Kufi', sans-serif"],
        kufam: ["'Kufam', sans-serif"],
        amiri: ["'Amiri', serif"],
      },
    },
  },
  plugins: [],
};
