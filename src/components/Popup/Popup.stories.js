import Popup from "./Popup";

export default {
  title: "Components/Popup",
  component: Popup,
  argTypes: {
    handleClose: { action: "handleClose" },
    handleButton1: { action: "handleButton1" },
    handleButton2: { action: "handleButton2" },
  },
};

const Template = (args) => <Popup {...args} />;

export const Alert = Template.bind({});
Alert.args = {
  popupState: "alert",
  head: "Do you want to delete?",
  description: "You can't restore this file",
  buttonOneLabel: "Delete",
  buttonTwoLabel: "Cancel",
};

export const Success = Template.bind({});
Success.args = {
  popupState: "success",
  head: "File deleted",
  description: "That's all :)",
  buttonOneLabel: "Okay, thank you",
  buttonTwoLabel: "Cancel",
};

export const Error = Template.bind({});
Error.args = {
  popupState: "error",
  head: "Error",
  description: "Sorry",
  buttonOneLabel: "Delete",
  buttonTwoLabel: "Cancel",
};

export const Contact = Template.bind({});
Contact.args = {
  popupState: "contact",
  head: "Head",
  description: "Description",
  buttonOneLabel: "Send",
  buttonTwoLabel: "Cancel",
};
