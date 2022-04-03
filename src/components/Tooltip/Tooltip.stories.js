import Tooltip from "./Tooltip";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
};

const Template = (args) => <Tooltip {...args} />;

export const SideLeft = Template.bind({});
SideLeft.args = {
  tooltipState: "sideLeft",
  label: "Your text in tooltip",
};

export const TopLeft = Template.bind({});
TopLeft.args = {
  tooltipState: "topLeft",
  label: "Your text in tooltip",
};
export const BottomLeft = Template.bind({});
BottomLeft.args = {
  tooltipState: "bottomLeft",
  label: "Your text in tooltip",
};

export const SideRight = Template.bind({});
SideRight.args = {
  tooltipState: "sideRight",
  label: "Your text in tooltip",
};

export const TopRight = Template.bind({});
TopRight.args = {
  tooltipState: "topRight",
  label: "Your text in tooltip",
};
export const BottomRight = Template.bind({});
BottomRight.args = {
  tooltipState: "bottomRight",
  label: "Your text in tooltip",
};
