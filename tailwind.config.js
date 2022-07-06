module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      xxs: "364px",
      xs: "435px",
      sm: "515px",
      md: "770px",
      lg: "995px",
      xl: "1150px",
      twoXl: "1350px",
    },
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
      colors: {
        darkBlue: "hsl(233, 26%, 24%)",
        limeGreen: "hsl(136, 65%, 51%)",
        brightCyan: "hsl(192, 70%, 51%)",
        grayishBlue: "hsl(233, 8%, 62%)",
        lightGrayishBlue: "hsl(220, 16%, 96%)",
        veryLightGray: "hsl(0, 0%, 98%)",
      },
      maxWidth: {
        "1/2": "50%",
        "2/3": "67%",
        "3/4": "75%",
        "3/5": "60%",
        "4/5": "80%",
      },
      maxHeight: {
        "1/2": "50%",
      },
    },
  },
  plugins: [],
};
