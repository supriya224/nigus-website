/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        customFont: ['Montserrat', 'Poppins', 'sans-serif'],
        fontSize: ['300'],
        // Add more custom font families as needed
      },
    },
  },
  plugins: [],
};
