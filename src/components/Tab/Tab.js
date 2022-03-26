import {
  TabContainer,
  Label,
  CircleWrapper,
  Inner,
  Circle,
  BarLeft,
  BarRight,
  ProgressLeft,
  ProgressRight,
} from "./Tab.styled";
import PropTypes from "prop-types";

const Tab = ({ label, tabState, handleClick }) => {
  return (
    <>
      <TabContainer className="tab" tabState={tabState} onClick={handleClick}>
        <Label className="label" tabState={tabState}>
          {label}
        </Label>
        {tabState === "horizontal" && (
          <CircleWrapper>
            <Inner></Inner>
            <Circle>
              <BarLeft>
                <ProgressLeft className="progress-left"></ProgressLeft>
              </BarLeft>
              <BarRight>
                <ProgressRight className="progress-right"></ProgressRight>
              </BarRight>
            </Circle>
          </CircleWrapper>
        )}
      </TabContainer>
    </>
  );
};

Tab.propTypes = {
  label: PropTypes.string,
  tabState: PropTypes.oneOf(["large", "medium", "small", "horizontal"]),
};

export default Tab;
