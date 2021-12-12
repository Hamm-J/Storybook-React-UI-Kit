import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: { 
    handleClick: { action: "handleClick"}
}
};

// export const Clicky = <Button label="clicky" />;

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Button"
};
