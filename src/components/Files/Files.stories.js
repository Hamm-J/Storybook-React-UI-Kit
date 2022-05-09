import Files from "./Files";

export default {
  title: "Components/Files",
  component: Files,
  argTypes: { handleAvatar: { action: "handleAvatar" } },
};

const Template = (args) => <Files {...args} />;

export const Default = Template.bind({});
Default.args = {
  filesState: "default",
  description:
    "PNG, jpg, gif files up to 10MB in size are available for upload",
  errorMessage: "The file size exceeded 10MB",
  errorMessageUploading: "An error has occurred, upload the file again",
  progressBarValue: 50,
};

export const Dragover = Template.bind({});
Dragover.args = {
  filesState: "dragOver",
  description:
    "PNG, jpg, gif files up to 10MB in size are available for upload",
  errorMessage: "The file size exceeded 10MB",
  errorMessageUploading: "An error has occurred, upload the file again",
  progressBarValue: 50,
};

export const Uploading = Template.bind({});
Uploading.args = {
  filesState: "uploading",
  description:
    "PNG, jpg, gif files up to 10MB in size are available for upload",
  errorMessage: "The file size exceeded 10MB",
  errorMessageUploading: "An error has occurred, upload the file again",
  progressBarValue: 50,
};

export const Uploaded = Template.bind({});
Uploaded.args = {
  filesState: "uploaded",
  description:
    "PNG, jpg, gif files up to 10MB in size are available for upload",
  errorMessage: "The file size exceeded 10MB",
  errorMessageUploading: "An error has occurred, upload the file again",
  progressBarValue: 50,
};

export const Avatar = Template.bind({});
Avatar.args = {
  filesState: "avatar",
  description:
    "PNG, jpg, gif files up to 10MB in size are available for upload",
  errorMessage: "The file size exceeded 10MB",
  errorMessageUploading: "An error has occurred, upload the file again",
  progressBarValue: 50,
};

export const Error = Template.bind({});
Error.args = {
  filesState: "error",
  description:
    "PNG, jpg, gif files up to 10MB in size are available for upload",
  errorMessage: "The file size exceeded 10MB",
  errorMessageUploading: "An error has occurred, upload the file again",
  progressBarValue: 50,
};

export const ErrorUploading = Template.bind({});
ErrorUploading.args = {
  filesState: "errorUploading",
  description:
    "PNG, jpg, gif files up to 10MB in size are available for upload",
  errorMessage: "The file size exceeded 10MB",
  errorMessageUploading: "An error has occurred, upload the file again",
  progressBarValue: 50,
};
