import InputTag from "./InputTag";

export default {
  title: "Components/InputTag",
  component: InputTag,
};

const Template = (args) => <InputTag {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Your name",
  inputStateValue: "default",
  errorMessage: "Error message",
  descriptionMessage: "Description message",
  tagsMaxCount: 6,
};
