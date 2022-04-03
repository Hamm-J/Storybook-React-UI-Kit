import Toggle from "./Toggle";

export default {
  title: "Components/Toggle",
  component: Toggle,
  argTypes: {
    handleToggle: { action: "handleToggle" },
  },
};

const Template = (args) => <Toggle {...args} />;

export const Single = Template.bind({});
Single.args = {
  toggleState: "single",
  toggleHead: "label head",
  toggleDescription: "label description",
  disabledState: false,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  toggleState: "label",
  toggleHead: "label head",
  toggleDescription: "label description",
  disabledState: false,
};
export const SingleDisabled = Template.bind({});
SingleDisabled.args = {
  toggleState: "single",
  toggleHead: "label head",
  toggleDescription: "label description",
  disabledState: true,
};

export const LabelDisabled = Template.bind({});
LabelDisabled.args = {
  toggleState: "label",
  toggleHead: "label head",
  toggleDescription: "label description",
  disabledState: true,
};
