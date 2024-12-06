/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"], // Ensure the paths correctly reflect your project structure
  theme: {
    extend: {
      colors: {
        rblue: "#223F99",
        rpink: "#EF5BA1",
        rcyan: "#00BDF2",
        rgray: "#404040",
      },
    }, // Use this section to add customizations
    fontFamily: {
      rfont: ["Figtree", "sans-serif"], // Correct font family syntax
    },
  },
  plugins: [], // Add plugins here if needed
};
