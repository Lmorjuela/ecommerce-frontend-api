/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        ms: "360px",
        mm: "480px",
        ml: "600px",
        mg: "768px",
        tp: "992px",
        tg: "1200px",
        lp: "1440px",
        lm: "1680px",
        lg: "1920px",
        pg: "2400px",
      },
      transitionProperty: {
        "max-h": "max-height",
      },
      keyframes: {
        "slide-in": {
          "0%": {
            "max-height": "0",
          },
          "100%": {
            "max-height": "max-content",
          },
        },
        "slide-out": {
          "0%": {
            "max-height": "max-content",
          },
          "100%": {
            "max-height": "0",
          },
        },
      },
      animation: {
        "slide-in": "slide-in 1000ms ease-out",
        "slide-out": "slide-out 1000ms ease-out",
      },
    },
  },
  plugins: [],
};
