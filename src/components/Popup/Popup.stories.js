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

export const Primary = Template.bind({});
Primary.args = {
  popupState: "alert",
  head: "Head",
  description: "Description",
  buttonOneLabel: "Delete",
  buttonTwoLabel: "Cancel",
};
