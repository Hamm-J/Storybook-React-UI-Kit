import { CheckboxContainer, InputField, Label } from "./Checkbox.styled";
import PropTypes from "prop-types";

const Checkbox = ({ label, checkboxState }) => {
  return (
    <CheckboxContainer>
      <InputField
        className="checkbox"
        id="checkbox"
        checkboxState={checkboxState}
        disabled={checkboxState === "disabled" ? true : false}
      />
      <Label
        className="checkbox__label"
        for="checkbox"
        checkboxState={checkboxState}
      >
        {label}
      </Label>
    </CheckboxContainer>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
  checkboxState: PropTypes.oneOf([
    "default",
    "disabled",
    "error",
    "indeterminate",
  ]),
};

export default Checkbox;
