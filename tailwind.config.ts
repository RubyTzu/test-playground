import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      width: {
        "95": "95vw",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          50: "#fdfcfa",
          100: "#fdfbf8",
        },
        neutrals: {
          0: "#FFFFFF",
          50: "#fcfcfc",
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
      boxShadow: {
        whiteBlur: "0px 0px 20px 20px rgb(253, 252, 250)",
        yellowWhiteBlur: "0px 0px 20px 50px rgb(253, 251, 248)",
      },
    },
  },
  plugins: [],
};
export default config;
