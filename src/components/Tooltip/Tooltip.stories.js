import Tooltip from './Tooltip';

export default {
    title: "Components/Tooltip",
    component: Tooltip,
};

const Template = (args) => <Tooltip {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    tooltipState: "topLeft",
    label: "label",
};