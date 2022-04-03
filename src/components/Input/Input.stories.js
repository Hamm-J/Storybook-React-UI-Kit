import Input from "./Input";

export default {
  title: "Components/Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Your name",
  inputState: "default",
  errorMessage: "Error message",
  descriptionMessage: "Description message",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Your name",
  inputState: "disabled",
  errorMessage: "Error message",
  descriptionMessage: "Description message",
};

export const Error = Template.bind({});
Error.args = {
  label: "Your name",
  inputState: "error",
  errorMessage: "Error message",
  descriptionMessage: "Description message",
};

export const Success = Template.bind({});
Success.args = {
  label: "Your name",
  inputState: "success",
  errorMessage: "Error message",
  descriptionMessage: "Description message",
};

export const Autofill = Template.bind({});
Autofill.args = {
  label: "Your name",
  inputState: "autofill",
  errorMessage: "Error message",
  descriptionMessage: "Description message",
};

export const Description = Template.bind({});
Description.args = {
  label: "Your name",
  inputState: "description",
  errorMessage: "Error message",
  descriptionMessage: "Description message",
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  label: "Your name",
  inputState: "readonly",
  errorMessage: "Error message",
  descriptionMessage: "Description message",
};
