import { useState, useEffect } from "react";
import { CheckboxContainer, InputField, Label } from "./Checkbox.styled";
import PropTypes from "prop-types";

const Checkbox = ({ label, checkboxState }) => {
  const [checked, setChecked] = useState(false);

  // When checkboxState changed to "error" uncheck the the checkbox
  useEffect(() => {
    if (checkboxState === "error") {
      setChecked(false);
    }
  }, [checkboxState]);

  // update the checked state with the checkbox value since the checked
  // attribute is being handle progammatically
  const handleCheckbox = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <CheckboxContainer>
      <InputField
        className="checkbox"
        id="checkbox"
        checkboxState={checkboxState}
        disabled={checkboxState === "disabled" ? true : false}
        checked={checked}
        onChange={(e) => handleCheckbox(e)}
      />
      <Label className="label" htmlFor="checkbox" checkboxState={checkboxState}>
        {label}
      </Label>
    </CheckboxContainer>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
  checkboxState: PropTypes.oneOf(["default", "disabled", "error"]),
};

export default Checkbox;
