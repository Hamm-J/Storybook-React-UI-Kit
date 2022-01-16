import Island from "./Island";

export default {
  title: "Components/Island",
  component: Island,
};

const Template = (args) => <Island {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  head: "Head",
  description: "Description",
  progressBar: false,
  progressBarValue: 50,
};
