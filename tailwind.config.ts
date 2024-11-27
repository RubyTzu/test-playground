import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      width: {
        '95': '95vw',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      primary: {
        100: "#fbfbf8",
        200: "#f3f4e5",
        300: "#ebff79",
      },
      neutrals: {
        0: "#FFFFFF",
        100: "#fbfbf8",
        200: "#E9E5D9",
        300: "#EDEDED",
        400: "#C5C9D0",
        500: "#858585",
        600: "#555454",
        700: "#3E3D3D",
        800: "#262525",
        900: "#161616",
      },
    },
  },
  plugins: [],
};
export default config;
