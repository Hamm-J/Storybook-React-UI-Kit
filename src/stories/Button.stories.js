import Button from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: { 
    handleClick: { action: "handleClick"}
}
};

// export const Clicky = <Button label="clicky" />;

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Click Me",
};

export const Red = Template.bind({});
Red.args = {
  label: "Click Me",
  backgroundColor: "red",
};

export const LargeBlue = Template.bind({});
LargeBlue.args = {
  label: "Click Me",
  backgroundColor: "blue",
  btnSize: "lg"
};

export const SmallPink = Template.bind({});
SmallPink.args = {
    label: "Click Me",
    backgroundColor: "pink",
    btnSize: "sm",
    fontSize: 12,
}