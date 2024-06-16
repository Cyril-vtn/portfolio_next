import type { Config } from "tailwindcss";
// tailwind.config.js
const plugin = require("tailwindcss/plugin");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        marlin: ["Marlin", "sans-serif"],
        "marlin-medium": ["Marlin-Medium", "sans-serif"],
        "marlin-bold": ["Marlin-Bold", "sans-serif"],
      },
      letterSpacing: {
        tighter: "-0.05em", // Exemple de valeur négative
        tight: "-0.025em",
        normal: "0em", // Valeur par défaut, peut être omise
        wide: "0.025em",
        wider: "0.05em",
        widest: "0.1em",
      },
      boxShadow: {
        soft: 'rgba(0, 0, 0, 0.2) 0px 7px 15px',
        hard: "box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;"
      },
      colors: {
        primary1: "rgb(255, 234, 231)",
        primary2: "rgb(255, 201, 195)",
        primary3: "rgb(252, 163, 159)",
        primary4: "rgb(252, 130, 121)",
        primary5: "rgb(253, 105, 88)",
        primary6: "rgb(250, 69, 49)",
        primary7: "rgb(207, 56, 40)",
        primary8: "rgb(162, 43, 31)",
        primary9: "rgb(116, 30, 21)",
        primary10: "rgb(71, 17, 12)",
        primary11: "rgb(26, 4, 2)",
        primary12: "rgb(9, 2, 1)",
        secondary1: "rgb(0, 234, 231)",
        secondary2: "rgb(0, 201, 195)",
        secondary3: "rgb(0, 163, 159)",
        secondary4: "rgb(0, 130, 121)",
        secondary5: "rgb(0, 105, 88)",
        secondary6: "rgb(0, 69, 49)",
        secondary7: "rgb(0, 56, 40)",
        secondary8: "rgb(0, 43, 31)",
        secondary9: "rgb(0, 30, 21)",
        secondary10: "rgb(0, 17, 12)",
        secondary11: "rgb(0, 4, 2)",
        secondary12: "rgb(0, 2, 1)",
        lowContrast: "#FFF",
        highContrast: "#000",
        brandGreen: "#22c55e",
        brandDeepGreen: "#15803d",
        brandDarkGreen: "#052e16",
        brandRed: "#FB3A4D",
        lightRed: "#F47A81",
        brandOffwhite: "#FFFCEC",
        focusOutline: "#96C4FF",
        brandDarkBlue: "#000354",
        brandDeepBlue: "#2404AA",
        brandBlue: "#3139FB",
      },
      backgroundImage: (theme) => ({
        "noise-bg": "url(../public/NoiseLight.png)",
      }),
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
  ],
};
export default config;
