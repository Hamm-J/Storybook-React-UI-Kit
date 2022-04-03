import Select from "./Select";

export default {
  title: "Components/Select",
  component: Select,
};

const Template = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Your country",
  results: ["USA", "Canada", "Germany"],
};
