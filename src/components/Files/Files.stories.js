import Files from "./Files";

export default {
  title: "Components/Files",
  component: Files,
};

const Template = (args) => <Files {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fileState: "default",
  description:
    "PNG, jpg, gif files up to 10MB in size are available for upload",
  progressBarValue: 50,
  dragOverState: false,
};
