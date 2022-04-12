import Tag from "./Tag";

export default {
  title: "Components/Tag (Theme Support)",
  component: Tag,
  argTypes: { handleClose: { action: "handleClose" } },
};

const Template = (args) => <Tag {...args} />;

export const Small = Template.bind({});
Small.args = {
  label: "Tag",
  size: "small",
};

export const Medium = Template.bind({});
Medium.args = {
  label: "Tag",
  size: "medium",
};
