import {
  CheckboxWrapper,
  CheckboxField,
  CheckboxLabel,
} from "./Checkbox.styled";
import PropTypes from "prop-types";

const Checkbox = ({ label, checkboxState = "default" }) => {
  return (
    <div>
      <CheckboxWrapper>
        <CheckboxField
          className="checkbox"
          id="checkbox"
          checkboxState={checkboxState}
          disabled={checkboxState === "disabled" ? true : false}
        />
        <CheckboxLabel
          className="checkbox__label"
          for="checkbox"
          checkboxState={checkboxState}
        >
          {label}
        </CheckboxLabel>
      </CheckboxWrapper>
    </div>
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
