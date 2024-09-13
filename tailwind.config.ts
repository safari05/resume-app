import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "16px",
      screens: {
        "2xl": "1150px",
      },
    },
    extend: { 
      colors: {
        'background': 'hsl(197, 46%, 37%)',
        'foreground': 'hsl(210, 40%, 96.1%)',
        'card': 'hsl(0, 0%, 100%)',
        'card-foreground': 'hsl(222.2, 84%, 4.9%)',
        'popover': 'hsl(0, 0%, 100%)',
        'popover-foreground': 'hsl(222.2, 84%, 4.9%)',
        'primary': 'hsl(42, 79%, 54%)',
        'secondary': 'hsl(210, 40%, 96.1%)',
        'secondary-foreground': 'hsl(222.2, 47.4%, 11.2%)',
        'accent': 'hsl(197, 78%, 21%)',
        'accent-foreground': 'hsl(197 47% 60%)',
        'border': 'hsl(197 47% 60%)',
        'input': 'hsl(214.3, 31.8%, 91.4%)',
        'ring': 'hsl(222.2, 84%, 4.9%)',
        'destructive': 'hsl(0, 96%, 74%)',
        dark : '#151414',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
