import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#172033",
        saffron: "#f8a51b",
        "campus-green": "#11634f",
        "signal-red": "#d94b3d",
      },
      boxShadow: {
        glow: "0 24px 80px rgba(17, 99, 79, 0.18)",
        soft: "0 18px 50px rgba(23, 32, 51, 0.12)",
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        marquee: "marquee 24s linear infinite",
        rise: "rise 700ms ease-out both",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
