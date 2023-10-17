import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-urbanist)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "register-bg":
          "linear-gradient(to right bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('https://picsum.photos/1600/1600?shop,dress&random=1')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
