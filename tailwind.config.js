/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        revealbody: 'revealbody 1s ease-in-out',
        revealnav: 'revealnav 1s ease-in-out',
        revealprofiles: 'revealprofiles 1s ease-in-out',
      }, 
      keyframes: {
        revealbody: {
          '0%': { opacity: '0', transform: 'translateX(-5px)'},
          '100%': { opacity: '1' },
        },
        revealnav: {
          '0%': { opacity: '0', transform: 'translateY(-5px)'},
          '100%': { opacity: '1' },
        },
        revealprofiles: {
          '0%': { opacity: '0', transform: 'translateY(5px)'},
          '100%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}

