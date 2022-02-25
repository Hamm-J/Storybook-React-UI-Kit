import Checkbox from "./Checkbox";

export default {
    title: "Components/Checkbox",
    component: Checkbox,
};

const Template = (args) => <Checkbox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: "Checkbox",
    checkboxState: "default"
};