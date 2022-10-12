/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        // changed
        md: "900px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
      boxShadow: {
        '3xl': 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px',
      },
      flexGrow: {
        '3': 3
      }
    },
  },
  plugins: [],
};
