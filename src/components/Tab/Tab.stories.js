import Tab from "./Tab";

export default {
  title: "Components/Tab",
  component: Tab,
  argTypes: {
    handleClick: { action: "handleClick" },
  },
};

const Template = (args) => <Tab {...args} />;

export const Large = Template.bind({});
Large.args = {
  label: "Name of Tab",
  tabState: "large",
};

export const Medium = Template.bind({});
Medium.args = {
  label: "Name of Tab",
  tabState: "medium",
};

export const Small = Template.bind({});
Small.args = {
  label: "Name of Tab",
  tabState: "small",
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  label: "Name of Tab",
  tabState: "horizontal",
};
