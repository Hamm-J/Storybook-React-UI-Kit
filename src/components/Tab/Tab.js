import { TabContainer, Label } from "./Tab.styled";
import PropTypes from "prop-types";

const Tab = ({ label }) => {
  return (
    <TabContainer className="tab">
      <Label className="tab__label">{label}</Label>
    </TabContainer>
  );
};

Tab.propTypes = {
  label: PropTypes.string,
};

export default Tab;
