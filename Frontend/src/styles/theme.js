export const deviceSizes = {
  tablet: "640px",
  laptop: "900px",
};

export const device = {
  tablet: `screen and (min-width: ${deviceSizes.tablet})`,
  laptop: `screen and (min-width: ${deviceSizes.laptop})`,
};

export const theme = {
  mainColor: "#6ABD8C",
  mainColorLight: "#CCDFB0",
  backgroundColor: "#F6F9F0",
  darkGray: "#595959",
  lightGray: "#939292",
  superLightGray: "#F1F2F5",
  device,
};
