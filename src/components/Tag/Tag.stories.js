import Tag from './Tag';

export default {
    title: "Components/Tag",
    component: Tag,
    // FIXME: JH2021_12_14
    // Look into argTypes for respawning the tag 
}

const Template = (args) => <Tag {...args} />

export const Primary = Template.bind({});
Primary.args = {
    label: "Tag",
    close: false,
}