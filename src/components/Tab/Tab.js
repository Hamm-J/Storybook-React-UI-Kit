import { TabContainer, Label } from "./Tab.styled";
import PropTypes from "prop-types";

const Tab = ({ label, tabState, progressValue }) => {
  return (
    <TabContainer className="tab" tabState={tabState}>
      <Label className="label" tabState={tabState}>
        {label}
      </Label>
    </TabContainer>
  );
};

Tab.propTypes = {
  label: PropTypes.string,
  tabState: PropTypes.oneOf(["large", "medium", "small", "horizontal"]),
  progressValue: PropTypes.number,
};

export default Tab;
