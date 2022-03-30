import Files from "./Files";

export default {
  title: "Components/Files",
  component: Files,
  argTypes: { handleAvatar: { action: "handleAvatar" } },
};

const Template = (args) => <Files {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  filesState: "default",
  description:
    "PNG, jpg, gif files up to 10MB in size are available for upload",
  errorMessage: "The file size exceeded 10MB",
  errorMessageUploading: "An error has occurred, upload the file again",
  progressBarValue: 50,
};
