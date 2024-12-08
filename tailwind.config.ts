import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        primary: {
          soft_orange: "hsl(var(--soft-orange))",
          soft_red: "hsl(var(--soft-red))",
        },

        neutral: {
          off_white: "hsl(var(--off-white))",
          grayish_blue: "hsl(var(--grayish-blue))",
          dark_grayish_blue: "hsl(var(--dark-grayish-blue))",
          very_dark_blue: "hsl(var(--very-dark-blue))",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
