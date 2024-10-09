/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'aft750': { 'min': '750px' },
        'aft990': { 'min': '990px' },
        't749px': { 'max': '749px' },

      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        cycle: {
          '0%': { transform: 'translateY(0%)' },
          '25%': { transform: 'translateY(-25%)' },
          '50%': { transform: 'translateY(-50%)' },
          '75%': { transform: 'translateY(-75%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },

      },
      animation: {
        cycle: 'cycle 10s cubic-bezier(1,-0.3,0,1.3) infinite',
        marquee: 'marquee 22s linear infinite',
      },
    },

    plugins: [],
  }
};
