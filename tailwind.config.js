module.exports = {
  mode: "jit",
  darkMode: "class",
  theme: {
    extend: {
      colors: require("./src/defaults/colors.json"),
    },
  },
  variants: {},
  plugins: [],
  content: ["./src/**/*.{md,njk,sass}"],
  corePlugins: {
    preflight: true,
  },
};
