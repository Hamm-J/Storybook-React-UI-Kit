import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  InputTagContainer,
  TagWrapper,
  OverFlowWrapper,
  InputField,
  InputLabel,
  InputMessage,
} from "./InputTag.styled";
import Tag from "../Tag/Tag";

const InputTag = ({
  label,
  inputStateValue,
  errorMessage,
  descriptionMessage,
  tagsMaxCount,
}) => {
  const [inputState, setInputState] = useState("");
  const [errorMessageState, setErrorMessageState] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [tags, setTags] = useState([]);

  useEffect(() => {
    setInputState(inputStateValue);
  }, [inputStateValue]);

  useEffect(() => {
    setErrorMessageState(errorMessage);
  }, [errorMessage]);

  const [isKeyReleased, setIsKeyReleased] = useState(false);

  const handleInput = (e) => {
    const { value } = e.target;
    setInputValue(value);

    const trimmedInputValue = value.trim();
    // If the tags array has reached it's limit and the user has begun entering
    // another tag, alert user with error message
    if (tags.length >= tagsMaxCount && trimmedInputValue !== "") {
      setInputState("error");
      setErrorMessageState("Filled.");
    } else if (tags.length <= tagsMaxCount && trimmedInputValue === "") {
      setInputState(inputStateValue);
      setErrorMessageState(errorMessage);
    }
  };

  const handleTags = (e) => {
    const { key } = e;
    // remove blank spaces from input
    const trimmedInputValue = inputValue.trim();

    // On key press "Enter" with an input that is not blank and not already
    // included in the tags array, add the current input value to tags
    if (
      key === "Enter" &&
      trimmedInputValue.length &&
      !tags.includes(trimmedInputValue) &&
      tags.length < tagsMaxCount
    ) {
      e.preventDefault();
      setTags((prevState) => [...prevState, trimmedInputValue]);
      setInputValue("");
    }
    // if the entered tag is already within the tags array, alert user with error
    else if (tags.includes(trimmedInputValue)) {
      setErrorMessageState("Tag already taken.");
      setInputState("error");
    }

    // On key press of "Backspace" with an input that is not empty and tags
    // in the tags array while "Backspace" is held down, delete tag
    if (
      key === "Backspace" &&
      !inputValue.length &&
      tags.length &&
      isKeyReleased
    ) {
      e.preventDefault();
      const tagsCopy = [...tags];
      const poppedTag = tagsCopy.pop();
      setTags(tagsCopy);
      setInputValue(poppedTag);
    }
    setIsKeyReleased(false);
  };

  // When the user lets go of "Backspace", let the user backspace again
  const handleKeyRelease = (e) => {
    setIsKeyReleased(true);
  };

  return (
    <InputTagContainer className="input-tag__container" inputState={inputState}>
      <OverFlowWrapper>
        <TagWrapper>
          {tags.map((tag, tagIdx) => (
            <Tag key={tagIdx} label={tag}></Tag>
          ))}
        </TagWrapper>
        <InputField
          className="input__field"
          id="inputId"
          placeholder=" "
          value={inputValue}
          onChange={(e) => handleInput(e)}
          onKeyDown={(e) => handleTags(e)}
          onKeyUp={(e) => handleKeyRelease(e)}
          disabled={inputState === "disabled" ? true : false}
        />
        <InputLabel className="input__label" for="inputId" tags={tags}>
          {label}
        </InputLabel>
      </OverFlowWrapper>
      {inputState === "error" && (
        <InputMessage inputState={inputState}>{errorMessageState}</InputMessage>
      )}
      {inputState === "description" && (
        <InputMessage inputState={inputState}>
          {descriptionMessage}
        </InputMessage>
      )}
    </InputTagContainer>
  );
};
InputTag.propTypes = {
  label: PropTypes.string,
  inputStateValue: PropTypes.oneOf([
    "default",
    "disabled",
    "error",
    "description",
  ]),
  errorMessage: PropTypes.string,
  descriptionMessage: PropTypes.string,
  tagsMaxCount: PropTypes.number,
};

export default InputTag;