import { useState } from "react";
import PropTypes from "prop-types";
import {
  InputField,
  InputLabel,
  InputMessage,
  InputWrapper,
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
    <InputWrapper className="inputWrapper" inputState={inputState}>
      <InputField
        className="input__field"
        id="inputId"
        placeholder=""
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        disabled={inputState === "disabled" ? true : false}
      />
      <InputLabel className="input__label" for="inputId">
        {label}
      </InputLabel>
      {inputState === "success" || inputState === "autofill" ? (
        <DoneIcon />
      ) : (
        <></>
      )}
      {inputState === "error" ? (
        <InputMessage inputState={inputState}>{errorMessage}</InputMessage>
      ) : (
        <></>
      )}
      {inputState === "description" ? (
        <InputMessage inputState={inputState}>
          {descriptionMessage}
        </InputMessage>
      ) : (
        <></>
      )}
    </InputWrapper>
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
