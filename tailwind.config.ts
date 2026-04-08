import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#0d0b12",
        paper: "#17131d",
        paperAlt: "#221a27",
        ink: "#f6f1f7",
        stone: "#c8bcc8",
        line: "#34293d",
        accent: "#ff6b8a",
        accentSoft: "#ffb4c5",
        moss: "#7a6a84",
        accentDark: "#ff3f70",
        charcoal: "#0f0a14"
      },
      boxShadow: {
        card: "0 22px 60px rgba(0, 0, 0, 0.28)",
        glow: "0 34px 90px rgba(255, 63, 112, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
