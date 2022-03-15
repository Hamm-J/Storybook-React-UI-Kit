import SelectTag from "./SelectTag";

export default {
  title: "Components/SelectTag",
  component: SelectTag,
  argTypes: { handleDelete: { action: "handleDelete" } },
};

const Template = (args) => <SelectTag {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Your country",
  resultsArray: ["USA", "Canada", "Germany"],
};
