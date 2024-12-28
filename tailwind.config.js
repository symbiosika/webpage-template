module.exports = {
  mode: "jit",
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      // siehe: https://uicolors.app/create
      colors: {
        primary: {
          50: "#faf5f7",
          100: "#f7ecf1",
          200: "#f0dae4",
          300: "#e5bccd",
          400: "#d393ad",
          500: "#c37191",
          600: "#ae5472",
          700: "#8e3f57",
          800: "#7b394d",
          900: "#683342",
          950: "#3e1924",
        },
        secondary: {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#858585",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#262626",
        },
      },
    },
  },
  variants: {},
  plugins: [],
  content: ["./src/**/*.{md,njk,sass}"],
  corePlugins: {
    preflight: true,
  },
};
