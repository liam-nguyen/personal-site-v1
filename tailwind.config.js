const colors = {
  "liam-blue": "rgb(15,22,36)",
};

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius: {
        "6xl": "3rem",
      },
      backgroundColor: {
        ...colors,
      },
      textColor: {
        ...colors,
      },
      lineHeight: {
        16: "4rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
