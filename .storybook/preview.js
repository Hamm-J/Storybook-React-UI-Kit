import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { ThemeProvider } from "styled-components";
import { colors } from "../src/shared/colors";
import { shadows } from "../src/shared/shadows";
import { fonts } from "../src/shared/fonts";

// TODO: add in real themes
// const placeholderTheme1 = {};

// const themes = [placeholderTheme1, placeholderTheme2];

const shared = { ...colors, ...shadows, ...fonts };

const themes = [shared];
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
