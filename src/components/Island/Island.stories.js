import Island from "./Island";

export default {
  title: "Components/Island",
  component: Island,
  argTypes: {
    handleButton: { action: "handleButton" },
    handleParams1: { action: "handleParams1" },
    handleParams2: { action: "handleParams2" },
  },
};

const Template = (args) => <Island {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  head: "Head",
  description: "Description",
  progressBar: false,
  progressBarValue: 50,
  badgeLabel: "Your text",
  buttonLabel: "Button",
};
