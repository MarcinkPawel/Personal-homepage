const colorsName = {
  white: "#FFFFFF",
  whiteLilac: "#FBFBFE",
  porcelain: "#F2F3F4",
  mercury: "#E5E5E5",
  ironTransparent: "#D1D5DA4D",
  tropicalBlue: "#CDE0F7",
  anakiwa: "#8CC2FF",
  scienceBlueLightDarkTheme: "#0366D680",
  scienceBlueLight: "rgba(3, 102, 214, 0.2)",
  dodgerBlue: "#2188FF",
  shipCove: "#6D93BE",
  slateGray: "#6E7E91",
  scienceBlue: "#0366D6",
  tundora: "#414141",
  lightBlack: "#313131",
  mineShaft: "#252525",
  violet: "#090A3333",
  violetDarker: "#090A334D",
};

const commonTheme = {
  breakpoint: {
    mobile: 767,
  },
  boxShadow:
    "0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);",
};

export const lightTheme = {
  ...commonTheme,
  colors: {
    primary: colorsName.scienceBlue,
    textPrimary: colorsName.mineShaft,
    site: {
      background: colorsName.whiteLilac,
      text: colorsName.slateGray,
    },
    styledLink: {
      text: colorsName.white,
      border: colorsName.ironTransparent,
      shadow: colorsName.anakiwa,
    },
    boxBackground: colorsName.white,
    headerLine: colorsName.mercury,
    tile: {
      border: colorsName.ironTransparent,
      borderHover: colorsName.tropicalBlue,
      header: colorsName.scienceBlue,
    },
    themeToggler: {
      background: colorsName.mercury,
      border: colorsName.slateGray,
      icon: colorsName.white,
    },
    link: {
      text: colorsName.scienceBlue,
      underline: colorsName.scienceBlueLight,
      hover: colorsName.dodgerBlue,
    },
  },
};

export const darkTheme = {
  ...commonTheme,
  colors: {
    primary: colorsName.dodgerBlue,
    textPrimary: colorsName.white,
    site: {
      background: colorsName.mineShaft,
      text: colorsName.white,
    },
    styledLink: {
      text: colorsName.white,
      border: colorsName.ironTransparent,
      shadow: colorsName.shipCove,
    },
    boxBackground: colorsName.lightBlack,
    headerLine: colorsName.tundora,
    tile: {
      border: colorsName.tundora,
      borderHover: colorsName.scienceBlueLightDarkTheme,
      header: colorsName.white,
    },
    themeToggler: {
      background: colorsName.slateGray,
      border: colorsName.white,
      icon: colorsName.mineShaft,
    },
    link: {
      text: colorsName.scienceBlue,
      underline: colorsName.scienceBlueLight,
      hover: colorsName.dodgerBlue,
    },
  },
};
