import Input from "./Input";

export default {
    title: "Components/Input",
    component: Input,
};

const Template = (args) => <Input {...args} />

export const Primary = Template.bind({});
Primary.args = {
    label: "Your name",
    inputState: "default",
    errorMessage: "Error message",
    descriptionMessage: "Description message"
}