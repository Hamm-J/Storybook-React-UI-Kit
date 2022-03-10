import { TabContainer, Label } from "./Tab.styled";
import PropTypes from "prop-types";

const Tab = ({ label, tabState, handleClick }) => {
  return (
    <TabContainer className="tab" tabState={tabState} onClick={handleClick}>
      <Label className="label" tabState={tabState}>
        {label}
      </Label>
    </TabContainer>
  );
};

Tab.propTypes = {
  label: PropTypes.string,
  tabState: PropTypes.oneOf(["large", "medium", "small", "horizontal"]),
};

export default Tab;
