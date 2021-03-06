import {
  RadioContainer,
  InputField,
  Label,
  RadioGroupWrapper,
} from "./Radio.styled";
import PropTypes from "prop-types";

const Radio = ({
  radioState,
  radioGroup,
  numberOfRadioButtons,
  radioGroupDirection,
}) => {
  // create an array of length numberOfRadioButtons with values for the radio
  // buttons' unique id's
  let radioButtonArray = Array.from(
    { length: numberOfRadioButtons },
    (ele, val) => val
  ).map((ele) => `radioId${ele}`);

  return (
    <RadioGroupWrapper radioGroupDirection={radioGroupDirection}>
      {radioButtonArray.map((radioId, radioIdIdx) => (
        <RadioContainer key={radioIdIdx} className="radio-container">
          <InputField
            className="input-field"
            name={radioGroup}
            id={radioId}
            disabled={radioState === "disabled"}
          />
          <Label className="label" htmlFor={radioId}>
            {`label ${radioIdIdx + 1}`}
          </Label>
        </RadioContainer>
      ))}
    </RadioGroupWrapper>
  );
};

Radio.propTypes = {
  radioState: PropTypes.oneOf(["default", "disabled"]),
  radioGroup: PropTypes.string,
  numberOfRadioButtons: PropTypes.number,
  radioGroupDirection: PropTypes.oneOf(["column", "row"]),
};

export default Radio;
