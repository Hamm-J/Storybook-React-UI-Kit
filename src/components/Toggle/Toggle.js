import {
  ToggleContainer,
  FlexWrapperLeft,
  FlexWrapperRight,
  ToggleLabel,
  ToggleHead,
  ToggleDescription,
  CheckboxField,
  OnIcon,
} from "./Toggle.styled";

import PropTypes from "prop-types";

const Toggle = ({
  toggleState,
  toggleHead,
  toggleDescription,
  disabledState,
}) => {
  return (
    <ToggleContainer>
      <FlexWrapperLeft>
        <CheckboxField id="checkbox-field" disabled={disabledState} />
        <ToggleLabel className="toggle__label" for="checkbox-field">
          <OnIcon className="on-icon" />
        </ToggleLabel>
      </FlexWrapperLeft>
      {toggleState === "label" ? (
        <FlexWrapperRight>
          <ToggleHead>{toggleHead}</ToggleHead>
          <ToggleDescription>{toggleDescription}</ToggleDescription>
        </FlexWrapperRight>
      ) : (
        <></>
      )}
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  toggleState: PropTypes.oneOf(["single", "label"]),
  toggleHead: PropTypes.string,
  toggleDescription: PropTypes.string,
  disabledState: PropTypes.bool,
};

export default Toggle;
