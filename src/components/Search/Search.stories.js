import Search from "./Search";

export default {
  title: "Components/Search",
  component: Search,
  argTypes: { handleResult: { action: "handleResult" } },
};

const Template = (args) => <Search {...args} />;

export const ResultsFound = Template.bind({});
ResultsFound.args = {
  label: "Search",
  results: ["result1", "result2", "result3"],
  resultsState: "found",
};

export const ResultsLoading = Template.bind({});
ResultsLoading.args = {
  label: "Search",
  results: ["result1", "result2", "result3"],
  resultsState: "loading",
};

export const NoResults = Template.bind({});
NoResults.args = {
  label: "Search",
  results: ["result1", "result2", "result3"],
  resultsState: "noResults",
};
