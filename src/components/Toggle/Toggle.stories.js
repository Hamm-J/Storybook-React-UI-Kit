import Toggle from './Toggle';

export default {
    title: "Components/Toggle",
    component: Toggle,
};

const Template = (args) => <Toggle {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    toggleState: "single",
    toggleHead: "label head",
    toggleDescription: "label description",
    disabledState: true,
}