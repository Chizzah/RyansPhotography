module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        "72": "18rem",
        "84": "21rem",
        "96": "24rem",
        "128": "30rem",
        "156": "70rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
