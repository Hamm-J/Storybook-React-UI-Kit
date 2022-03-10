import { useState } from "react";
import PropTypes from "prop-types";
import {
  InputContainer,
  InputField,
  Label,
  Message,
  DoneIcon,
} from "./Input.styled";

const Input = ({
  label,
  inputState = "default",
  errorMessage,
  descriptionMessage,
}) => {
  const [inputValue, setInputValue] = useState("");

  if (
    (inputValue === "" && inputState === "success") ||
    (inputValue === "" && inputState === "autofill")
  ) {
    setInputValue("John Smith");
  }

  return (
    <InputContainer className="input-container" inputState={inputState}>
      <InputField
        className="input-field"
        id="input-id"
        placeholder=" "
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        disabled={inputState === "disabled" ? true : false}
      />
      <Label className="label" for="input-id">
        {label}
      </Label>
      {(inputState === "success" || inputState === "autofill") && <DoneIcon />}
      {inputState === "error" && (
        <Message inputState={inputState}>{errorMessage}</Message>
      )}
      {inputState === "description" && (
        <Message inputState={inputState}>{descriptionMessage}</Message>
      )}
    </InputContainer>
  );
};
Input.propTypes = {
  label: PropTypes.string,
  inputState: PropTypes.oneOf([
    "default",
    "disabled",
    "error",
    "success",
    "autofill",
    "description",
  ]),
  errorMessage: PropTypes.string,
  descriptionMessage: PropTypes.string,
};

export default Input;
