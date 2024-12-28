module.exports = {
  mode: "jit",
  darkMode: "class",
  theme: {
    extend: {
      // siehe: https://uicolors.app/create
      // dort unter "Export" die farben von 50 bis 950 kopieren und hier einfügen
      colors: {
        background: {
          DEFAULT: "#ffffff",
          dark: "#1a1a1a",
        },
        "background-secondary": {
          DEFAULT: "#f8f9fa",
          dark: "#2d2d2d",
        },

        content: {
          DEFAULT: "#1a1a1a",
          dark: "#ffffff",
        },
        "content-secondary": {
          DEFAULT: "#f8f9fa",
          dark: "#f8f9fa",
        },

        highlight: {
          DEFAULT: "#8d3f57",
          dark: "#8d3f57",
        },
        "highlight-secondary": {
          DEFAULT: "#454545",
          dark: "#f8f9fa",
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
