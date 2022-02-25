import Filter from "./Filter";

export default {
  title: "Components/Filter",
  component: Filter,
};

const Template = (args) => <Filter {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  items: ["Tea", "Coffee", "Water"],
  filterGroup: "group1",
};
