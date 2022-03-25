export const deviceSizes = {
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
};

export const device = {
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
  laptop: `screen and (max-width: ${deviceSizes.laptop})`,
  laptopL: `screen and (max-width: ${deviceSizes.laptopL})`,
};

export const darkMode = {
  bgColor: "#202124",
  color: "#bdc1c6",
  device,
};

export const lightMode = {
  bgColor: "#f4f4f2",
  color: "#202124",
  lightGray: "#74746f",
  device,
};
