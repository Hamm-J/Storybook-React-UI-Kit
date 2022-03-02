import Popup from "./Popup";

export default {
  title: "Components/Popup",
  componnet: Popup,
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
