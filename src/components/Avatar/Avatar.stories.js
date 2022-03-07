import Avatar from "./Avatar";

export default {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  avatar: "😎",
};
