/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        buttonColor: "#4BC0C0", // Define your custom color with the hex code
      },
      textColor: {
        secondary: "#4BC0C0",
      },
    },
  },

  plugins: [],
};
