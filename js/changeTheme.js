import { themes } from "./themes.js";

function setRootVariable(variable, value) {
  document.documentElement.style.setProperty(variable, value);
}

export const changeTheme = (themeSelected) => {
  const theme = themes[`theme${themeSelected}`];
  const keys = Object.keys(theme);
  const values = Object.values(theme);
  keys.forEach((key, index) => {
    setRootVariable(key, values[index]);
  });
};
