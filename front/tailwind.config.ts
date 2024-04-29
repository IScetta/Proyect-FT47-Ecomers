import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:'#c5c5c5',
        secundary: '#1b1b1b',
        terciary: '#8324ff',
        complementary:'rgba(46, 46, 46, 0.87)',
        text: '#333',
        background: '#f8f9fa',
        error: '#dc3545',
        border: '#ccc',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    // require("flowbite/plugin")
  ],
};
export default config;
