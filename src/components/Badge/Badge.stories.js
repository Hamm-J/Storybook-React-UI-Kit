import Badge from "./Badge";

export default {
    title: "Components/Badge",
    component: Badge,
};

const Template = (args) => <Badge {...args} />;
export const Primary = Template.bind({});
Primary.args = {
    label: "Your text"
}