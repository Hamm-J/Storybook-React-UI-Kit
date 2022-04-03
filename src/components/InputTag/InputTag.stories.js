import InputTag from "./InputTag";

export default {
  title: "Components/InputTag",
  component: InputTag,
  argTypes: { handleDelete: { action: "handleDelete" } },
};

const Template = (args) => <InputTag {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Your name",
  inputStateValue: "default",
  errorMessage: "Error message",
  descriptionMessage: "Description message",
  tagsMaxCount: 6,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Your name",
  inputStateValue: "disabled",
  errorMessage: "Error message",
  descriptionMessage: "Description message",
  tagsMaxCount: 6,
};

export const Error = Template.bind({});
Error.args = {
  label: "Your name",
  inputStateValue: "error",
  errorMessage: "Error message",
  descriptionMessage: "Description message",
  tagsMaxCount: 6,
};

export const Description = Template.bind({});
Description.args = {
  label: "Your name",
  inputStateValue: "description",
  errorMessage: "Error message",
  descriptionMessage: "Description message",
  tagsMaxCount: 6,
};
