import Radio from "./Radio";

export default {
  title: "Components/Radio",
  component: Radio,
};

const Template = (args) => <Radio {...args} />;

export const Column = Template.bind({});
Column.args = {
  radioState: "default",
  radioGroup: "radio",
  numberOfRadioButtons: 3,
  radioGroupDirection: "column",
};

export const Row = Template.bind({});
Row.args = {
  radioState: "default",
  radioGroup: "radio",
  numberOfRadioButtons: 3,
  radioGroupDirection: "row",
};

export const Disabled = Template.bind({});
Disabled.args = {
  radioState: "disabled",
  radioGroup: "radio",
  numberOfRadioButtons: 3,
  radioGroupDirection: "column",
};
