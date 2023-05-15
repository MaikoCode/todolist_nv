/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        JosefinSans: ['Josefin Sans', 'sans-serif']
      },
      colors: {

        // Primary
        "brightBlue": "hsl(220, 98%, 61%)",
        // Light


        // Dark

      }
    },
  },
  plugins: [],
}

