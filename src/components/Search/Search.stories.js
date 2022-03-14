import Search from "./Search";

export default {
  title: "Components/Search",
  component: Search,
  argTypes: { handleResult: { action: "handleResult" } },
};

const Template = (args) => <Search {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Search",
  results: ["result1", "result2", "result3"],
  resultsState: "found",
};
