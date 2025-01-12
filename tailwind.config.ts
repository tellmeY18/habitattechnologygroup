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
        yellow: "var(--yellow)",
        textPrimary: "var(--text-primary)",
        textSecondary: "var(--text-secondary)",
        linkColor: "var(--link-color)",
        linkHover: "var(--link-hover)",
      },
      height: {
        hero: "var(--hero-height)",
      },
    },
  },
  plugins: [],
} satisfies Config;
