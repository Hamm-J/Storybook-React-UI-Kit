import { useState, useRef } from "react";
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
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  if (
    (inputValue === "" && inputState === "success") ||
    (inputValue === "" && inputState === "autofill")
  ) {
    setInputValue("John Smith");
  }

  return (
    <InputContainer
      className="input-container"
      inputState={inputState}
      onClick={() => focusInput()}
    >
      <InputField
        className="input-field"
        id="input-id"
        placeholder=" "
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        disabled={inputState === "disabled" ? true : false}
        ref={inputRef}
      />
      <Label className="label" htmlFor="input-id">
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
    "readonly",
  ]),
  errorMessage: PropTypes.string,
  descriptionMessage: PropTypes.string,
};

export default Input;
