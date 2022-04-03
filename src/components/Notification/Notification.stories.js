import Notification from "./Notification";

export default {
  title: "Components/Notification",
  component: Notification,
  argTypes: {
    handleClose: { action: "handleClose" },
    handleHelp: { action: "handleHelp" },
  },
};

const Template = (args) => <Notification {...args} />;

export const Success = Template.bind({});
Success.args = {
  notificationState: "success",
  showButtons: true,
  showHead: true,
  showDescription: true,
  head: "Head",
  description: "Description",
  closeLabel: "Close",
  helpLabel: "Help",
};

export const SuccessWithoutButtons = Template.bind({});
SuccessWithoutButtons.args = {
  notificationState: "success",
  showButtons: false,
  showHead: true,
  showDescription: true,
  head: "Head",
  description: "Description",
  closeLabel: "Close",
  helpLabel: "Help",
};

export const SuccessWithoutHead = Template.bind({});
SuccessWithoutHead.args = {
  notificationState: "success",
  showButtons: false,
  showHead: false,
  showDescription: true,
  head: "Head",
  description: "Description",
  closeLabel: "Close",
  helpLabel: "Help",
};

export const Error = Template.bind({});
Error.args = {
  notificationState: "error",
  showButtons: true,
  showHead: true,
  showDescription: true,
  head: "Head",
  description: "Description",
  closeLabel: "Close",
  helpLabel: "Help",
};

export const ErrorWithoutDescription = Template.bind({});
ErrorWithoutDescription.args = {
  notificationState: "error",
  showButtons: true,
  showHead: true,
  showDescription: false,
  head: "Head",
  description: "Description",
  closeLabel: "Close",
  helpLabel: "Help",
};

export const Information = Template.bind({});
Information.args = {
  notificationState: "info",
  showButtons: true,
  showHead: true,
  showDescription: true,
  head: "Head",
  description: "Description",
  closeLabel: "Close",
  helpLabel: "Help",
};

export const Mobile = Template.bind({});
Mobile.args = {
  notificationState: "mobile",
  showButtons: false,
  showHead: false,
  showDescription: true,
  head: "Head",
  description: "Description",
  closeLabel: "Close",
  helpLabel: "Help",
};
