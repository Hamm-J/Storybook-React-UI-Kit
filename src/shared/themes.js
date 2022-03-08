import { colors, shadows } from "./styleValues";

// Background: purple, font: white, no border, no shadows
export const themePrimary = {
  name: "Primary",
  // background values
  backgroundColor: colors.colorPrimary,
  backgroundColorHover: colors.colorHover,
  backgroundColorActive: colors.colorActive,
  backgroundColorDisabled: colors.colorDisabled,
  // font values
  color: colors.colorWhite,
  // border values
  borderToggle: false,
  borderColor: colors.colorPrimary,
  borderColorFocus: colors.colorGray,
  borderColorDisabled: colors.colorDisabled,
  // shadows values
  shadowsToggle: false,
};

// Background: white, font: purple, with border, no shadows
export const themeSecondary = {
  name: "Secondary",
  // background values
  backgroundColor: colors.colorWhite,
  backgroundColorHover: "rgba(110, 65, 226, 0.04)",
  backgroundColorActive: "rgba(110, 65, 226, 0.16)",
  backgroundColorDisabled: colors.colorWhite,
  // font values
  color: colors.colorPrimary,
  // border values
  borderToggle: true,
  borderColor: colors.colorPrimary,
  borderColorFocus: colors.colorGray,
  borderColorDisabled: colors.colorDisabled,
  // shadows values
  shadowsToggle: false,
};

// Background: white, font: purple, no border, with shadows
export const themePrimaryWhite = {
  name: "Primary White",
  // background values
  backgroundColor: colors.colorWhite,
  backgroundColorHover: colors.colorWhiteS,
  backgroundColorActive: colors.colorWhite,
  backgroundColorDisabled: "rgba(255, 255, 255, 0.34)",
  // font values
  color: colors.colorPrimary,
  // border values
  borderToggle: false,
  borderColor: colors.colorWhite,
  borderColorFocus: colors.colorGray,
  borderColorDisabled: "rgba(255, 255, 255, 0.34)",
  // shadows values
  shadowsToggle: true,
  boxShadow: shadows.shadowDefault,
};
