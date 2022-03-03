import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { ThemeProvider } from "styled-components";

// TODO: add in real themes
const placeholderTheme1 = {};
const placeholderTheme2 = {};

const themes = [placeholderTheme1, placeholderTheme2];
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
