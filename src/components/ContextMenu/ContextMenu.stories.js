import ContextMenu from "./ContextMenu";

export default {
  title: "Components/ContextMenu",
  component: ContextMenu,
};

const Template = (args) => <ContextMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
  multipleLists: false,
  countryItems: ["Canada", "USA", "Germany"],
  timeItems: ["Days", "Weeks", "Years"],
};

export const MultipleLists = Template.bind({});
MultipleLists.args = {
  multipleLists: true,
  countryItems: ["Canada", "USA", "Germany"],
  timeItems: ["Days", "Weeks", "Years"],
};
