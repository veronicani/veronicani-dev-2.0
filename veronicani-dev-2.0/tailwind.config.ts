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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "mono": ["var(--font-fira)"],
        "display": ["var(--font-dm-serif)"],
        "sans": ["var(--font-dm-sans)"],
      },
      colors: {
        "blue": {
          "500": "#2462FF",
          "600": "#0042EA",
        },
        "gray-dark": "#4D4D4D",
        "gray-light": "#707070",
        "gray-bg": "#F6F6F6",
        "black": "black",
      }
    },
  },
  plugins: [],
};
export default config;
