import ContextMenu from "./ContextMenu";

export default {
  title: "Components/ContextMenu",
  component: ContextMenu,
};

const Template = (args) => <ContextMenu {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  multipleLists: false,
  countryItems: ["Russia", "USA", "Germany"],
  timeItems: ["Days", "Weeks", "Years"],
};
