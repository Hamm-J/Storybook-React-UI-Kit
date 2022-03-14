import {
  ToggleContainer,
  ToggleWrapper,
  TextWrapper,
  Label,
  Head,
  Description,
  CheckboxField,
  OnIcon,
} from "./Toggle.styled";

import PropTypes from "prop-types";

const Toggle = ({
  toggleState,
  toggleHead,
  toggleDescription,
  disabledState,
  handleToggle,
}) => {
  return (
    <ToggleContainer>
      <ToggleWrapper>
        <CheckboxField id="checkbox-field" disabled={disabledState} />
        <Label
          className="label"
          htmlFor="checkbox-field"
          onClick={(e) => handleToggle(e)}
        >
          <OnIcon className="on-icon" />
        </Label>
      </ToggleWrapper>
      {toggleState === "label" && (
        <TextWrapper>
          <Head>{toggleHead}</Head>
          <Description>{toggleDescription}</Description>
        </TextWrapper>
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
