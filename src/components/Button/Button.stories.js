import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    handleClick: { action: "handleClick" },
  },
};

const Template = (args) => <Button {...args} />;

export const Label = Template.bind({});
Label.args = {
  label: "Button",
  buttonType: "label",
  disabledState: false,
  loadingState: false,
};

export const IconLabel = Template.bind({});
IconLabel.args = {
  label: "Button",
  buttonType: "iconLabel",
  disabledState: false,
  loadingState: false,
};

export const Icon = Template.bind({});
Icon.args = {
  label: "Button",
  buttonType: "icon",
  disabledState: false,
  loadingState: false,
};

export const IconCircle = Template.bind({});
IconCircle.args = {
  label: "Button",
  buttonType: "iconCircle",
  disabledState: false,
  loadingState: false,
};

export const IconLoading = Template.bind({});
IconLoading.args = {
  label: "Button",
  buttonType: "icon",
  disabledState: false,
  loadingState: true,
};

export const LabelDisabled = Template.bind({});
LabelDisabled.args = {
  label: "Button",
  buttonType: "label",
  disabledState: true,
  loadingState: false,
};

export const SeeThemes = Template.bind({});
SeeThemes.args = {
  label: "See Themes",
  buttonType: "label",
  disabledState: false,
  loadingState: false,
};
