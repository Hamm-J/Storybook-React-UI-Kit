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

export const Primary = Template.bind({});
Primary.args = {
  notificationState: "success",
  showButtons: true,
  showHead: true,
  showDescription: true,
  head: "Head",
  description: "Description",
  closeLabel: "Close",
  helpLabel: "Help",
};
