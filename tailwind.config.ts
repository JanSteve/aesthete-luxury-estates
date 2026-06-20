import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        obsidian: "#0A0A0A",
        charcoal: "#111111",
        platinum: "#E5E4E2",
        "champagne-gold": "#E9C349",
        "muted-gray": "#8E9192",
        "surface-low": "#1C1B1B",
        "surface-container": "#201F1F",
        "surface-high": "#2B2A2A",
        "surface-highest": "#353434",
        "on-surface": "#E5E2E1",
        "on-surface-variant": "#C4C7C7",
        "outline-subtle": "#444748",
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "Helvetica Neue", "Arial", "sans-serif"],
      },
      fontSize: {
        "display-lg": ["80px", { lineHeight: "90px", letterSpacing: "-0.02em", fontWeight: "400" }],
        "display-mobile": ["48px", { lineHeight: "52px", letterSpacing: "-0.01em", fontWeight: "400" }],
        "headline-lg": ["40px", { lineHeight: "48px", fontWeight: "400" }],
        "headline-md": ["32px", { lineHeight: "40px", fontWeight: "400" }],
        "body-lg": ["18px", { lineHeight: "28px", letterSpacing: "0.01em", fontWeight: "300" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "label-sm": ["12px", { lineHeight: "16px", letterSpacing: "0.1em", fontWeight: "600" }],
      },
      spacing: {
        "section-gap": "160px",
        "margin-desktop": "80px",
        "margin-mobile": "24px",
        gutter: "32px",
      },
      animation: {
        "glow-pulse": "glow-pulse 2.5s ease-in-out infinite alternate",
        "fade-in-up": "fade-in-up 1.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards",
        "cinematic-enter": "cinematicFadeIn 1.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards",
        "slide-up": "slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        "glow-pulse": {
          "0%": { boxShadow: "0 0 20px rgba(233, 195, 73, 0.15)" },
          "100%": { boxShadow: "0 0 40px rgba(233, 195, 73, 0.3)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        cinematicFadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px) scale(0.98)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
