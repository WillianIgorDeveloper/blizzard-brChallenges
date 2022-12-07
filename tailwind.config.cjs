/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      fontFamily: {
         "sans": ['Poppins', 'sans-serif'],
      },
      extend: {
         backgroundImage: {
            'loading': "url('./src/assets/footer-background.png')",
            'wow': "url('./src/assets//banner-hero/games/wow-bg.png')",
         },
         colors: {
            "white-t-10": "#ffffff10",
            "brand-primary": "#00AEFF",
            "brand-hover": "#61CDFF",
            "gray": "#9D9D9D",
            "menu-primary": "#020203EB",
            "menu-secondary": "#0E1117EB",
            "menu-bottom": "#15171B",
         },
         animation: {
            menuOpen: 'menuOpen 300ms',
            menuClose: 'menuClose 300ms',
            menuBgOpen: 'menuBgOpen 300ms',
            menuBgClose: 'menuBgClose 300ms',
         },
         keyframes: {
            menuOpen: {
               '0%': { opacity: 0, top: 0 },
               '100%': { opacity: 1 },
            },
            menuClose: {
               '0%': { opacity: 1, top: 0 },
               '99%': { opacity: 0, top: 0 },
               '100%': { top: '-999px' },
            },
            menuBgOpen: {
               '0%': { backgroundColor: '#02020300' },
               '100%': { backgroundColor: '#020203' },
            },
            menuBgClose: {
               '0%': { backgroundColor: '#020203' },
               '100%': { backgroundColor: '#02020300' },
            }
         }
      },
   },
   plugins: [],
}
