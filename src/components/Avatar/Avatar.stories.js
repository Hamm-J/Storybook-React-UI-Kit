import Avatar from "./Avatar";

export default {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <Avatar {...args} />;

export const Sunglasses = Template.bind({});
Sunglasses.args = {
  avatar: "😎",
};

export const Ghost = Template.bind({});
Ghost.args = {
  avatar: "👻",
};

export const Popcorn = Template.bind({});
Popcorn.args = {
  avatar: "🍿",
};
