import {
  RadioWrapper,
  InputField,
  RadioLabel,
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
        <RadioWrapper key={radioIdIdx} className="radio__wrapper">
          <InputField
            className="input__field"
            name={radioGroup}
            id={radioId}
            disabled={radioState === "disabled" ? true : false}
          />
          <RadioLabel className="radio__label" for={radioId}>
            {`label ${radioIdIdx + 1}`}
          </RadioLabel>
        </RadioWrapper>
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
