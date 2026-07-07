import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

/**
 * SUMERIAN MERCHANT — design tokens (Astro edition, unchanged palette)
 * sun-baked clay · warm sand · dark baked brick · bronze/copper ·
 * barley gold · lapis accent · bitumen black · faded reed · dusty off-white
 */
const config: Config = {
  content: ["./src/**/*.{astro,html,ts,md}"],
  theme: {
    extend: {
      colors: {
        bitumen: "#171210",
        brick: { 700: "#46311f", 800: "#36261a", 900: "#291d15", 950: "#1f1712" },
        clay: { 300: "#d99f6a", 400: "#c98851", 500: "#b46e3f", 600: "#96582f", 700: "#7a4526" },
        sand: { 200: "#e9dbbc", 300: "#d9c7a2", 400: "#c4ae87" },
        dust: "#f3ead7",
        barley: { 400: "#e0ab4e", 500: "#d29a36", 600: "#b07d24" },
        bronze: { 400: "#b08749", 500: "#966d36", 600: "#7c5628" },
        copper: { 400: "#c97f52", 500: "#b8703d", 600: "#93542e" },
        lapis: { 300: "#6b86c2", 400: "#4a66a6", 500: "#354f8c", 600: "#2b4076" },
        reed: "#8f7f5f",
      },
      fontFamily: {
        display: ['"Fraunces"', "Georgia", "'Times New Roman'", "serif"],
        body: ['"Inter"', ...defaultTheme.fontFamily.sans],
      },
      transitionTimingFunction: {
        settle: "cubic-bezier(0.22, 1, 0.36, 1)",
        stamp: "cubic-bezier(0.65, 0, 0.35, 1)",
      },
      maxWidth: { measure: "62ch" },
      letterSpacing: { stamp: "0.18em" },
    },
  },
  plugins: [],
};

export default config;
