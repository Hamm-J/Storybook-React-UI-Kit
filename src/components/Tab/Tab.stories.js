import Tab from "./Tab";

export default {
  title: "Components/Tab",
  component: Tab,
};

const Template = (args) => <Tab {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Name of Tab",
};
