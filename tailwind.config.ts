import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container:{
      center:true,
      padding:'16px'
    },
    extend: {
      colors: {
        primary: "#257290",
        dark : '#151414',
        seconday: '#64748b',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens:{
        '2xl': '1320px'
      }
    },
  },
  plugins: [],
};
export default config;
