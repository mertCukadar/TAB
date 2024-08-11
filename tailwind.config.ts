import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/posts/**/*.{md,mdx}",
    "./src/content/pages/**/*.{md,mdx}",
    
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        Header: "#4196b3",
        backgroundDefault: "#2d3250",
        blogCardBg: "#424769",
        blogbarBg: "#1d243d",
        textColorCustom: "d0d9d8",
          
      }
    },
  },
  plugins: [],
};
export default config;
