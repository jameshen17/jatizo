import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#0d0b10",
        paper: "#171419",
        paperAlt: "#201a20",
        ink: "#f6f1f7",
        stone: "#c8c0c7",
        line: "#352d35",
        accent: "#be3a5c",
        accentSoft: "#efa8ba",
        moss: "#7a6a84",
        accentDark: "#9e294a",
        charcoal: "#100d11"
      },
      boxShadow: {
        card: "0 22px 60px rgba(0, 0, 0, 0.28)",
        glow: "0 34px 90px rgba(154, 42, 72, 0.14)"
      }
    }
  },
  plugins: []
};

export default config;
