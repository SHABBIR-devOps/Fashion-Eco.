/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        paper: "#F5F3EE",
        "paper-alt": "#EDEAE2",
        ink: "#17150F",
        "ink-soft": "#524E43",
        line: "#DAD4C6",
        cobalt: "#2D3AA8",
        "cobalt-dark": "#20297D",
        clay: "#C1502E",
        // dark mode surface tones
        dark: {
          bg: "#121110",
          surface: "#1B1A17",
          line: "#33312B",
        },
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Inter", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
      keyframes: {
        ticker: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        fadeIn: {
          from: { opacity: 0, transform: "translateY(6px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        ticker: "ticker 26s linear infinite",
        fadeIn: "fadeIn .4s ease forwards",
      },
    },
  },
  plugins: [],
};
