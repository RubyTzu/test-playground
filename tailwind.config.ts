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
          100: "#fff6f5",
          200: "#ffe3e0",
          300: "#c44d4d",
          400: "#c20606",
          500: "#9c0606",
        },
        neutrals: {
          0: "#ffffff",
          100: "#faf7f7",
          200: "#C5C9D0",
          300: "#59554e",
          400: "#3E3D3D",
          500: "#161616",
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
