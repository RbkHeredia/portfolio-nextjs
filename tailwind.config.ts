import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(6deg, rgba(231,15,170,1) 0%, rgba(6,188,251,1) 100%)',
        'lotr':"url('/lotrmap.jpg')",
        'bg-gold':"url('/bg-portfolio.png')"
      },
      colors: {
        'gold-dark':'#B8860B',
        'gold-light':'#D4AF37',
      }
    },
  },
  plugins: [],
};
export default config;
