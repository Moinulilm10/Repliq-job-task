/** @type {import('tailwindcss').Config} */
import keepPreset from "keep-react/preset";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [keepPreset],
  theme: {
    extend: {
      colors: {
        primary: "#5C6AC4",
        primaryBg: "#E7E9F6",
        greyBg: "#84919C",
        secondary: "#3674D9",
        secondaryBg: "#E1EAF9",
        error: "red",
        errorBg: "#FADEDD",
      },
    },
  },
  plugins: [],
};
