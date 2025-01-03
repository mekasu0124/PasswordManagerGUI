/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: '#321A28',
        bg2: '#5A163E',
        fg: '#774561',
        bdr: '#240F1C',
        hvr: '#87406A'
      }
    },
    fontFamily: {
      craftyGirls: ["Crafty Girls"],
    }
  },
  plugins: [],
}
