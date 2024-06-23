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
      },
      colors: {
        "primary-blue": "#2462FF",
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
