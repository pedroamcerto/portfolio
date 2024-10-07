/** @type {import('tailwindcss').Config} */

import animate from 'tailwindcss-animated';
import scrollbar from 'tailwind-scrollbar'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "raleway": [
          "Raleway", "sans-serif"
        ]
      },
      backgroundImage: {
        "purple-bg": "url('/src/assets/images/bg.jpg')"
      }
    },
  },
  plugins: [
    animate,
    scrollbar
  ],
}

