import { colors } from "./colors";
import { shadows } from "./shadows";

// Background: purple, font: white, no border, no shadows
export const themePrimary = {
  name: "Primary",
  backgroundColor: colors.colorPrimary,
  color: colors.colorWhite,
  borderToggle: false,
  shadowsToggle: false,
};

// Background: white, font: purple, with border, no shadows
export const themeSecondary = {
  name: "Secondary",
  backgroundColor: colors.colorWhite,
  color: colors.colorPrimary,
  borderToggle: true,
  shadowsToggle: false,
  borderColor: colors.colorPrimary,
};

// Background: white, font: purple, no border, with shadows
export const themePrimaryWhite = {
  name: "Primary White",
  backgroundColor: colors.colorWhite,
  color: colors.colorPrimary,
  borderToggle: false,
  shadowsToggle: true,
  boxShadow: shadows.shadowDefault,
};
