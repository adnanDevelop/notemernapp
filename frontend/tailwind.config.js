module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      green: "#0ADB7F",
      dark_blue: "#1f1f2c",
      light_blue: "#272736",
      white: "#FFFFFF",
      black: "#000000",
      gray: "#797979",
      content_color: "#C7CBD2",
    },
    // fontFamily: {
    //   primary: ["Plus Jakarta Sans", "sans-serif"],
    // },
  },

  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
};
