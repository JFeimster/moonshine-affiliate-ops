import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        secondary: "#10b981",
        ink: "#0f172a",
        panel: "#ffffff",
        line: "#e2e8f0",
        surface: "#f8fafc"
      },
      boxShadow: {
        soft: "0 1px 2px 0 rgba(15,23,42,0.06), 0 8px 24px -12px rgba(15,23,42,0.14)"
      }
    }
  },
  plugins: []
}

export default config
