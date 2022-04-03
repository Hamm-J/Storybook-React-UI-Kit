import Checkbox from "./Checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
};

const Template = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Checkbox",
  checkboxState: "default",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Checkbox",
  checkboxState: "disabled",
};

export const Error = Template.bind({});
Error.args = {
  label: "Checkbox",
  checkboxState: "error",
};
