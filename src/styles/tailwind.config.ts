import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        // iPad Mini landscape & portrait width range
        'ipad-mini': { 'raw': '(min-width: 768px) and (max-width: 1024px)' },
      },
      colors: {
        background: "var(--background)",
        background0: "var(--background0)",
        foreground: "var(--foreground)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        muted: "var(--color-muted)",
        buttonText: "hsl(var(--buttonText))",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        lobster: ["var(--font-lobster)", "cursive"],
      },
    },
  },
  plugins: [],
};

export default config;

