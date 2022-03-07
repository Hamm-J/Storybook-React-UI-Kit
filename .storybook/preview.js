// Import boilerplate for styled-components themes in storybook
import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { ThemeProvider } from "styled-components";
// Import shared colors, shadows, and fonts across stories
import { colors } from "../src/shared/colors";
import { shadows } from "../src/shared/shadows";
import { fonts } from "../src/shared/fonts";
import { themePrimary, themeSecondary, themeWhite } from "../src/shared/themes";
// Import fonts
import "@fontsource/roboto";
import "@fontsource/montserrat";

// Create shared theme object. This object will be spread into any theme created.
const shared = { ...colors, ...shadows, ...fonts };

// Merge in the shared theme values with the various themes
const themePrimaryShared = { ...themePrimary, ...shared };
const themeSecondaryShared = { ...themeSecondary, ...shared };
const themeWhiteShared = { ...themeWhite, ...shared };

// Pass theme objects into themes array for storybook
const themes = [themePrimaryShared, themeSecondaryShared, themeWhiteShared];

// Pass custom themes array and styled-componenst ThemeProvider to storybook
// story decorator function
addDecorator(withThemesProvider(themes), ThemeProvider);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
