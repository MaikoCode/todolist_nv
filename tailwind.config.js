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

        "softColor": "hsl(234, 11%, 52%)",
        
        // Primary
        "brightBlue": "hsl(220, 98%, 61%)",
        // Light
        "taskColorWhite": "#494C6B",
        "inactiveWhite": "#9495A5",
        "dirtyWhite": "#F2F2F2",
        "hoverColorLight": "#494C6B",

        
        // Dark
        "darkBlue": "hsl(235, 21%, 11%)",
        "darkDesaturedBlue": "hsl(235, 24%, 19%)",
        "taskColorBlack": "#C8CBE7",
        "inactiveBlack": "#5B5E7E", 
        "hoverColorBlack": "#E3E4F1",

      },
     
    },
  },
  plugins: [],
}

