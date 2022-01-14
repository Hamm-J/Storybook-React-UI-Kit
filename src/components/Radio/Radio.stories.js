import Radio from "./Radio";

export default {
  title: "Components/Radio",
  component: Radio,
};

const Template = (args) => <Radio {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  radioState: "default",
  radioGroup: "radio",
  numberOfRadioButtons: 3,
  radioGroupDirection: "column",
};
