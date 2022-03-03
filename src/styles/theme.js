export const deviceSizes = {
  tablet: "640px",
  laptop: "900px",
};

export const device = {
  tablet: `screen and (min-width: ${deviceSizes.tablet})`,
  laptop: `screen and (min-width: ${deviceSizes.laptop})`,
};

// export const theme = {
//   bgDarkColor: "#202124",
//   bgLightColor: "#f4f4f4",
//   lightGray: "#bdc1c6",
//   darkGray: "121212",
//   device,
// };

export const darkMode = {
  bgColor: "#202124",
  color: "#bdc1c6",
  device,
};

export const lightMode = {
  bgColor: "#f4f4f2",
  color: "#121212",
  device,
};
