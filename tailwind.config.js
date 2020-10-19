module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        groovy: "#EC6E55",
        pastel: "#FBC5A3",
        dark: "#202020",
        melon: "#FBF3EE",
      },
    },
  },
  variants: {},
  plugins: [],
};
