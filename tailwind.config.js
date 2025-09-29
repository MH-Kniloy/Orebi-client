const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1600px",
      },
      fontFamily: {
        dmSans: ["DM Sans"],
      },
      colors: {
        blackish: "#262626",
        grayish: "#767676",
        "light-grayish": "#C4C4C4",
        whitish: "#F5F5F3",
      },
    },
  },
  plugins: [],
});
